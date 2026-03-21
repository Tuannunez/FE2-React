import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function EditStory(){
   
    const  { data, isLoading } = useQuery({
        queryKey: ["story"],
        queryFn: async() => {
            const res = await axios.get("http://localhost:3000/stories/1");
            return res.data;
        },
    });

    const [ form ] = Form.useForm();
    const navigate = useNavigate();
    useEffect(() => {
        if(data){
            form.setFieldsValue(data);
        }
    }, [data]);

    const mutation = useMutation({
        mutationFn: async(values: any) => {
            return await axios.patch(" http://localhost:3000/stories/1", values);
        },
        onSuccess: () => {
            message.success("Cập nhật tc");

            navigate("/");
        },
        onError: () => {
            message.error("Cập nhật tb");
        },
    });
    const onFinsh = (values: any) => {
        mutation.mutate(values);
            
    }

    return (
        <Form onFinish={onFinsh} layout="vertical" disabled={mutation.isPending}>
            <Form.Item label="Tên truyện" name="title" rules={[{required: true, message: "Ko đc để trống"}]}>
                <Input/>
            </Form.Item>
            <Form.Item label="Tác giả" name="author" rules={[{ required: true, message:"ko đc để trống"}]}>
                <Input/>
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={mutation.isPending}>Submit</Button>
        </Form>
    );
}