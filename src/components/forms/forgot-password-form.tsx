import { Button, Form, FormProps, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../../redux/api/auth.api";
import { LucideLoaderCircle } from "lucide-react";
import { toast } from "react-toastify";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addOtpToken } from "../../redux/features/auth.slice";

type FieldType = {
  email: string,
};

export const ForgotPasswordForm = () => {

  const [postForgot, { isLoading }] = useForgotPasswordMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

    try {
      const res = await postForgot(values).unwrap()
      dispatch(addOtpToken({
        token: res?.data?.token
      }))
      toast.success(res?.message || "One otp send you email, check now")
      navigate("/otp-verify");
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong, try again")
    }
  };
  return (
    <>

      <Form
        name="basic"
        style={{ width: '100%' }}
        // initialValues={}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input the current email of collection!" }]}
        >
          <Input type="email" placeholder="Enter Your Email" />
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            block
            icon={isLoading ? <LucideLoaderCircle className="animate-spin text-white !mt-1" /> : <></>}
            iconPosition="end"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
