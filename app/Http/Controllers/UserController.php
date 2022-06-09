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
        $auth_id = \Auth::id();
        $users_other_than_auth = User::where("id", "!=", $auth_id)->get();


        $users_follow_by_auth = User::with("follows:id")->find($auth_id);
        $users_id_follow_by_auth = [];

        foreach($users_follow_by_auth["follows"] as $user_follow_by_auth)
        {
            array_push($users_id_follow_by_auth,$user_follow_by_auth->id);
        }

        return Inertia::render("Message/Index",["users"=>$users_other_than_auth,"follows_id" => $users_id_follow_by_auth]);
    }

    public function show(User $user)
    {
        $auth_user_id = \Auth::id();
        $recieve_user_id = $user->id;
        $messages_data = UserController::getMessageByRoom($auth_user_id, $recieve_user_id);
        return Inertia::render("Message/Chat", ["recieve_id" => $recieve_user_id, "messages" => $messages_data["messages"]]);
    }

    public function getMessageByRoom($send, $recieve)
    {
        $messages = Message::where("send", "=", $send)->where("recieve", "=", $recieve)
                            ->orWhere("send", "=", $recieve)->where("recieve", "=", $send)->get();
        return ["messages" => $messages];
    }
}
