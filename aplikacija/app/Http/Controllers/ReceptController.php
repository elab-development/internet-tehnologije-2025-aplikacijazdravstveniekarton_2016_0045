<?php

namespace App\Http\Controllers;

use App\Models\Recept;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReceptController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $recepti = Recept::all();

        return $recepti;
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
         $validator = Validator::make($request->all(),[
            'idRecepta'=>'required|string',
        'lekovi'=>'required|string',
        'datumIzdavanja'=>'required|date',
        'izdaoLekar'=>'required|string',
            
        ]); 
         if($validator->fails())
        return response()->json($validator->errors());

        $korisnik = Korisnik::create([ 'idRecepta'=>$request->idRecepta,
                                       'lekovi'=>$request->lekovi,
                                       'datumIzdavanja'=>$request->datumIzdavanja,
                                        'izdaoLekar'=>$request->izdaoLekar,
                                                   
                                        ]);

       return response()->json(['Recept je kreiran uspesno.', new ReceptResource($recept) ]);
        
    }

    /**
     * Display the specified resource.
     */
    public function show($idRecepta)
    {
        $recept=Recept::find($idRecepta);
        if(is_null($idRecepta))
            return response()->json('Nije pronadjen recept', 404);
       
        return $recept;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Recept $recept)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Recept $recept)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Recept $recept)
    {
        //
    }
}
