<?php

Route::get('/', function () {
return view('welcome');
});

Auth::routes();

Route::get('/{any}', 'HomeController@index')->where('any','.*')->name('home');
