<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\AuthController;

Route::apiResource('/question', QuestionController::class);

Route::apiResource('/category', CategoryController::class);

Route::apiResource('/question/{question}/reply', \App\Http\Controllers\ReplyController::class);

Route::post('/like/{reply}',[LikeController::class,'likeIt']);
Route::delete('/like/{reply}',[LikeController::class,'unlikeIt']);

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('signup', [AuthController::class, 'signup']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});

