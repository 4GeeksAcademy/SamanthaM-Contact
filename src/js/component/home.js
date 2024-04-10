import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [users, setUsers] = useState([]);

    const urlContacts = "";

    useEffect(() => {
        Contacts();
    }, []);

    const Contacts = () => {
        fetch(urlUsersRegistered, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("", data);
            setUsers(data); //
        })
        .catch((err) => {
            console.error(" :", err);
        });
    };

    return (
        <div className="container">
            <h1>Contact List</h1>
            <div className="contact-list">
                {users.slice(0, 4).map((user, index) => (
                    <div key={index} className="contact">
                        <p><strong> Name:</strong> {user.full_name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong> Phone number :</strong> {user.phone}</p>
                        <p><strong>Address :</strong> {user.address}</p>
                        <p><strong>ID :</strong> {user.id}</p>
                        <Link to={`/ContactDetails/${user.id}`}> See Details</Link>
                    </div>
                ))}
            </div>
            <Link to="/Contacts">
				<button className="btn btn-primary">Register</button>
			</Link>
        </div>
    );
};