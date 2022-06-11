<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class SchedulesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("schedules")->insert([
            "user_id" => 1,
            "start_date" => "2022-06-1",
            "end_date" => "2022-06-2",
            "event_name" => "test1"
        ]);
        DB::table("schedules")->insert([
            "user_id" => 1,
            "start_date" => "2022-06-11",
            "end_date" => "2022-06-12",
            "event_name" => "test2"
        ]);
        DB::table("schedules")->insert([
            "user_id" => 1,
            "start_date" => "2022-06-21",
            "end_date" => "2022-06-21",
            "event_name" => "test3"
        ]);
        DB::table("schedules")->insert([
            "user_id" => 2,
            "start_date" => "2022-06-1",
            "end_date" => "2022-06-2",
            "event_name" => "test"
        ]);
        DB::table("schedules")->insert([
            "user_id" => 3,
            "start_date" => "2022-06-1",
            "end_date" => "2022-06-2",
            "event_name" => "test"
        ]);
    }
}
