import React, { useEffect, useState } from "react";
import axios from "axios";
import Doctors from "../components/Doctors";
import { Row } from "antd";
import Layout from "../components/Layout";

const Appointments = () => {
    const [doctors, setDoctors] = useState([]);
    // login user data
    const getUserData = async () => {
        try {
            const res = await axios.get(
                "/api/v1/user/getSingleDoctor",
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                }
            );
            if (res.data.success) {
                setDoctors(res.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getUserData();
    }, []);
    return (
        <Layout>
            <Row>
                {doctors && doctors.map((doctor) => <Doctors doctor={doctor} />)}
            </Row>
        </Layout>
    );
};

export default Appointments