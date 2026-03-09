<?php

namespace App\Http\Controllers;

use App\Models\Analiza;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\AnalizaResource;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


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

     
       $analize = Analiza::where('user_id', $id)->get();
     

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
 $validator= Validator::make($request->all(),[
        
        'rezultat' => 'required|string|max:255',
        'datumAnalize' => 'required|date',
         'izdaoLekar' => 'required|string|max:255',
        'user_id' => 'required',
    ]);
    if($validator->fails())
        return response()->json(['message' => 'Greska!']);

    $nova = Analiza::create([
        
        'rezultat' => $request->rezultat,
        'datumAnalize' => $request->datumAnalize,
        'izdaoLekar' => $request->izdaoLekar,
        'user_id' => $request->user_id,
        
    ]);

    return response()->json(['message' => 'Uspesno dodata analiza!',new AnalizaResource($nova)]);

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