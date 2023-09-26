import React from "react";
import "@/sass/components/alert.scss";
import { BsCheckCircleFill } from "react-icons/bs";

type AlertType = "success" | "danger" | "warning" | "info";

const Alert = ({
    heading,
    message,
    type,
}: {
    heading: string;
    message: string;
    type: AlertType;
}) => {
    return (
        <div className={"alert-container" + " " + type}>
            <BsCheckCircleFill />
            <div>
                <h1>{heading}:</h1>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Alert;
