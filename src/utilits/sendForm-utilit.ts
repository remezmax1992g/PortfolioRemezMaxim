import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


const serviceID = "service_7zfzpek"
const templateID = "template_a8g8xog"
const userID = "43lcwkuEhl68Xe99h"



export const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.currentTarget)
    emailjs.sendForm(serviceID, templateID, e.currentTarget, userID)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: "success",
                title: "Message Sent Successfully"
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: "error",
                title: "Ooops, something went wrong",
                text: error.text,
            })
        });
    e.currentTarget.reset()
};