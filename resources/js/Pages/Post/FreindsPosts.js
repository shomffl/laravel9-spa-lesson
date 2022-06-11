import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Head, usePage, Link } from "@inertiajs/inertia-react";

const FreindsPosts = (props) => {
    const { posts } = usePage().props;
    console.log(posts);
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Freinds' Posts
                </h2>
            }
        >
            <Head title="Friends' Posts" />

            <div className="container mx-auto mt-10">
                <div className="flex items-center justify-between mb-6 mr-6">
                    <Link
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href={route("posts.index")}
                    >
                        Top Pages
                    </Link>
                </div>

                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-gray-600">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">#</th>
                                <th className="px-6 pt-5 pb-4">Title</th>
                                <th className="px-6 pt-5 pb-4">Description</th>
                                <th className="px-6 pt-5 pb-4">Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(
                                ({ id, title, description, category }) => (
                                    <tr key={id} className="">
                                        <td className="border-t">
                                            <div className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                {id}
                                            </div>
                                        </td>
                                        <td className="border-t">
                                            <div className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                {title}
                                            </div>
                                        </td>
                                        <td className="border-t">
                                            <div
                                                tabIndex="1"
                                                className="flex items-center px-6 py-4"
                                            >
                                                {description}
                                            </div>
                                        </td>
                                        <td className="border-t">
                                            <div
                                                tabIndex="1"
                                                className="flex items-center px-6 py-4"
                                            >
                                                {category.name}
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                            {posts.length === 0 && (
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
    );
};

export default FreindsPosts;
