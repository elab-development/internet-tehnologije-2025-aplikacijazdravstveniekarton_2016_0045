<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
         return response()->json(UserResource::collection($users));
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $users=User::find($id);
        if(is_null($users))
            return response()->json('Nije pronadjen korisnik', 404);

        return response()->json(new UserResource($users));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
  


         public function update(Request $request,$id)
    {
        $user=User::findOrFail($id);
 $validator= Validator::make($request->all(),[
        
         'ime' => 'required|string|max:255',
            'email' => 'required|string|max:255|email|unique:users',
            'password' => 'required|string',         
                      
             'prezime' => 'required|string|max:30',
            'adresa' => 'required|string|max:30',
            'brojTelefona' => 'required|string|max:30',
            'datumRodjenja' => 'required|date',
            'uloga' => 'required|string |in:lekar,sestra,pacijent,admin',
    ]);
    if($validator->fails())
        return response()->json(['message' => 'Greska u validatoru!']);
 
   $user->ime= $request->ime;
            $user->email = $request->email;
            $user->password = $request->password ;        
                      
             $user->prezime = $request->prezime;
            $user->adresa = $request->adresa;
            $user->brojTelefona = $request->brojTelefona;
           $user->datumRodjenja = $request->datumRodjenja;
            $user->uloga = $request->uloga;

            $user->save();

    return response()->json(['message' => 'Uspesno azuriran korisnik!']);

    }
    
    public function destroy($id)
    {
         {
            $userdelete=User::find($id);
        if(is_null($userdelete))
            return response()->json('Nije pronadjen korisnik', 404);

        $userdelete->delete();
        return response()->json("KORISNIK JE OBRISAN");
    }
    }
}
