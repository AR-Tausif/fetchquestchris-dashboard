import { Button, Form, FormProps, Input } from "antd";
import { LucideLoaderCircle } from "lucide-react";
import { useUpdateProfileMutation } from "../../redux/api/auth.api";
import { IUserDetails } from "../../types";
import { toast } from "react-toastify";

type FieldType = {
  name: string,
  contact: string,
  email: string
};

export const ProfileEditForm = ({ image, defaultData }: { image: File | null, defaultData: IUserDetails }) => {

  const [postEdit, { isLoading }] = useUpdateProfileMutation();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    // const toastLoad = toast.loading('loading....')
    try {

      const form = new FormData();
      form.append('name', values?.name)
      form.append('contact', values?.contact)

      if (image) {
        form.append("image", image)
      }

      await postEdit({ data: form }).unwrap();

      toast.success("Profile update done.")

    } catch (error) {
      toast.error("Profile update failed, try again")
    }
  }

  return (
    <div className="flex flex-row justify-center">
      <div className="min-w-xl">
        <Form
          name="basic"
          style={{ width: '100%' }}
          initialValues={defaultData}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical">


          <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[
              { required: true, message: 'Please input name' },
            ]}
          >
            <Input placeholder="Enter Your name" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input email' },
            ]}
          >
            <Input placeholder="write email" disabled />
          </Form.Item>

          <Form.Item<FieldType>
            label="Contact"
            name="contact"
            rules={[
              // { required: true, message: 'Please enter contact' },
            ]}
          >
            <Input placeholder="Enter contact number" />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              block
              icon={isLoading ? <LucideLoaderCircle className="animate-spin text-white" /> : <></>}
            >
              Submit
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div>
  );
};
