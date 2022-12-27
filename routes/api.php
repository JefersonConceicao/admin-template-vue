<?php

use Illuminate\Support\Facades\Route;

Route::get('verifyUserExists', 'UsersController@verifyUserExists')->name('users.index');
Route::post('login', 'Auth\LoginController@login')->name('auth.login');

Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::get('/users', 'UsersController@index')->name('users.index');
});