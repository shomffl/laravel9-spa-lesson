import React, { useState, useEffect } from "react";
import { usePage, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Pusher from "pusher-js";
import axios from "axios";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import IconButton from "@mui/material/IconButton";
import { config } from "@fullcalendar/react";

const Chat = (props) => {
    const { recieve_id, messages } = usePage().props;
    const { data, setData, post } = useForm({
        send: props.auth.user.id,
        recieve: recieve_id,
        message: "",
    });

    const [messagesData, setMessagesData] = useState(messages);

    console.log(messagesData);

    const handleSubmit = (e) => {
        setData("message", "");
        post(route("messages.store"));
    };

    useEffect(() => {
        var pusher = new Pusher("00e71296007022344f25", {
            cluster: "ap3",
        });

        var channel = pusher.subscribe("chat");
        channel.bind("App\\Events\\Chat", function (res) {
            axios
                .get(`/room/${res.message.send}/${res.message.recieve}`, data)
                .then((response) => {
                    setMessagesData(response.data.messages);
                });
        });
    }, []);

    const ReadAloudText = (message) => {
        const axiosInstance = axios.create();
        const url = axiosInstance.getUri({
            url: "https://api.su-shiki.com/v2/voicevox/audio/",
            params: {
                text: `${message}`,
                key: process.env.MIX_VOICE_VOX_KEY,
            },
        });
        const music = new Audio(url);
        music.play();
    };

    const messageStyle = (send) => {
        if (send === props.auth.user.id) {
            return {
                backgroundColor: "#C5D4D9",
                margin: 5,
                marginLeft: "60%",
                padding: 10,
                paddingRight: "4%",
                borderRadius: "10px",
                textAlign: "right",
            };
        } else {
            return {
                backgroundColor: "white",
                border: "1px solid gray",
                margin: 5,
                marginRight: "60%",
                padding: 10,
                paddingLeft: "4%",
                borderRadius: "10px",
                textAlign: "left",
            };
        }
    };

    return (
        <div>
            <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dashboard
                    </h2>
                }
            >
                <Head title="Index" />

                <div className="p-10">
                    {messagesData.map(({ id, send, message }) => (
                        <div style={messageStyle(send)} key={id}>
                            {message}
                            <IconButton
                                component="span"
                                onClick={(e) => ReadAloudText(message)}
                            >
                                <RecordVoiceOverIcon />
                            </IconButton>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex absolute bottom-0 right-56 content-center">
                        <input
                            type="text"
                            className="min-w-full px-4 py-2 ml-20 mr-4 mb-10 rounded-r"
                            onChange={(e) => setData("message", e.target.value)}
                        />
                        <div>
                            <button
                                type="submit"
                                className="px-6 py-2 font-bold text-white bg-green-500 hover:bg-green-300 rounded duration-300"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </Authenticated>
        </div>
    );
};

export default Chat;
