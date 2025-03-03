import { Form, Input, notification } from "antd";
import { PrimaryButton } from "../primary-button";

export const ChangePasswordForm = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (data: Record<string, unknown>) => {
    const b = {
      ...data,
    };
    api.open({
      message: "Service Updated succesfully",
      description: (
        <pre>
          <code>{JSON.stringify(b)}.</code>
        </pre>
      ),
      duration: 2,
    });
  };
  const onFinish = (values: Record<string, unknown>) => {
    openNotification(values);
    // console.log("Received values of form: ", values);
  };
  return (
    <>
      {contextHolder}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Current Password"
          name="current_password"
          rules={[
            { message: "Please input the current password of collection!" },
          ]}
        >
          <Input placeholder="******" />
        </Form.Item>

        <Form.Item name="new_password" label="New password">
          <Input type="text" placeholder="victoria1234@gmail.com" />
        </Form.Item>
        <Form.Item name="confirm_new_password" label="Confirm New Password">
          <Input type="text" placeholder="+99007007007" />
        </Form.Item>
        <PrimaryButton type="submit" styles={{ width: "100%" }}>
          update
        </PrimaryButton>
      </Form>
    </>
  );
};
