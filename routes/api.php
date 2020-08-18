<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});
Route::group(['middleware' => 'auth'], function ($router) {

    Route::get('posts', 'Admin\PostController@index');
    Route::delete('posts/{id}', 'Admin\PostController@destroy');
    Route::patch('post/edit/{id}', 'Admin\PostController@update');
    Route::post('post/new', 'Admin\PostController@store');
    Route::get('post/{id}', 'Admin\PostController@edit');

});
