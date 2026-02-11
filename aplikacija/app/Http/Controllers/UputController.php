<?php

namespace App\Http\Controllers;

use App\Models\Uput;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UputResource;
use App\Models\Korisnik;

class UputController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $uputs = Uput::all();

        return response()->json(UputResource::collection($uputs));
    }
    public function korisnikoviuputi($id){

      $korisnikovi= Korisnik::find($id);
       $uputi = Uput::where('korisnik_id', $id)->get();
     
return $uputi;


      } 


       public function adduput(Request $request)
    {
 $request->validate([
        'id' => 'required',
        'uputZa' => 'required',
        'datumUputa' => 'required',
        'izdaoLekar' => 'required',
        'korisnik_id' => 'required',
    ]);

    $novo = Bolovanje::create([
        'id' => $request->id,
        'uputZa' => $request->uputZa,
        'datumUputa' => $request->datumUputa,
        'izdaoLekar' => $request->izdaoLekar,
        'korisnik_id' => $request->korisnik_id,
        
    ]);

    return response()->json($novo);

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
    public function show($id)
    {
       $uputs=Uput::find($id);
        if(is_null($uputs))
            return response()->json('Nije pronadjen uput', 404);
       
        return response()->json(new UputResource($uputs));
        
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
