import React, { useState, useEffect, useCallback } from "react";
import FullCalendar, { EventContentArg, formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Authenticated from "@/Layouts/Authenticated";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { Head, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const Calendar = (props) => {
    const { schedules } = usePage().props;
    const [selectDate, setSelectDate] = useState();
    console.log(schedules);

    const handleDateClick = useCallback((arg) => {
        const formated_data = getFormatDate(arg.date);
        setSelectDate(formated_data);
    }, []);

    const getFormatDate = (date) =>
        formatDate(date, {
            month: "2-digit",
            year: "numeric",
            day: "2-digit",
            locale: "ja",
        });

    console.log(selectDate);

    return (
        <Authenticated auth={props.auth} error={props.error}>
            <Head title="Calendar" />
            <div className="my-10 mx-20">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    locale="ja"
                    locales={allLocales}
                    titleFormat={{
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                    }}
                    headerToolbar={{
                        start: "dayGridMonth,dayGridWeek,dayGridDay", // leftと書いてもよい
                        center: "title",
                        end: "myCustomButton today prev,next",
                    }}
                    customButtons={{
                        myCustomButton: {
                            text: "add event",
                            click: function () {
                                // クリックイベントを設定できる
                            },
                        },
                    }}
                    selectable="true"
                    events={schedules}
                    dateClick={handleDateClick}
                />
            </div>
        </Authenticated>
    );
};
export default Calendar;
