import { Button, Form, Input, notification, Select } from "antd";
import { Option } from "antd/es/mentions";

export const ServiceViewForm = ({
  serviceName: gameName,
  status,
}: {
  serviceName: string;
  status: string;
  image?: string;
}) => {
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

  const onFinishFailed = () => {
    // console.log("onfinnished...");
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="game_name"
          label="Game Name"
          rules={[{ type: "string", min: 6 }]}
        >
          <Input placeholder="input placeholder" defaultValue={gameName} />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ message: "Please select status!" }]}
        >
          <Select placeholder="select status" defaultValue={status}>
            <Option value="active">Active</Option>
            <Option value="inactive">In Active</Option>
          </Select>
        </Form.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            //   alignItems: "center",
          }}
        >
          <Form.Item style={{ width: "100%" }}>
            <Button
              htmlType="submit"
              style={{
                width: "100%",
                background:
                  "linear-gradient(to right, #DA5DA3 ,#5B428A)",
                color: "#FDFDFD",
              }}
            >
              Update
            </Button>
          </Form.Item>
          <Form.Item style={{ width: "100%" }}>
            <Button style={{ width: "100%" }}>Delete</Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};
