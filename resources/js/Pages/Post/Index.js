import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Pusher from "pusher-js";
import axios from "axios";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import IconButton from "@mui/material/IconButton";

const Index = (props) => {
    const { auth, posts, like_list, num_of_likes } = usePage().props;
    const [datas, setDatas] = useState([...posts]);
    useEffect(() => {
        var pusher = new Pusher("00e71296007022344f25", {
            cluster: "ap3",
        });

        var channel = pusher.subscribe("post");
        channel.bind("App\\Events\\Posted", function (data) {
            Inertia.get("posts.index");
        });
    }, []);

    useEffect(() => {
        var pusher = new Pusher("00e71296007022344f25", {
            cluster: "ap3",
        });

        var channel = pusher.subscribe("delete-data");
        channel.bind("App\\Events\\DeleteData", function (data) {
            axios.get("/get-data").then((res) => {
                setDatas(res.data);
            });
        });
    }, []);

    function destroy(id) {
        Inertia.delete(route("posts.destroy", id));
    }

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
                <div className="container mx-auto">
                    <div className="flex mt-10">
                        <div className="flex items-center justify-between mb-6 mr-6">
                            <Link
                                className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                href={route("posts.create")}
                            >
                                Create Post
                            </Link>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <Link
                                className="px-6 py-2 text-white bg-yellow-500 rounded-md focus:outline-none"
                                href={"/posts-friends"}
                            >
                                Freind's Posts
                            </Link>
                        </div>
                    </div>

                    <div className="overflow-x-auto bg-white rounded shadow">
                        <table className="w-full whitespace-nowrap mb-10">
                            <thead className="text-white bg-gray-600">
                                <tr className="font-bold text-left">
                                    <th className="px-6 pt-5 pb-4">#</th>
                                    <th className="px-6 pt-5 pb-4">Title</th>
                                    <th className="px-6 pt-5 pb-4">
                                        Description
                                    </th>
                                    <th className="px-6 pt-5 pb-4">Category</th>
                                    <th className="px-6 pt-5 pb-4">Action</th>
                                    <th className="px-6 pt-5 pb-4">Action</th>
                                    <th className="px-6 pt-5 pb-4">Like!</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas.map(
                                    ({
                                        id,
                                        title,
                                        description,
                                        category,
                                        user_id,
                                    }) => (
                                        <tr key={id} className="">
                                            <td className="border-y">
                                                <div className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                    {id}
                                                </div>
                                            </td>
                                            <td className="border-y">
                                                <div className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                    {title}
                                                </div>
                                            </td>
                                            <td className="border-y">
                                                <div
                                                    tabIndex="1"
                                                    className="flex items-center px-6 py-4"
                                                >
                                                    {description}
                                                </div>
                                            </td>
                                            <td className="border-y">
                                                <div
                                                    tabIndex="1"
                                                    className="flex items-center px-6 py-4"
                                                >
                                                    {category.name}
                                                </div>
                                            </td>

                                            {auth.user.id == user_id ? (
                                                <>
                                                    <td className="border-y">
                                                        <Link
                                                            tabIndex="1"
                                                            className="px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-300 rounded duration-300"
                                                            href={route(
                                                                "posts.edit",
                                                                id
                                                            )}
                                                        >
                                                            Edit
                                                        </Link>
                                                    </td>
                                                    <td className="border-y">
                                                        <button
                                                            className="px-4 py-2 text-sm text-white bg-red-500 hover:bg-pink-300 rounded duration-300"
                                                            onClick={(e) =>
                                                                destroy(id)
                                                            }
                                                        >
                                                            delete
                                                        </button>
                                                    </td>
                                                </>
                                            ) : (
                                                <>
                                                    <td className="border-y">
                                                        <Link
                                                            tabIndex="1"
                                                            className="px-4 py-2 text-sm text-white bg-gray-500 rounded"
                                                        >
                                                            Edit
                                                        </Link>
                                                    </td>
                                                    <td className="border-y">
                                                        <button className="px-4 py-2 text-sm text-white bg-gray-500 rounded">
                                                            delete
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {like_list.includes(id) ? (
                                                <td className="border-y">
                                                    <IconButton
                                                        onClick={(e) =>
                                                            Inertia.get(
                                                                `/like/${id}`
                                                            )
                                                        }
                                                    >
                                                        <ThumbUpIcon
                                                            sx={{
                                                                color: "pink",
                                                            }}
                                                        />
                                                    </IconButton>
                                                    {num_of_likes[id - 1]}
                                                </td>
                                            ) : (
                                                <td className="border-y">
                                                    <IconButton
                                                        onClick={(e) =>
                                                            Inertia.get(
                                                                `/like/${id}`
                                                            )
                                                        }
                                                    >
                                                        <ThumbUpIcon />
                                                    </IconButton>
                                                    {num_of_likes[id - 1]}
                                                </td>
                                            )}
                                        </tr>
                                    )
                                )}
                                {datas.length === 0 && (
                                    <tr>
                                        <td
                                            className="px-6 py-4 border-y"
                                            colSpan="4"
                                        >
                                            No contacts found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Authenticated>
        </div>
    );
};

export default Index;
