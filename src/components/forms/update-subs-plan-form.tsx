import { Form, Input, notification } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { PrimaryButton } from "../primary-button";

export function UpdateSubsPlanForm() {
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
          label="Subscription Name"
          name="subscription_name"
          rules={[
            { message: "Please input the subscription name of collection!" },
          ]}
        >
          <Input
            placeholder="Enter Subscription Name"
            defaultValue="Model King"
          />
        </Form.Item>
        <Form.Item name="description" label="Short Description">
          <TextArea
            showCount
            maxLength={100}
            placeholder="Enter Details"
            style={{ height: 120, resize: "none", color: "#010101" }}
            defaultValue="You are the welcome to most effective solution to get the serious kind of project that you have build yet to mind blowing to handicraft for your all soulution to get the energies intire projects"
          />
        </Form.Item>
        <Form.Item name="price" label="Price">
          <Input
            type="number"
            addonAfter={<DollarOutlined />}
            placeholder="Enter Price"
            defaultValue={150}
          />
        </Form.Item>
        <PrimaryButton type="submit" styles={{ width: "100%" }}>
          Save
        </PrimaryButton>
      </Form>
    </>
  );
}
