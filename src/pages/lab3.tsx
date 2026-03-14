import { Form, Input, Button, Select } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const Lab3 = () => {

  const [ setPost] = useState<any>(null);

  const onFinish = (values: any) => {
    console.log("Form data:", values);
  };

  const onFinishPost = (values: any) => {
    setPost(values);
  };

  return (
    <div style={{ padding: 20 }}>

      {/* Bài 1 */}
      <h2>Bài 1 - Login</h2>

      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Email bắt buộc" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Password bắt buộc" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>

      {/* Bài 2 */}
      <h2 style={{ marginTop: 30 }}>Bài 2 - Register</h2>

      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>

        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: "email", message: "Email không đúng định dạng" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ min: 6, required:true, message: "Password tối thiểu 6 ký tự" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirm"
          dependencies={["password"]}
    
          rules={[{ required: true, message: "Password bắt buộc" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>

      </Form>

      {/* Bài 3 */}
      <h2 style={{ marginTop: 30 }}>Bài 3 - Product</h2>

      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>

        <Form.Item label="Tên sản phẩm" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Giá" name="price">
          <Input />
        </Form.Item>

        <Form.Item label="Số lượng" name="quantity">
          <Input />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>


      {/* Bài 4 */}
      <h2 style={{ marginTop: 30 }}>Bài 4 - Blog</h2>

      <Form layout="vertical" onFinish={onFinishPost} style={{ maxWidth: 400 }}>

        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>

        <Form.Item label="Category" name="category">
          <Select
            options={[
              { label: "Laptop", value: "Laptop" },
              { label: "Samsung", value: "Samsung" },
              { label: "Iphone", value: "Iphone" }
            ]}
          />
        </Form.Item>
        <Form.Item label="Slug" name="slug">
          <Input />
        </Form.Item>
        <Form.Item label="Content" name="content">
          <TextArea />
        </Form.Item>
        <Form.Item label="Image URL" name="image">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
    </div>
  );
};

export default Lab3;