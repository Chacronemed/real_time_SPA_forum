<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuestionController;

Route::apiResource('/question', QuestionController::class);
