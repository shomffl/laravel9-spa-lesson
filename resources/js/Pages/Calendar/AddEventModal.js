import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-react";

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
        marginRight: "5%",
        marginLeft: "5%",
    },
};

Modal.setAppElement("#root");

const AddEventModal = (props) => {
    const { modalIsOpen, setIsOpen, data, setData } = props;

    return (
        <div className="App">
            <Modal
                isOpen={modalIsOpen}
                style={modalStyle}
                onRequestClose={() => setIsOpen(false)}
            >
                <div className="text-center relative top-1/2 -translate-y-2/4">
                    <div className="flex justify-center items-center">
                        <p>event title</p>
                        <input
                            type="text"
                            className="w-6/12 m-5"
                            name="title"
                            onChange={(e) =>
                                setData("event_name", e.target.value)
                            }
                        />
                    </div>

                    <div className="flex justify-center items-center">
                        <p>start date</p>
                        <input
                            type="datetime-local"
                            className="w-6/12 m-5"
                            name="start_date"
                            value={data.start_date}
                            onChange={(e) =>
                                setData("start_date", e.target.value)
                            }
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <p>start date</p>
                        <input
                            type="datetime-local"
                            className="w-6/12 m-5"
                            name="end_date"
                            value={data.end_date}
                            onChange={(e) =>
                                setData("end_date", e.target.value)
                            }
                        />
                    </div>
                    <button className="px-4 py-2 text-white bg-gray-500 rounded">
                        send
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default AddEventModal;
