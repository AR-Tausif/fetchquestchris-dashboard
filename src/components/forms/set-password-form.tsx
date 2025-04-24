import { Button, Form, FormProps, Input } from "antd";
import { LucideLoaderCircle } from "lucide-react";
import { useResetPasswordMutation } from "../../redux/api/auth.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type FieldType = {
  newPassword: string,
  confirmPassword: string
};

export const SetPasswordForm = () => {


  const [postReset, { isLoading }] = useResetPasswordMutation()

  const navig = useNavigate();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const res = await postReset(values).unwrap();

      toast.success(res?.message || 'Password rest successfully');

      navig('/login')

    } catch (err: any) {
      toast.error(err?.data?.message || 'Something went wrong, try again');
    }
  }


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
          label="New Password"
          name="newPassword"
          rules={[
            { message: "Please input the current new password of collection!" },
          ]}
        >
          <Input.Password
            placeholder="Enter Your Password"
          />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            {
              message:
                "Please input the current confirm password of collection!",
            },
          ]}
        >
          <Input.Password

            placeholder="Enter Your Confirm Password"
          />
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
