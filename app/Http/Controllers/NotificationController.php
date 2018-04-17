<?php

namespace App\Http\Controllers;

use App\Events\NewNotification;
use App\Http\Requests\CreateNotificationRequest;
use App\Notification;

class NotificationController extends Controller
{
	public function create(CreateNotificationRequest $request)
	{
		$notification = new Notification();
		$notification->text = $request->text;
		$notification->save();

		event(new NewNotification($notification));

		return $notification;
	}
}
