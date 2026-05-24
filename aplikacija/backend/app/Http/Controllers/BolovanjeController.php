<?php

namespace App\Http\Controllers;

use App\Models\Bolovanje;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\BolovanjeResource;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use OpenApi\Attributes as OA;

#[OA\Get(
    path: '/bolovanjes/{id}',
    summary: 'Prikaz svih bolovanja pacijenta ',
    tags: ['Bolovanja'],
    parameters: [
        new OA\Parameter(
            name: 'id',
            in: 'path',
            required: true,
            description: 'JMBG pacijenta',
            schema: new OA\Schema(type: 'string')
        )
    ],
    responses: [
        
        new OA\Response(
            response: 404,
            description: 'Nisu pronadjena bolovanja'
        )
    ]
)]

#[OA\Post(
    path: '/addbolovanje',
    summary: 'Kreiranje novog bolovanja',
    tags: ['Bolovanja'],
    
    responses: [
        new OA\Response(
            response: 200,
            description: 'Uspesno dodato bolovanje!'
        ),
        new OA\Response(
            response: 404,
            description: 'Greska!'
        )
    ]
)]

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

     
       $bolovanja = Bolovanje::where('user_id', $id)->get();
     
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
 $validator= Validator::make($request->all(),[
        
        'dijagnoza' => 'required|string|max:255',
        'datumOd' => 'required|date',
        'datumDo' => 'required|date',
         'izdaoLekar' => 'required|string|max:255',
        'user_id' => 'required',
    ]);
    if($validator->fails())
        return response()->json(['message' => 'Greska!']);

    $novo = Bolovanje::create([
        
        'dijagnoza' => $request->dijagnoza,
        'datumOd' => $request->datumOd,
        'datumDo' => $request->datumDo,
        'izdaoLekar' => $request->izdaoLekar,
        'user_id' => $request->user_id,
        
    ]);

    return response()->json(['message' => 'Uspesno dodato bolovanje!',new BolovanjeResource($novo)]);

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
