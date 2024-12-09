<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Jobs\SendEmailJob;

class SendEmailController extends Controller
{
    public function index(){
        return Inertia::render('Emails/EmailForm');
    }

    public function sendEmail(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
        ];

        $job = new SendEmailJob($data);
        dispatch($job);

        // return to_route('emails.index');        
    }
}
