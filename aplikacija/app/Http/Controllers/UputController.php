<?php

namespace App\Http\Controllers;

use App\Models\Uput;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UputController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $uput = Uputi::all();

        return $uputi;
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
            'idUputa'=>'required|string',
        'uputZa'=>'required|string',
        'datumUputa'=>'required|date',
        'izdaoLekar'=>'required|string',
             
          
        ]); 
         if($validator->fails())
        return response()->json($validator->errors());

        $korisnik = Korisnik::create(['idUputa'=>$request->idUputa,
                                      'uputZa'=>$request->uputZa,
                                       'datumUputa'=>$request->datumUputa,
                                       'izdaoLekar'=>$request->izdaoLekar,
             
                                        ]);

       return response()->json(['Uput je kreiran uspesno.', new UputResource($uput) ]);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Uput $uput)
    {
       $uput=Uput::find($uputId);
        if(is_null($uputId))
            return response()->json('Nije pronadjen uput', 404);
       
        return $uput;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Uput $uput)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Uput $uput)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Uput $uput)
    {
        //
    }
}
