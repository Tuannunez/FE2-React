import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, Popconfirm, Table, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export function StoryList() {
  const [search, setSearch] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const qc = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (id: number) =>
      await axios.delete(`http://localhost:3000/stories/${id}`),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const filteredData = data?.filter((item: any) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      title: "Tên truyện",
      dataIndex: "title",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      render: (src: string) => <Image src={src} height={100} />,
    },

    // Bài 1:
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) => {
        const d = new Date(date);
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
      },
    },

    //  Bài 2:
    {
      title: "Action",
      render: (_: any, record: any) => (
        <>
          <Popconfirm
            title="Xóa truyện"
            description="Bạn chắc chưa?"
            okText="Có"
            cancelText="Không"
            onConfirm={() => mutate(record.id)}
          >
            <Button danger>Xóa</Button>

          </Popconfirm>
          <Link to={`/edit/${record.id}`}>
          <Button>Sửa</Button>
          </Link>
          </>

      ),
    },
  ];

  return (
    <>
      {/* Bài 5 */}
      <Input
        placeholder="Tìm truyện..."
        style={{ marginBottom: 20, width: 300 }}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Table
        columns={columns}
        dataSource={filteredData}
        loading={isLoading}
        rowKey="id"
        // Bài 3: 
        pagination={{ pageSize: 5 }}
      />
    </>
  );
}