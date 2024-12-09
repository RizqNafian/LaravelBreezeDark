<?php

namespace App\Listeners;

use App\Events\CobaEvent;
use App\Mail\SendEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class CobaListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(CobaEvent $event): void
    {
        Mail::to($event->data['email'])->send(new SendEmail($event->data));
    }
}
