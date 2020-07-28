<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class ValidateUserLogin extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    public function rules()
    {
        return [
            "email" => "required",
            "password" => "required"
        ];
    }
}
