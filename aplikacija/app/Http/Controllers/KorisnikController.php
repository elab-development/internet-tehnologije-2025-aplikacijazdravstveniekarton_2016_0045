<?php

namespace App\Http\Controllers;

use App\Models\Korisnik;
use App\Http\Resources\KorisnikResource;


class KorisnikController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $korisniks = Korisnik::all();
         return response()->json(KorisnikResource::collection($korisniks));
    }

    /**
     * Show the form for creating a new resource.
     */
     public function addkorisnik(Request $request)
    {
 $request->validate([
        'id' => 'required',
        'ime' => 'required',
        'prezime' => 'required',
        'adresa' => 'required',
        'email' => 'required',
        'datumRodjenja' => 'required',
        'brojTelefona' => 'required',
        'uloga' => 'required',
        'password' => 'required',

    ]);

    $novo = Bolovanje::create([
        'id' => $request->id,
        'ime' => $request->ime,
        'prezime' => $request->prezime,
        'adresa' => $request->adresa,
         'email' => $request->email,
        'datumRodjenja' => $request->datumRodjenja,
        'brojTelefona' => $request->brojTelefona,
        'password' => $request->korisnik_id,
    ]);

    return response()->json($novo);

    }
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $korisniks=Korisnik::find($id);
        if(is_null($korisniks))
            return response()->json('Nije pronadjen korisnik', 404);

        return response()->json(new KorisnikResource($korisniks));
       
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Korisnik $korisnik)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request ,$id)
       {
         $korisnikupdate=Korisnik::find($id);
         $validatedData = $request->validate([
            'ime'=>'string',
            'prezime'=>'string',
            'password'=>'string',
            'email'=>'string',
            'adresa'=>'string',
            'brojTelefona'=>'string' ,
            'uloga'=>'string',
            'datumRodjenja'=>'date',
        ]);
        $korisniksupdate->update($validatedData);
        return response()->json("PODACI O KORISNIKU SE AŽURIRANI");
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
        {
            $korisnikdelete=Korisnik::find($id);
        if(is_null($korisnikdelete))
            return response()->json('Nije pronadjen korisnik', 404);

        $korisnikdelete->delete();
       // return response()->json("KORISNIK JE OBRISAN");
    }
}
