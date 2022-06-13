<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "event_name",
        "start_date",
        "end_date"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
