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
            <div className="my-10 mx-20">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    locale="ja"
                    titleFormat={{
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                    }}
                    headerToolbar={{
                        start: "title", // leftと書いてもよい
                        center: "myCustomButton",
                        end: "today prev,next",
                    }}
                    customButtons={{
                        myCustomButton: {
                            // カスタムボタンの名前
                            text: "カスタムボタン!", // 画面に表示されるテキスト
                            click: function () {
                                // クリックイベントを設定できる
                                alert("clicked the custom button!");
                            },
                        },
                    }}
                />
            </div>
        </Authenticated>
    );
};
export default Calendar;
