import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, Link, usePage } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Pusher from "pusher-js";
import axios from "axios";

const Index = (props) => {
    const { posts } = usePage().props;
    const [datas, setDatas] = useState([...posts]);

    useEffect(() => {
        var pusher = new Pusher("00e71296007022344f25", {
            cluster: "ap3",
        });

        var channel = pusher.subscribe("post");
        channel.bind("App\\Events\\Posted", function (data) {
            axios.get("/get-data").then((res) => {
                setDatas(res.data);
            });
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
                    <h1 className="mb-8 text-3xl font-bold text-center">
                        Post
                    </h1>
                    <div className="flex">
                        <div className="flex items-center justify-between mb-6 mr-6">
                            <InertiaLink
                                className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                href={route("posts.create")}
                            >
                                Create Post
                            </InertiaLink>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <InertiaLink
                                className="px-6 py-2 text-white bg-yellow-500 rounded-md focus:outline-none"
                                href={"/posts-friends"}
                            >
                                Freind's Posts
                            </InertiaLink>
                        </div>
                    </div>

                    <div className="overflow-x-auto bg-white rounded shadow">
                        <table className="w-full whitespace-nowrap">
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
                                </tr>
                            </thead>
                            <tbody>
                                {datas.map(
                                    ({ id, title, description, category }) => (
                                        <tr key={id} className="">
                                            <td className="border-t">
                                                <InertiaLink
                                                    href={route(
                                                        "posts.edit",
                                                        id
                                                    )}
                                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                >
                                                    {id}
                                                </InertiaLink>
                                            </td>
                                            <td className="border-t">
                                                <InertiaLink
                                                    href={route(
                                                        "posts.edit",
                                                        id
                                                    )}
                                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                >
                                                    {title}
                                                </InertiaLink>
                                            </td>
                                            <td className="border-t">
                                                <InertiaLink
                                                    tabIndex="1"
                                                    className="flex items-center px-6 py-4"
                                                    href={route(
                                                        "posts.edit",
                                                        id
                                                    )}
                                                >
                                                    {description}
                                                </InertiaLink>
                                            </td>
                                            <td className="border-t">
                                                <InertiaLink
                                                    tabIndex="1"
                                                    className="flex items-center px-6 py-4"
                                                    href={route(
                                                        "posts.edit",
                                                        id
                                                    )}
                                                >
                                                    {category.name}
                                                </InertiaLink>
                                            </td>
                                            <td className="border-t">
                                                <InertiaLink
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                    href={route(
                                                        "posts.edit",
                                                        id
                                                    )}
                                                >
                                                    Edit
                                                </InertiaLink>
                                            </td>
                                            <td className="border-t">
                                                <button
                                                    onClick={(e) => destroy(id)}
                                                >
                                                    delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )}
                                {datas.length === 0 && (
                                    <tr>
                                        <td
                                            className="px-6 py-4 border-t"
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
