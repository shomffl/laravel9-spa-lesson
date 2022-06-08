<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\Post;

class DeleteData implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $deleted_data;

    public function __construct(Post $post)
    {
        $this->deleted_data = $post;
    }

    public function broadcastOn()
    {
        return new Channel('delete-data');
    }

    // public function broadcastAs()
    // {
    //     return "this data has been deleted.";
    // }
}
