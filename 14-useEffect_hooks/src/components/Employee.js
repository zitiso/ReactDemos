import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Employee() {
    const [salary, setSalary] = useState(1000);

    useEffect(() => {
        setTimeout(() => {
            setSalary((salary) => salary * 1.1);
        }, 1000);
    });


    return (

        <h1>I got a raise! I now earn $ {salary} </h1>
    );
}