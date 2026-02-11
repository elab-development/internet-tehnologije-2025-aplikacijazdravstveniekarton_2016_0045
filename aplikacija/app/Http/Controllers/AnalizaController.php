<?php

namespace App\Http\Controllers;

use App\Models\Analiza;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\AnalizaResource;
use App\Models\Korisnik;

class AnalizaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
           
    {
        
         $analizas = Analiza::all();
         

         return response()->json(AnalizaResource::collection($analizas));
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
   
            
      public function korisnikoveanalize($id){

     // $korisnikove= Korisnik::find($id);
       $analize = Analiza::where('korisnik_id', $id)->get();
     

return $analize;


      }                                  
                                        

      

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $analizas=Analiza::find($id) ;
       if(is_null($analizas))
            return response()->json('Nije pronadjen pregled', 404);
       
      
         return response()->json(new AnalizaResource($analizas));
    }
    public function addanaliza(Request $request)
    {
 $request->validate([
        'id' => 'required',
        'rezultat' => 'required',
        'datumAnalize' => 'required',
         'izdaoLekar' => 'required',
        'korisnik_id' => 'required',
    ]);

    $novo = Analiza::create([
        'id' => $request->id,
        'rezultat' => $request->rezultat,
        'datumAnalize' => $request->datumAnalize,
        'izdaoLekar' => $request->izdaoLekar,
        'korisnik_id' => $request->korisnik_id,
        
    ]);

    return response()->json($novo);

    }

    /**
     * Show the form for editing the specified resource.
     */
    

    /**
     * Update the specified resource in storage.
     */
    

    /**
     * Remove the specified resource from storage.
     */
    
}