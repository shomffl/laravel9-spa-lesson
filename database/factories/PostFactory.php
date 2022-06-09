<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Post;

class PostFactory extends Factory
{
    protected $model = Post::class;

    public function definition()
    {
        return [
            "title" => $this->faker->word,
            "description" => $this->faker->word,
            "user_id" => $this->faker->numberBetween($min=1, $max=6),
            "category_id" => 1,
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s")
        ];
    }
}
