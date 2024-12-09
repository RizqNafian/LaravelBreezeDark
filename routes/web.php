<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SendEmailController;
use App\Http\Controllers\UserController;
use App\Events\CobaEvent;
use App\Http\Controllers\CacheController;
use App\Jobs\SendEmailJob;
use App\Mail\SendEmail;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Mail;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/send-email',function(){
    $data = [
        'name' => 'Naan',
        'email' => 'naan2810@gmail',
        'message' => 'Hello, world!',
    ];

    // Normal
    // Mail::to('naan28@gmail.com')->send(new SendEmail($data));
    // Queue
    // $job = new SendEmailJob($data);
    // dispatch($job);
    // Event
    event(new CobaEvent($data));
    dd("Email Berhasil dikirim.");
});

Route::middleware('auth')->group(function () {
    Route::get('/cache', [CacheController::class, 'index'])->name('cache.index');
    Route::post('/cache/store', [CacheController::class, 'store'])->name('cache.store');
    Route::get('/cache/show', [CacheController::class, 'show'])->name('cache.show');
    Route::post('/cache/destroy', [CacheController::class, 'destroy'])->name('cache.destroy');

    Route::get('/email',[SendEmailController::class, 'index'])->name('email.index');
    Route::post('/email/send',[SendEmailController::class, 'sendEmail'])->name('email.send');

    Route::get('/users',[UserController::class, 'loadUsers'])->name('users.index');
    Route::post('/users/store',[UserController::class, 'storeUser'])->name('users.store');
    Route::post('/users/update',[UserController::class, 'updateUser'])->name('users.update');
    Route::get('/users/delete/{id}',[UserController::class, 'deleteUser'])->name('users.delete');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
