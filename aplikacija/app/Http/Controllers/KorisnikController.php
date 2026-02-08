<?php

namespace App\Http\Controllers;

use App\Models\Korisnik;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class KorisnikController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $korisnici = Korisnik::all();

        return $korisnici;
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
           'jbmbg'=>'required',
         'ime'=>'required|string',
            'prezime'=>'required|string',
            'password'=>'required|string',
            'email'=>'required|string',
            'adresa'=>'required|string',
            'brojTelefona'=>'required|string' ,
            'uloga'=>'required',
            'datumRodjenja'=>'required|date',
        ]); 

        if($validator->fails())
        return response()->json($validator->errors());

        $korisnik = Korisnik::create([ 'jmbg'=>$request->jmbg,            
                                        'ime'=>$request->ime,
                                        'prezime'=>$request->prezime,
                                        'password'=>$request->password,
                                        'email'=>$request->email,
                                        'adresa'=>$request->adresa,
                                        'brojTelefona'=>$request->brojTelefona,
                                        'uloga'=>$request->uloga,
                                        'datumRodjenja'=>$request->datumRodjenja,
                                        ]);

       return response()->json(['Korisnik je kreiran uspesno.', new KorisnikResource($korisnik) ]);
        
    }

    /**
     * Display the specified resource.
     */
    public function show($jmbg)
    {
        $korisnik=Korisnik::find($jmbg);
        if(is_null($jmbg))
            return response()->json('Nije pronadjen korisnik', 404);
       
        return $korisnik;
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
    public function update(Request $request, Korisnik $korisnik)
    {
         $validatedData = $request->validate([
            'ime'=>'required|string',
            'prezime'=>'required|string',
            'password'=>'required|string',
            'email'=>'required|string',
            'adresa'=>'required|string',
            'brojTelefona'=>'required|string' ,
            'uloga'=>'required',
            'datumRodjenja'=>'required|date',
        ]);
        $korisnik->update($validatedData);
        return response()->json("PODACI O KORISNIKU SE AŽURIRANI");
        //masovno dodeljivanje
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Korisnik $korisnik)
    {
        $korisnik->delete();
        return response()->json("KORISNIK JE OBRISAN");
    }
}
