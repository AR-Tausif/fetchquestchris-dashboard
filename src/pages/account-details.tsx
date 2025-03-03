import { Form, Input, Select } from "antd";
import { AccountDetailsTable } from "../components";
import { Option } from "antd/es/mentions";
import { months } from "../assets/data";

export const AccountDetails = () => {
  const [form] = Form.useForm();

  const onFinish = () => {};

  return (
    <div>
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        style={{ maxWidth: "100%", display: "flex", gap: 16 }}
        scrollToFirstError
      >
        <Form.Item name="month" style={{ width: "100%" }}>
          <Select placeholder="This Month">
            {months.map((month) => (
              <Option value={month}>{month}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="search_user"
          style={{ width: " 100%" }}
          className="success"
        >
          <Input placeholder="Search User" />
        </Form.Item>
      </Form>
      <AccountDetailsTable />
    </div>
  );
};
