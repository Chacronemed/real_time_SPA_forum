<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LikeController;

Route::apiResource('/question', QuestionController::class);

Route::apiResource('/category', CategoryController::class);

Route::apiResource('/question/{question}/reply', \App\Http\Controllers\ReplyController::class);

Route::post('/like/{reply}',[LikeController::class,'likeIt']);
Route::delete('/like/{reply}',[LikeController::class,'unlikeIt']);

