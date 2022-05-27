<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("categories")->insert([
           "name" => "hobby", 
           "created_at" => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        DB::table("categories")->insert([
           "name" => "sports", 
            "created_at" => date('Y-m-d H:i:s'),
           "updated_at" => date('Y-m-d H:i:s'),
        ]);
        DB::table("categories")->insert([
           "name" => "college", 
            "created_at" => date('Y-m-d H:i:s'),
           "updated_at" => date('Y-m-d H:i:s'),
        ]);
        DB::table("categories")->insert([
           "name" => "todo", 
            "created_at" => date('Y-m-d H:i:s'),
           "updated_at" => date('Y-m-d H:i:s'),
        ]);
    }
}
