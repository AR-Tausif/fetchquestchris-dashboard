import { Button, Form, FormProps, Input } from "antd";
import { LucideLoaderCircle } from "lucide-react";
import { useChangePasswordMutation } from "../../redux/api/auth.api";
import { toast } from "react-toastify";

type FieldType = {
  oldPassword: string,
  newPassword: string,
  confirmPassword: string
};

export const ChangePasswordForm = () => {
  const [antDform] = Form.useForm();

  const [postChangePass, { isLoading }] = useChangePasswordMutation();


  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    if (values?.newPassword !== values?.confirmPassword) {
      toast.error("Password not match");
      return;
    }
    try {

      await postChangePass({ oldPassword: values?.oldPassword, newPassword: values?.newPassword, confirmPassword: values?.confirmPassword }).unwrap();

      toast.success("Password Update Successfully")

      antDform.resetFields();

    } catch (error: any) {
      toast.error(error?.data?.message || "Password update failed, try again")
    }
  }

  return (
    <div className="flex flex-row justify-center">
      <div className="min-w-xl">
        <Form
          name="basic"
          style={{ width: '100%' }}
          form={antDform}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical">


          <Form.Item<FieldType>
            label="Old Password"
            name="oldPassword"
            rules={[
              { required: true, message: 'Old password required' },
            ]}
          >
            <Input.Password placeholder="Enter Your Old Password" />
          </Form.Item>

          <Form.Item<FieldType>
            label="New Password"
            name="newPassword"
            rules={[
              { required: true, message: 'New password required' },
            ]}
          >
            <Input.Password placeholder="write new password" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              { required: true, message: 'Confirm password required' },
            ]}
          >
            <Input.Password placeholder="write confirm password" />
          </Form.Item>


          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              block
              icon={isLoading ? <LucideLoaderCircle className="animate-spin text-white" /> : <></>}
            >
              Save
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div>
  );
};
