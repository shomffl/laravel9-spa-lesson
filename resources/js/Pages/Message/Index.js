import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { users } = usePage().props;
    console.log(users);
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
                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-gray-600">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">#</th>
                                <th className="px-6 pt-5 pb-4">UserName</th>
                                <th className="px-6 pt-5 pb-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(({ id, name }) => (
                                <tr key={id} className="">
                                    <td className="border-t flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                        {id}
                                    </td>
                                    <td className="border-t">{name}</td>
                                    <td className="border-t">
                                        <InertiaLink className="px-4 py-2 text-sm text-white bg-blue-500 rounded">
                                            Chat
                                        </InertiaLink>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Head title="Chat" />
            </Authenticated>
        </div>
    );
};

export default Index;
