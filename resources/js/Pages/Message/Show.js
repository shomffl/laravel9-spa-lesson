import React from "react";
import { inertia } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

const Show = (props) => {
    console.log(props);
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
            </Authenticated>
        </div>
    );
};

export default Show;
