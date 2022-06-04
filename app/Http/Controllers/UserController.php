<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use App\Models\Message;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(User $user)
    {
        return Inertia::render("Message/Index",["users"=>$user->get()]);
    }

    public function show(User $user)
    {
        $messages_data = UserController::getMessageByRoom($user);
        dd($messages_data);
        return Inertia::render("Message/Show");
    }

    public function getMessageByRoom(User $user)
    {
        $auth_id = \Auth::id();
        $messages = Message::where("send", "=", $auth_id)->where("recieve", "=", $user->id)
                            ->orWhere("send", "=", $user->id)->where("recieve", "=", $auth_id)->get();
        return ["user"=>$user, "messages" => $messages];
    }
}
