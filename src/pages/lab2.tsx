import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Table, Button, Tag } from "antd";

function Lab2() {

  // Bài 1
  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    { title: "Major", dataIndex: "major" },
  ];

  const data = [
    { key: 1, id: 1, name: "Nam", age: 20, major: "IT" },
    { key: 2, id: 2, name: "Hùng", age: 21, major: "Business" },
  ];


  // Bài 2
  const columns2 = [
    { title: "ID", dataIndex: "id" },
    { title: "Product Name", dataIndex: "name" },
    { title: "Price", dataIndex: "price" },
    { title: "Category", dataIndex: "category" },
  ];

  const data2 = [
    { key: 1, id: 1, name: "Laptop Dell", price: 1500, category: "Laptop" },
    { key: 2, id: 2, name: "iPhone 15", price: 1200, category: "Phone" },
    { key: 3, id: 3, name: "iPad", price: 900, category: "Tablet" },
    { key: 4, id: 4, name: "Macbook", price: 2000, category: "Laptop" },
    { key: 5, id: 5, name: "Samsung S24", price: 1100, category: "Phone" },
  ];


  // Bài 3
  const usercolumns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },

    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag color={status === "active" ? "green" : "red"}>
          {status}
        </Tag>
      ),
    },

    {
      title: "Action",
      render: () => (
        <>
          <Button type="primary" style={{ marginRight: 8 }}>
            Edit
          </Button>
          <Button danger>Delete</Button>
        </>
      ),
    },
  ];

  const userdata = [
    { key: 1, id: 1, name: "Nam", email: "nam@gmail.com", status: "active" },
    { key: 2, id: 2, name: "Hùng", email: "hung@gmail.com", status: "inactive" },
  ];

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4">

        <h2 className="text-2xl font-bold mb-4">Student List</h2>
        <Table columns={columns} dataSource={data} />

        <br /><br />

        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <Table
          columns={columns2}
          dataSource={data2}
          pagination={{ pageSize: 3 }}
        />

        <br /><br />

        <h2 className="text-2xl font-bold mb-4">User List</h2>
        <Table columns={usercolumns} dataSource={userdata} />

      </div>

      <Toaster />
    </>
  );
}

export default Lab2;