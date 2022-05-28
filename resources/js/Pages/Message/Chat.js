import React from "react";
import { usePage, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

const Chat = (props) => {
    const { user, messages } = usePage().props;
    const { data, setData, post } = useForm({
        send: props.auth.user.id,
        recieve: user.id,
        message: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("messages.store"));
    };

    console.log(messages);

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

                {messages.map(({ message }) => (
                    <div>{message}</div>
                ))}

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="w-9/12 px-4 py-2"
                        value={data.title}
                        onChange={(e) => setData("message", e.target.value)}
                    />
                    <div>
                        <button
                            type="submit"
                            className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </Authenticated>
        </div>
    );
};

export default Chat;
