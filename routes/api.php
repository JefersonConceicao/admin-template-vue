<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('verifyUserExists', 'UsersController@verifyUserExists')->name('users.index');
Route::post('login', 'Auth\LoginController@login')->name('auth.login');