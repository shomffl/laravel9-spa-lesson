import React, { useCallback, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

const Calendar = (props) => {
    return (
        <Authenticated
            auth={props.auth}
            error={props.error}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Calendar" />
            <div className="my-10">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    locale="ja"
                    events={[
                        { title: "event 1", start: "2022-06-01" },
                        {
                            title: "event 2",
                            start: "2022-06-03",
                            end: "2022-06-05",
                        },
                        {
                            title: "event 3",
                            start: "2022-06-07T10:00:00",
                        },
                    ]}
                />
            </div>
        </Authenticated>
    );
};
export default Calendar;
