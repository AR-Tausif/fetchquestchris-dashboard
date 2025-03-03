import { Form, Input, notification } from "antd";
import { PrimaryButton } from "../primary-button";
import { useNavigate } from "react-router-dom";

export const ForgotPasswordForm = () => {
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
  const navigate = useNavigate();
  const onFinish = (values: Record<string, unknown>) => {
    // console.log(values);
    openNotification(values);
    // console.log("Received values of form: ", values);
    navigate("/set-password");
  };
  return (
    <>
      {contextHolder}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ message: "Please input the current email of collection!" }]}
        >
          <Input type="email" placeholder="Enter Your Email" />
        </Form.Item>

        <PrimaryButton type="submit" styles={{ width: "100%" }}>
          Send Code
        </PrimaryButton>
      </Form>
    </>
  );
};
