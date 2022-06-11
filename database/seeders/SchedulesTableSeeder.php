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
            "event_name" => "test"
        ]);
    }
}
