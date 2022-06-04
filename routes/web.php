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


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('posts', PostController::class)->middleware('auth');
Route::get("/get", [PostController::class,"getData"])->middleware("auth");
Route::resource("messages", MessageController::class)->middleware("auth");
Route::resource("users", UserController::class)->middleware("auth");
Route::get("/message/{user}", [MessageController::class,"getMessageByRoom"])->middleware("auth");


require __DIR__.'/auth.php';
