<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::group(["middleware" => ["auth"]], function() {
    Route::get('/', function () {
    return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('posts', PostController::class);
    Route::resource("messages", MessageController::class);
    Route::resource("users", UserController::class);

    Route::get("/get-data", [PostController::class, "getData"]);
    Route::get("/posts-friends", [PostController::class, "getDataPostByFriends"]);

    Route::get("/follow/{user}", [UserController::class, "followUser"]);
    Route::get("/unfollow/{user}", [UserController::class, "unFollowUser"]);

    Route::get("/room/{send}/{recieve}", [UserController::class, "getMessageByRoom"]); // チャットルームごとのメッセージを取得するための関数

    Route::get("/calendar", function () {
        return Inertia::render("Calendar");
    });
});

require __DIR__.'/auth.php';
