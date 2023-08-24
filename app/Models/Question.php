<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Question extends Model
{
    protected static function boot()
    {
        parent::boot();
        static::creating(function($question){
            $question->slug = Str::slug($question->title);
        });
    }
    public function getRouteKeyName(){
        return 'slug';
    }

    protected $guarded = [];
//whenever we fetch the questions we get the replies with em
    protected $with = ['replies'];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function replies(){
        return $this->hasMany(Reply::class)->latest();
    }
    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function getPathAttribute(){
        return "question/$this->slug";
    }

    use HasFactory;
}
