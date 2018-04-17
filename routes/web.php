<?php

/**
 * For any url, render the app.blade.php file
 * which will start the react app
 */
Route::any('{all}', function () {
	return view('app');
})->where(['all' => '.*']);
