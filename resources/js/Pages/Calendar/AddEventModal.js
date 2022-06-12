import { Inertia } from "@inertiajs/inertia";
import React from "react";
import Modal from "react-modal";

const modalStyle = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.85)",
    },
    content: {
        position: "absolute",
        top: "5rem",
        left: "5rem",
        right: "5rem",
        bottom: "5rem",
        backgroundColor: "white",
        borderRadius: "1rem",
        padding: "1.5rem",
    },
};

Modal.setAppElement("#root");

const AddEventModal = (props) => {
    const { modalIsOpen, setIsOpen } = props;
    return (
        <div className="App">
            <Modal
                isOpen={modalIsOpen}
                style={modalStyle}
                onRequestClose={() => setIsOpen(false)}
            ></Modal>
        </div>
    );
};

export default AddEventModal;
