<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class LoginController extends Controller
{
    /**
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function username()
    {
        return 'usu_nom_login';
    }

    public function login(Request $request)
    {
        dd(User::where(['usu_nom_login' => $request->usu_nom_login])->first()->createToken('teste'));

    }
}
