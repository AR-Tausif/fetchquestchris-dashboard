import { Button, Form, FormProps, Input, Modal, Tooltip } from "antd";
import { GameType } from "../../types";
import { useEditGameMutation } from "../../redux/api/game.api";
import { toast } from "react-toastify";
import { useState } from "react";
import { CloudUpload, LucideLoaderCircle, Pencil } from "lucide-react";

type FieldType = {
  name: string,
  description: string,
  link: string
};

export default function GameItemViewCard({ defaultData }: { defaultData: GameType | {} }) {

  const [postUpdate, { isLoading }] = useEditGameMutation();

  const [openAccountDetail, setOpenAccountDetail] = useState(false);

  const [image, setImage] = useState<File | null>(null);

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

    try {
      const form = new FormData();
      form.append('data', JSON.stringify(values));
      if (image) {
        form.append('image', image)
      }
      await postUpdate({ id: (defaultData as GameType)._id, body: form }).unwrap();
      toast.success("Game update succesfully");
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong, try again")
    }
  };

  return (
    <>
      <Tooltip title={"Edit Game"}>
        <button
          // style={styles.actionIcon}
          className="cursor-pointer"
          onClick={() => {
            setOpenAccountDetail(true)
          }}
        >
          {/* <EyeInvisibleOutlined style={styles.icon} /> */}
          <Pencil size={16} />

        </button>
      </Tooltip>

      <Modal
        centered
        open={openAccountDetail}
        title={"Edit Game Details"}
        onOk={() => setOpenAccountDetail(false)}
        onCancel={() => {
          setImage(null)
          setOpenAccountDetail(false)
        }}
        footer={null}
      >

        <div className="w-full">

          <label htmlFor="image">
            <div
              className="text-primary my-4 mb-8 flex h-20 w-full items-center justify-center rounded-lg border border-gray-400 hover:cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center">
                <CloudUpload size={32} color="gray" />
                <p className="font-semibold text-gray-500">Upload image</p>
              </div>
            </div>
          </label>

          <input
            type="file"
            id="image"
            style={{ display: "none" }}
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setImage(file);
              }
            }}
          />

          <div
            className="text-primary flex w-full items-center justify-between border border-gray-700 px-2 py-3"
          >
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : (defaultData && 'image' in defaultData
                    ? defaultData.image
                    : '/empty-photo.jpg')
              }
              alt="logo"
              className="mx-auto h-full max-h-10 w-auto rounded"
            />
          </div>

        </div>

        <Form
          name="basic"
          style={{ width: '100%' }}
          initialValues={defaultData}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical">

          <Form.Item<FieldType>
            label="Game name"
            name="name"
            rules={[
              { required: true, message: 'Please input name' },
            ]}
          >
            <Input placeholder="Enter Game name" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Website link"
            name="link"
            rules={[
              { required: true, message: 'Please input website link' },
            ]}
          >
            <Input placeholder="https://gameweb.com" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Game description"
            name="description"
            rules={[
              { required: true, message: 'Please write some description' },
            ]}
          >
            <Input.TextArea placeholder="Write some description" autoSize={{ minRows: 3 }} />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              block
              icon={isLoading ? <LucideLoaderCircle className="animate-spin text-white" /> : <></>}
            >
              Submit
            </Button>
          </Form.Item>

        </Form>

      </Modal>

    </>
  );
}
