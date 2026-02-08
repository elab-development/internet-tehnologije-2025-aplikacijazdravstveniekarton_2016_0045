<?php

namespace App\Http\Controllers;

use App\Models\Analiza;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AnalizaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $analize = Analiza::all();

        return $analize;
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
             'idAnalize'=>'required|string',
        'rezultat'=>'required|string',
        'datumAnalize'=>'required|date',
        'izdaoLekar'=>'required|string',
          
        ]); 
         if($validator->fails())
        return response()->json($validator->errors());

        $korisnik = Korisnik::create([ 'idAnalize'=>$request->idAnalize,
                                       'rezultat'=>$request->rezultat,
                                       'datumAnalize'=>$request->datumAnalize,
                                       'izdaoLekar'=>$request->izdaoLekar,
                                        
                                        ]);

       return response()->json(['Analiza je kreirana uspesno.', new AnalizaResource($analiza) ]);
        
    
    }

    /**
     * Display the specified resource.
     */
    public function show(Analiza $idAnalize)
    {
        $analiza=Analiza::find($idAnalize);
        if(is_null($idAnalize))
            return response()->json('Nije pronadjena analiza', 404);
       
        return $analiza;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Analiza $analiza)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Analiza $analiza)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Analiza $analiza)
    {
        //
    }
}
