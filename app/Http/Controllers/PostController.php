<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Models\Post;
use App\Models\Category;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Events\Posted;
use App\Events\DeleteData;

class PostController extends Controller
{

    public function index()
    {
        $post = Post::with("category")->get();
        return Inertia::render('Post/Index', ['posts' => $post]);
    }

    public function getData()
    {
        $post = Post::with("category")->get();
        return $post;
    }

    public function getDataPostByFriends()
    {
        $auth_id = \Auth::id();
        $friends_posts = User::with("follows.posts.category")->find($auth_id);
        $friends_post_list = [];

        foreach($friends_posts["follows"] as $friend_posts)
        {
            foreach($friend_posts["posts"] as $friend_post){
                array_push($friends_post_list,$friend_post);
            }
        }
        return Inertia::render("Post/FreindsPosts",["posts" => $friends_post_list]);
    }

    public function create(Category $category)
    {
        return Inertia::render('Post/Create', ["categories" => $category->get()]);
    }

    public function store(Request $request)
    {
        $post = new Post($request->all());
        $post->user_id = \Auth::id();
        $post->save();
        event(new Posted($post));

        return Redirect::route('posts.index');
    }

    public function edit(Post $post)
    {

        $user = auth()->user();

        if($user->can("view", $post)){
            return Inertia::render('Post/Edit', [
                    'post' => [
                        'id' => $post->id,
                        'title' => $post->title,
                        'description' => $post->description
                    ]
                ]);
        }else{
            return Inertia::render("Forbidden");
        }


    }

    public function update(Request $request, Post $post)
    {
        $this->authorize("update",$post);
        $post->update($request->all());
        return Redirect::route('posts.index');
    }

    public function destroy(Post $post)
    {
        $this->authorize("delete",$post);
        event(new DeleteData($post));
        $post->delete();

        return Redirect::route('posts.index');
    }

    public function toggleLike(Post $post)
    {
        $auth_id = auth()->id();

        $posts_liked_by_auth = User::with("likePosts:id")->find($auth_id);
        $posts_list_liked_by_auth = [];
        foreach($posts_liked_by_auth["likePosts"] as $post_liked_by_auth)
        {
            array_push($posts_list_liked_by_auth, $post_liked_by_auth->id);
        }

        if(in_array($post->id, $posts_list_liked_by_auth)){
            $post->likedUsers()->detach($auth_id);
        }else{
            $post->likedUsers()->attach($auth_id);
        }

        return Redirect::route('posts.index');
    }
}
