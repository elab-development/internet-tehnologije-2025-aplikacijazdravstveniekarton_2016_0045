<?php

namespace App\Http\Controllers;

use App\Models\Bolovanje;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\BolovanjeResource;
use App\Models\Korisnik;

class BolovanjeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $bolovanjes = Bolovanje::all();
  return response()->json(BolovanjeResource::collection($bolovanjes));
       
    }

    public function korisnikovabolovanja($id){

     // $korisnikova= Korisnik::find($id);
       $bolovanja = Bolovanje::where('korisnik_id', $id)->get();
     
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
    public function addbolovanje(Request $request)
    {
 $request->validate([
        'id' => 'required',
        'datumOd' => 'required',
        'datumDo' => 'required',
        'dijagnoza' => 'required',
        'izdaoLekar' => 'required',
        'korisnik_id' => 'required',
    ]);

    $novo = Bolovanje::create([
        'id' => $request->id,
        'datumOd' => $request->datumOd,
        'datumDo' => $request->datumDo,
        'dijagnoza' => $request->dijagnoza,
         'izdaoLekar' => $request->izdaoLekar,
        'korisnik_id' => $request->korisnik_id,
        
    ]);

    return response()->json($novo);

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $bolovanjes=Bolovanje::find($id);
        if(is_null($bolovanjes))
            return response()->json('Nije pronadjeno bolovanje', 404);
       
        return response()->json(new BolovanjeResource($bolovanjes));
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
