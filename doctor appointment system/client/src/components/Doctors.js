import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Table } from "antd";

const Doctors = ({ doctor }) => {
  // const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const res = await axios.get("/api/v1/user/user-appointments", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => (
        <div>
          {doctor.firstName} {doctor.lastName}
        </div>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (text) =>
        <span>{doctor.Phone}</span>,
    },
    {
      title: "Specialization",
      dataIndex: "specialization",
      render: (text) =>
        <span>{doctor.specialization}</span>,
    },
    {
      title: "Experience",
      dataIndex: "experience",
      render: (text) =>
        <span>{doctor.experience}</span>,
    },
    {
      title: "Date & Time",
      dataIndex: "date",
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")} &nbsp;
          {moment(record.time).format("HH:mm")}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  return (
    <>
      <div>
        <h1>Appoinmtnets Lists</h1>
      </div>
      <div>
        <Table style={{ margin: "18px" }} columns={columns} dataSource={appointments} />
      </div>
    </>
  );
};

export default Doctors;
