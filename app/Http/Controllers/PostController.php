<?php

// PostController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\PostCollection;
use App\Post;

class PostController extends Controller
{
    public function store(Request $request)
    {
      $validator = Validator::make($request->all(), [
        'title' => 'required|between:5,30',
        'body' => 'required',
    ]);

    if ($validator->fails()) {
      return response()->json(['error' => $validator->errors()]);
  }
  else {
    $post = new Post([
      'title' => $request->get('title'),
      'body' => $request->get('body')
    ]);

    $post->save();

    return response()->json(['succes'=>'successfully added']);
  }
     
    }

    public function index()
    {
      return new PostCollection(Post::all());
    }

    public function edit($id)
    {
      $post = Post::find($id);
      return response()->json($post);
    }

    public function update($id, Request $request)
    {
      $post = Post::find($id);

      $post->update($request->all());

      return response()->json('successfully updated');
    }

    public function delete($id)
    {
      $post = Post::find($id);

      $post->delete();

      return response()->json('successfully deleted');
    }
}