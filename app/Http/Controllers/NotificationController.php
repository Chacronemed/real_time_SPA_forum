<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    public function index(){
        $readNotifications = NotificationResource::collection(auth()->user()->readNotifications()->get());
        $unreadNotifications = NotificationResource::collection(auth()->user()->unreadNotifications()->get());

        return [
            'read' => $readNotifications,
            'unread' => $unreadNotifications,
        ];
    }

    public function MarkAsRead(Request $request)
    {
        auth()->user()->notifications->where('id',$request->id)->markAsRead();
    }
}
