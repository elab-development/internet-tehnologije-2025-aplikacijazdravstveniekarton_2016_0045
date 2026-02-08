<?php

namespace App\Http\Controllers;

use App\Models\Bolovanje;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BolovanjeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $bolovanja = Bolovanje::all();

        return $bolovanja;
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
            'idBolovanja'=>'required|string',
        'datumOd'=>'required|date',
        'datumDo'=>'required|date',
        'dijagnoza'=>'required|string',
        'izdaoLekar'=>'required|string',
             
        ]); 
         if($validator->fails())
        return response()->json($validator->errors());

        $bolovanje = Bolovanje::create([ 'idBolovanja'=>$request->idBolovanja,
                                           'datumOd'=>$request->datumOd,
                                          'datumDo'=>$request->datumDo,
                                          'dijagnoza'=>$request->dijagnoza,
                                           'izdaoLekar'=>$request->izdaoLekar,
            
                                        
                                        ]);

       return response()->json(['Bolovanje je kreirano uspesno.', new BolovanjeResource($bolovanje) ]);
        
    }

    /**
     * Display the specified resource.
     */
    public function show($idBolovanja)
    {
        $bolovanje=Bolovanje::find($idBolovanja);
        if(is_null($idBolovanja))
            return response()->json('Nije pronadjeno bolovanje', 404);
       
        return $bolovanje;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bolovanje $bolovanje)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bolovanje $bolovanje)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bolovanje $bolovanje)
    {
        //
    }
}
