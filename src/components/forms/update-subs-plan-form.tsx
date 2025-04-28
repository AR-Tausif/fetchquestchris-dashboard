import { Button, Form, FormProps, Input, InputNumber, Modal } from "antd";
import { ProductType } from "../../types";
import { LucideLoaderCircle, Plus, Trash } from "lucide-react";
import { useEditProductMutation } from "../../redux/api/product.api";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";


type FieldType = {
  name: string;
  price: number,
  stock: number,
  details: string,
};

export function UpdateSubsPlanForm({ defaultData, open, onClose }: {
  defaultData: ProductType | null,
  open: boolean;
  onClose: () => void;
}) {

  const [postUpdate, { isLoading }] = useEditProductMutation()

  const [dImages, setDImages] = useState<string[]>(defaultData?.images || []);
  const [images, setImages] = useState<File[]>([]);

  const [form] = Form.useForm()

  const fileonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files as File[] | null;
    if (!fileList) {
      return;
    }
    setImages(prev => [...prev, ...fileList])
  };

  const removeImg = useCallback((indxParam: number) => {
    const finalImgs = images?.filter((_, indx) => {
      return indx !== indxParam
    })
    setImages(finalImgs)
  }, [images])

  const removeDefaultImg = (key: string) => {
    const finalImgs = dImages?.filter((i) => {
      return i !== key
    })
    setDImages(finalImgs)
  }

  useEffect(() => {
    setDImages(defaultData?.images || [])
  }, [defaultData])

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

    try {
      const form = new FormData();
      form.append('name', values?.name);
      form.append('price', values?.price.toString());
      form.append('stock', values?.stock.toString());
      form.append('details', values?.details);

      form.append('existImages', JSON.stringify(dImages))

      images.forEach((image) => {
        form.append('images', image);
      });

      await postUpdate({ id: (defaultData as ProductType)._id, body: form }).unwrap();
      toast.success("Product update succesfully");

    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong, try again")
    }

  };

  useEffect(() => {
    form.setFieldsValue({ name: defaultData?.name, details: defaultData?.details, price: defaultData?.price, stock: defaultData?.stock })
  }, [form, defaultData])


  return (
    <>


      <Modal
        centered
        open={open}
        title={"Edit Product Details"}
        onOk={() => {
          setImages([])
          onClose()
        }}
        onCancel={() => {
          setImages([])
          onClose()
        }}
        footer={null}
      >

        <Form
          name="basic"
          form={form}
          style={{ width: '100%' }}
          initialValues={defaultData || {}}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical">

          <section>
            <p className="mb-1.5 block text-primary font-poppins text-base text-left">Product Images</p>
            <div className='flex flex-row flex-wrap gap-x-2 items-center'>
              {
                dImages?.map((img, indx) => {
                  return <div key={indx} >
                    <div className='relative w-20 h-20'>
                      <img src={img} className='h-full w-full object-cover rounded-md' alt='uploaded car' />
                    </div>

                    <button type="button" onClick={() => removeDefaultImg(img)}>
                      <Trash size={16} className='text-sm text-danger' />
                    </button>
                  </div>
                })
              }
              {
                images?.map((img, indx) => {
                  return <div key={indx} >
                    <div className='relative w-20 h-20'>
                      <img src={URL.createObjectURL(img)} className='h-full w-full object-cover rounded-md' alt='uploaded car' />
                    </div>

                    <button type="button" onClick={() => removeImg(indx)}>
                      <Trash size={16} className='text-sm text-danger' />
                    </button>
                  </div>
                })
              }
              <label htmlFor='addImage' className='h-20 w-20 rounded-md border-2 border-dotted border-strokeinput flex flex-col justify-center items-center'>
                <Plus className='text-orange-500 text-base' />
                <p className="mb-1.5 block text-orange-500 font-poppins text-xs text-center">Upload images</p>
              </label>
              <input onChange={fileonChange} type="file" name="addImage" id="addImage" style={{ display: "none" }} accept="image/*" multiple />
            </div>
          </section>


          <Form.Item<FieldType>
            label="Product name"
            name="name"
            rules={[
              { required: true, message: 'Please product name' },
            ]}
          >
            <Input placeholder="Enter Product name" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Product price"
            name="price"
            rules={[
              { required: true, message: 'Product price required' },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} size="large" placeholder="Enter Product Price" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Product stock"
            name="stock"
            rules={[
              { required: true, message: 'Product stock required' },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} size="large" placeholder="Enter Product stock" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Product description"
            name="details"
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
