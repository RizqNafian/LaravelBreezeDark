<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class UserController extends Controller
{
    public function loadUsers(){
        $users=User::all();
        return Inertia::render('Users/Users', ['users' => $users]);
    }

    public function storeUser(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $user->save();

        return to_route('users.index');
    }

    public function editUser($id){
    }

    public function updateUser(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
        ]);
        User::where('id', $request->id)->update([
            'name' => $request->name,
            'email' => $request->email
        ]);
    }

    public function deleteUser($id){
        $user=User::find($id);
        $user->delete();
        return to_route('users.index');
    }
}
