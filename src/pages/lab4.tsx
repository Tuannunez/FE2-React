import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import toast from "react-hot-toast";


interface IStory {
  title: string;
  categoryId?: number;
}

export default function StoryForm() {


  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/categories");
      return res.data;
    },
  });

 
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (values: IStory) => {
      await axios.post("http://localhost:3000/stories", values);
    },
    onSuccess: () => {
      toast.success("Tạo thành công");
    },
    onError: () => {
      toast.error("Tạo thất bại");
    },
  });

  const onFinish = (values: IStory) => {
    mutate(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      
    
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Không được để trống" }]}
      >
        <Input placeholder="title" />
      </Form.Item>


      <Form.Item label="Category" name="categoryId">
        <Select
          placeholder="Chọn danh mục"
          options={categories?.map((item: any) => ({
            label: item.title,
            value: item.id,
          }))}
        />
      </Form.Item>

      <Button htmlType="submit" loading={isPending} type="primary">
        Submit
      </Button>

     
      {isSuccess && (
        <div style={{ color: "green" }}>
          Story created successfully!
        </div>
      )}
    </Form>
  );
}