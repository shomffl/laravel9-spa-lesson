<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class ScheduleController extends Controller
{
    public function index()
    {
        $auth_id = \Auth::id();
        $schedules = User::with("schedules")->find($auth_id);

        $schedules_list = [];
        foreach($schedules["schedules"] as $schedule)
        {
            $data = [
                "title"=> $schedule["event_name"],
                "start" =>  $schedule["start_date"],
                "end"=> $schedule["end_date"]
            ];
            array_push($schedules_list,$data);
        };
        return Inertia::render("Calendar/Calendar",["schedules" => $schedules_list]);
    }

    public function store(Request $request, Schedule $schedule)
    {
        $schedule->fill($request->all());
        $schedule->user_id =auth()->id();
        $schedule->save();
        return Redirect::route("schedules.index");
    }
}
