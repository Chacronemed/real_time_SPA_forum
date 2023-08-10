<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReplyResource;
use App\Models\Question;
use App\Models\Reply;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;

class ReplyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Question $question)
    {
        return ReplyResource::collection($question->replies);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Question $question , Request $request)
    {
        $reply=$question->replies()->create($request->all());
        return response(['reply'=>new ReplyResource($reply)],Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(Question $question , Reply $reply)
    {
        return new ReplyResource($reply);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reply $reply)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reply $reply)
    {
        $reply->update($request->all());
        return response('updated', Response::HTTP_CREATED);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question , Reply $reply)
    {
        $reply->delete();
        return response('deleted',Response::HTTP_NO_CONTENT);
    }
}
