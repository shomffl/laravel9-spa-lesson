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
    Route::get("/get", [PostController::class,"getData"]);
    Route::resource("messages", MessageController::class);
    Route::resource("users", UserController::class);
    Route::get("/room/{user}", [UserController::class, "getMessageByRoom"]);
});


require __DIR__.'/auth.php';
