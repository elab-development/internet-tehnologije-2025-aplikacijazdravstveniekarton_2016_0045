<?php

namespace App\Http\Controllers;

use App\Models\Recept;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ReceptResource;
use App\Models\Korisnik;

class ReceptController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $recepts = Recept::all();

        return response()->json(ReceptResource::collection($recepts));
    }

    public function korisnikovirecepti($id){

      $korisnikovi= Korisnik::find($id);
       $recepti = Recept::where('korisnik_id', $id)->get();
     
return $recepti;


      } 
       public function addrecept(Request $request)
    {
 $request->validate([
        'id' => 'required',
        'lekovi' => 'required',
        'datumIzdavanja' => 'required',
            'izdaoLekar' => 'required',
        'korisnik_id' => 'required',
    ]);

    $novo = Bolovanje::create([
        'id' => $request->id,
        'lekovi' => $request->lekovi,
        'datumIzdavanja' => $request->datumIzdavanja,
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
    public function show($id)
    {
        $recepts=Recept::find($id);
        if(is_null($recepts))
            return response()->json('Nije pronadjen recept', 404);
       
         return response()->json(new ReceptResource($recepts));
        
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
