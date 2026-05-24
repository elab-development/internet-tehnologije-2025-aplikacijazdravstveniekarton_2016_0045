<?php

namespace App\Http\Controllers;

use App\Models\Uput;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UputResource;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use OpenApi\Attributes as OA;

#[OA\Get(
    path: '/uputs/{id}',
    summary: 'Prikaz svih uputa pacijenta ',
    tags: ['Uputi'],
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
            description: 'Nisu pronadjeni uputi'
        )
    ]
)]

#[OA\Post(
    path: '/adduput',
    summary: 'Kreiranje novog uputa',
    tags: ['Uputi'],
    
    responses: [
        new OA\Response(
            response: 200,
            description: 'Uspesno dodat uput!'
        ),
        new OA\Response(
            response: 404,
            description: 'Greska!'
        )
    ]
)]

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

      
       $uputi = Uput::where('user_id', $id)->get();
     
return $uputi;


      } 


      
        
      public function adduput(Request $request)
    {
 $validator= Validator::make($request->all(),[
              
        'uputZa' => 'required',
        'datumUputa' => 'required',
        'izdaoLekar' => 'required',
        'user_id' => 'required',
    ]);
    if($validator->fails())
        return response()->json(['message' => 'Greska!']);

    $nov = Uput::create([
        
        
        'uputZa' => $request->uputZa,
        'datumUputa' => $request->datumUputa,
        'izdaoLekar' => $request->izdaoLekar,
        'user_id' => $request->user_id,
        
    ]);
    return response()->json(['message' => 'Uspesno dodat uput!',new UputResource($nov)]);

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

        $uput = Uput::create(['idUputa'=>$request->idUputa,
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
