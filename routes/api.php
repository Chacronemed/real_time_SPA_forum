<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\CategoryController;

Route::apiResource('/question', QuestionController::class);

Route::apiResource('/category', CategoryController::class);

Route::apiResource('/question/{question}/reply', \App\Http\Controllers\ReplyController::class);
