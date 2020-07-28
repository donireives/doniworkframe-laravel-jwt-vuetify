<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class ValidateUserRegistration extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    public function rules()
    {
        return [
            "name" => "required",
            "email" => "required|unique:users",
            "password" => "required|min:8"
        ];
    }
}
