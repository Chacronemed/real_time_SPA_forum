<?php

namespace App\Exceptions;

use http\Env\Response;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenBlacklistedException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $exception)
    {

        if ($exception instanceof TokenBlacklistedException) {
            return response(['error' => 'Your token is expired'], \Symfony\Component\HttpFoundation\Response::HTTP_BAD_REQUEST);
        }
        else if ($exception instanceof TokenExpiredException) {
            return response(['error' => 'Your token is expired, try to reconnect'], \Symfony\Component\HttpFoundation\Response::HTTP_BAD_REQUEST);
        }
        else if ($exception instanceof TokenInvalidException) {
            return response(['error' => 'Your token is invalid'], \Symfony\Component\HttpFoundation\Response::HTTP_BAD_REQUEST);
        }
        else if ($exception instanceof JWTException) {
            return response(['error' => 'Token is not provided'], \Symfony\Component\HttpFoundation\Response::HTTP_BAD_REQUEST);
        }

        return parent::render($request, $exception);
    }

}
