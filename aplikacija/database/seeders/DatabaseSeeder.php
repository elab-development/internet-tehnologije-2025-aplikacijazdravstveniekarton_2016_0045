<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Analiza;
use App\Models\Bolovanje;
use App\Models\Korisnik;
use App\Models\Pregled;
use App\Models\Recept;
use App\Models\Uput;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

      /*  User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);*//*
        
         Analiza::create([
           'idAnalize'=>'2',
        'rezultat'=>'Covid negativan',
        'datumAnalize'=>'2022-08-07',
        'izdaoLekar'=>'Sima Simic',


        ]);
        Analiza::create([
           'idAnalize'=>'3',
        'rezultat'=>'Covid pozitivan',
        'datumAnalize'=>'2020-12-11',
        'izdaoLekar'=>'Rade Radic',


        ]);
        Analiza::create([
           'idAnalize'=>'1',
        'rezultat'=>'Covid negativan',
        'datumAnalize'=>'2016-02-02',
        'izdaoLekar'=>'Marko Markovic',
        ]);


        Bolovanje::create([
           'idBolovanja'=>'1',
        'datumOd'=>'2019-03-04',
        'datumDo'=>'2019-03-09',
        'dijagnoza'=>'Grip',
        'izdaoLekar'=>'Rade Radic',


        ]);
        Bolovanje::create([
           'idBolovanja'=>'2',
        'datumOd'=>'2020-12-11',
        'datumDo'=>'2020-12-30',
        'dijagnoza'=>'Covid 19',
        'izdaoLekar'=>'Rade Radic',


        ]);
        Bolovanje::create([
           'idBolovanja'=>'3',
        'datumOd'=>'2023-03-30',
        'datumDo'=>'2023-04-09',
        'dijagnoza'=>'Dijareja',
        'izdaoLekar'=>'Marko Markovic',


        ]);*/
        Korisnik::create([
           'jmbg'=>'123456789',
        'ime'=>'Viktor',
        'prezime'=>'Stojanovic',
        'adresa'=>'Aprilska 12',
        'email'=>'amk@gmail.com',
        'datumRodjenja'=>'2002-01-01',
        'brojTelefona'=>'066333444',
        'uloga'=>'admin',
        'password'=>'admin',


        ]);
        Korisnik::create([
           'jmbg'=>'22222222',
        'ime'=>'Sima',
        'prezime'=>'Simic',
        'adresa'=>'Januarska 9',
        'email'=>'ahgjka@gmail.com',
        'datumRodjenja'=>'1970-11-01',
        'brojTelefona'=>'066355555',
        'uloga'=>'lekar',
        'password'=>'1234',


        ]);
        Korisnik::create([
           'jmbg'=>'22222223',
        'ime'=>'Rade',
        'prezime'=>'Radic',
        'adresa'=>'Februarska 122',
        'email'=>'qysbdms@gmail.com',
        'datumRodjenja'=>'1990-07-01',
        'brojTelefona'=>'066333666',
        'uloga'=>'lekar',
        'password'=>'1234',


        ]);
        Korisnik::create([
           'jmbg'=>'22222224',
        'ime'=>'Marko',
        'prezime'=>'Markovic',
        'adresa'=>'Martovska 8',
        'email'=>'uahdnbd@gmail.com',
        'datumRodjenja'=>'1980-08-01',
        'brojTelefona'=>'066387956',
        'uloga'=>'lekar',
        'password'=>'1234',


        ]);
        Korisnik::create([
           'jmbg'=>'33333333',
        'ime'=>'Bisa',
        'prezime'=>'Bisic',
        'adresa'=>'Oblakovska 8',
        'email'=>'bibi@gmail.com',
        'datumRodjenja'=>'1985-05-06',
        'brojTelefona'=>'066387989',
        'uloga'=>'sestra',
        'password'=>'1234',


        ]);
        Korisnik::create([
           'jmbg'=>'33333334',
        'ime'=>'Bilja',
        'prezime'=>'Biljic',
        'adresa'=>'Novembarska 89',
        'email'=>'tyio@gmail.com',
        'datumRodjenja'=>'1990-07-06',
        'brojTelefona'=>'066007956',
        'uloga'=>'sestra',
        'password'=>'1234',


        ]);
        Korisnik::create([
           'jmbg'=>'44444444',
        'ime'=>'Maja',
        'prezime'=>'Majic',
        'adresa'=>'Majska 1',
        'email'=>'mmmmmm@gmail.com',
        'datumRodjenja'=>'1997-07-26',
        'brojTelefona'=>'065507956',
        'uloga'=>'pacijent',
        'password'=>'1234',


        ]);
        Korisnik::create([
           'jmbg'=>'44444445',
        'ime'=>'Ana',
        'prezime'=>'Anic',
        'adresa'=>'Norveska bb',
        'email'=>'annna@gmail.com',
        'datumRodjenja'=>'1964-04-09',
        'brojTelefona'=>'069687956',
        'uloga'=>'pacijent',
        'password'=>'1234',


        ]);
        Korisnik::create([
           'jmbg'=>'44444446',
        'ime'=>'Marjan',
        'prezime'=>'Marjanovic',
        'adresa'=>'Liparska 13',
        'email'=>'lipa@gmail.com',
        'datumRodjenja'=>'1948-07-06',
        'brojTelefona'=>'062777956',
        'uloga'=>'pacijent',
        'password'=>'1234',


        ]);/*

       Pregled::create([
           'idPregleda'=>'1',
        'anamneza'=>'Kijavica i temperatura',
        'dijagnoza'=>'Virusno oboljenje',
        'datumPregleda'=>'2016-02-02',
        'pregledaoLekar'=>'Marko Markovic',


        ]);
        Pregled::create([
           'idPregleda'=>'2',
        'anamneza'=>'Bol u stomaku',
        'dijagnoza'=>'Dijareja',
        'datumPregleda'=>'2023-3-30',
        'pregledaoLekar'=>'Marko Markovic',


        ]);
        Pregled::create([
           'idPregleda'=>'3',
        'anamneza'=>'Ima kijavicu i bol u grlu',
        'dijagnoza'=>'Grip',
        'datumPregleda'=>'2025-07-05',
        'pregledaoLekar'=>'Sima Simic',


        ]);

        Recept::create([
           'idRecepta'=>'1',
        'lekovi'=>'Brufen',
        'datumIzdavanja'=>'2016-02-02',
        'izdaoLekar'=>'Marko Markovic',


        ]);
        Recept::create([
           'idRecepta'=>'2',
        'lekovi'=>'Smekta',
        'datumIzdavanja'=>'2023-03-30',
        'izdaoLekar'=>'Marko Markovic',


        ]);

        Uput::create([
           'idUputa'=>'1',
        'uputZa'=>'laboratoriju',
        'datumUputa'=>'2016-02-02',
        'izdaoLekar'=>'Marko Markovic',


        ]);*/
       
        
        

        
       











       


















        
    }
}
