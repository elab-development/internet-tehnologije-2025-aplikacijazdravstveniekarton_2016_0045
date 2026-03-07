<?php

namespace App\Http\Controllers;

use App\Models\Pregled;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\PregledResource;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class PregledController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $pregleds = Pregled::all();

        return response()->json(PregledResource::collection($pregleds));
    }
    
       
    
 public function addpregled(Request $request)
    {
 $validator= Validator::make($request->all(),[
        
         
        'anamneza' => 'required',
        'dijagnoza' => 'required',
        'datumPregleda' => 'required|date',
        'pregledaoLekar' => 'required',
        'user_id' => 'required',
    ]);
    if($validator->fails())
        return response()->json(['message' => 'Greska!']);

    $nov = Pregled::create([
        
        'anamneza' => $request->anamneza,
        'dijagnoza' => $request->dijagnoza,
        'datumPregleda' => $request->datumPregleda,
        'pregledaoLekar' => $request->pregledaoLekar,
        'user_id' => $request->user_id,
        
    ]);
    return response()->json(['message' => 'Uspesno dodat pregled!',new PregledResource($nov)]);

    }


    public function korisnikovipregledi($id){

     
       $pregledi = Pregled::where('user_id', $id)->get();
     
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

        $pregled = Pregled::create(['idPregleda'=>$request->idPregleda,
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
    public function show($id)
    {
        $pregleds=Pregled::find($id);
        if(is_null($pregleds))
            return response()->json('Nije pronadjen pregled', 404);
       
        return response()->json(new PregledResource($pregleds));
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
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pregled $pregled)
    {
        //
    }
}
