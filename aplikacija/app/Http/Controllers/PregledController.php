<?php

namespace App\Http\Controllers;

use App\Models\Pregled;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PregledController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $pregledi = Pregled::all();

        return $pregledi;
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
            'idPregleda'=>'required|string',
        'anamneza'=>'required|string',
        'dijagnoza'=>'required|string',
        'datumPregleda'=>'required|date',
        'pregledaoLekar'=>'required|string',
             
        ]); 
         if($validator->fails())
        return response()->json($validator->errors());

        $korisnik = Korisnik::create(['idPregleda'=>$request->idPregleda,
                                      'anamneza'=>$request->anamneza,
                                     'dijagnoza'=>$request->dijagnoza,
                                     'datumPregleda'=>$request->datumPregleda,
                                       'pregledaoLekar' =>$request->pregledaoLekar,
                                       
                                        ]);

       return response()->json(['Pregled je kreiran uspesno.', new PregledResource($pregled) ]);
        
    }

    /**
     * Display the specified resource.
     */
    public function show($idPregleda)
    {
        $pregled=Pregled::find($idPregleda);
        if(is_null($idPregleda))
            return response()->json('Nije pronadjen pregled', 404);
       
        return $pregled;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pregled $pregled)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pregled $pregled)
    {
        $validatedData = $request->validate([
            'anamneza'=>'required|string',
        'dijagnoza'=>'required|string',
        'datumPregleda'=>'required|date',
        'pregledaoLekar'=>'required|string',
        ]);
        $pregled->update($validatedData);
        return response()->json("PREGLED JE ZAVRŠEN");
        //masovno dodeljivanje
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pregled $pregled)
    {
        //
    }
}
