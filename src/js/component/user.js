import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ContactDetails = () => {
    const [contact, setContact] = useState(null);
    const { id } = useParams();
    const url = "https://playground.4geeks.com/contact/agendas/sam/contacts/${id}" 
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Contact:", data);
                setContact(data);
            })
            .catch((error) => {
                console.error("", error);
            });
    }, [url]);

    if (!contact) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h1>Contact Details</h1>
            <div className="contact-details">
                <p><strong>Name:</strong> {contact.full_name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Phone Number:</strong> {contact.phone}</p>
                <p><strong>Address:</strong> {contact.address}</p>
            </div>
        </div>
    );
};

export default ContactDetails;