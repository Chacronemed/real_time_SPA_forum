<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReplyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'reply'=>$this->body,
            'user'=>$this->user->name,
            'question_slug'=>$this->question->slug,
            'user_id'=>$this->user_id,
            'like_count'=>$this->like->count(),
            'liked'=> !! $this->like->where('user_id',auth()->id())->count(),
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}
