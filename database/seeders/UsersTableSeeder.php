<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("users")->insert([
            "name" => "Sho Watanabe",
            "email" => "sho@gmail.com",
            "password" => Hash::make("showatanabe"),
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s"),
        ]);
        DB::table("users")->insert([
            "name" => "test-user1",
            "email" => "test@test",
            "password" => Hash::make("testtest"),
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s"),
        ]);
        DB::table("users")->insert([
            "name" => "test-user2",
            "email" => "test2@test",
            "password" => Hash::make("testtest"),
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s"),
        ]);
        DB::table("users")->insert([
            "name" => "test-user3",
            "email" => "test3@test",
            "password" => Hash::make("testtest"),
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s"),
        ]);
        DB::table("users")->insert([
            "name" => "test-user4",
            "email" => "test4@test",
            "password" => Hash::make("testtest"),
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s"),
        ]);
        DB::table("users")->insert([
            "name" => "test-user5",
            "email" => "test5@test",
            "password" => Hash::make("testtest"),
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s"),
        ]);
    }
}
