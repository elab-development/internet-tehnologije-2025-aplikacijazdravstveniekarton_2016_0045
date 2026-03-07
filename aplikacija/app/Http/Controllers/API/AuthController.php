<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Laravel\Sanctum\HasApiTokens;

class AuthController extends Controller
{


      public function register(Request $request) 
    {
        $validator = Validator::make($request->all(),[

            'ime' => 'required|string|max:255',
            'email' => 'required|string|max:255|email|unique:users',
            'password' => 'required|string',         
                      
             'prezime' => 'required|string|max:30',
            'adresa' => 'required|string|max:30',
            'brojTelefona' => 'required|string|max:30',
            'datumRodjenja' => 'required|date',
            'uloga' => 'required|string|in:lekar,sestra,pacijent,admin',

        ]);

        if($validator->fails())
            return response()->json([$validator->errors(), 'message' => "Greska!"]);

        $user= User::create([
            'ime' => $request->ime,
            'email' => $request->email,
            'password' => $request->password,         
                      
             'prezime' => $request->prezime,
            'adresa' => $request->adresa,
            'brojTelefona' => $request->brojTelefona,
            'datumRodjenja' => $request->datumRodjenja,
            'uloga' => $request->uloga,
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['message' => 'Uspešna registracija !','data'=>$user, 'access_token'=>$token, 'token_type'=>'Bearer']);

    }

    public function login(Request $request) {
        if(!Auth::attempt($request->only('email', 'password')))
            return response()->json(['message' => 'Kredencijali nisu ispravni !'], 401);
        
        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;
        
        return response()->json(['access_token' => $token, 'token_type' => 'Bearer']);
    }

 function logout(){
        auth()->user()->tokens()->delete(); 
        return[
            'message' => 'Uspesno ste se izlogovali!' 
        ];
    }

}
