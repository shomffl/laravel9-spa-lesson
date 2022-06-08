<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FollowersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("followers")->insert([
            "following_id" => 1,
            "followed_id" => 2,
        ]);
        DB::table("followers")->insert([
            "following_id" => 1,
            "followed_id" => 3,
        ]);
        DB::table("followers")->insert([
            "following_id" => 1,
            "followed_id" => 4,
        ]);
        DB::table("followers")->insert([
            "following_id" => 1,
            "followed_id" => 5,
        ]);
        DB::table("followers")->insert([
            "following_id" => 2,
            "followed_id" => 1,
        ]);
        DB::table("followers")->insert([
            "following_id" => 3,
            "followed_id" => 1,
        ]);
        DB::table("followers")->insert([
            "following_id" => 4,
            "followed_id" => 1,
        ]);
        DB::table("followers")->insert([
            "following_id" => 5,
            "followed_id" => 1,
        ]);
    }
}
