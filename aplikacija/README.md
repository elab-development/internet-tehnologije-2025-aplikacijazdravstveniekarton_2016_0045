# E-Zdravstveni Karton

Sistem digitalnog zdravstvenog kartona namenjen pacijentima i medicinskom osoblju za upravljanje medicinskim podacima (laboratorijske analize, recepti, uputi, pregledi, bolovanja).

## Tehnologije

- **Backend:** Laravel 12 (PHP) + Swagger (API dokumentacija)
- **Frontend:** React.js 19.2.4 (JavaScript) + Axios
- **Baza podataka:** MySQL
- **Kontejnerizacija:** Docker

---

## Pokretanje aplikacije

# Ulazak u backend folder

cd backend

# Instalacija PHP zavisnosti

composer install

# Kopiranje konfiguracionog fajla i generisanje ključa

cp .env.example .env
php artisan key:generate

# Pokretanje migracija i punjenje baze

php artisan db --seed

# Pokretanje servera

php artisan serve

# Ulazak u frontend folder

cd frontend
cd reactkarton

# Instalacija paketa

npm install

# Pokretanje React aplikacije u razvojnom modu

npm start

Generisanje swagger dokumentacije:
php artisan l5-swagger:generate

Nakon podizanja:
​Frontend aplikacija će biti dostupna na: http://localhost:3000
​Backend API će biti dostupan na: http://localhost:8000
API dokumentaciju (Swagger UI) možete pogledati na: http://localhost:8000/api/documentation

## Pokretanje aplikacije pomoću Dockera

Ako imate instaliran Docker i Docker Compose, ceo sistem (Laravel, React i bazu) možete podići sledecim komandama iz glavnog foldera:

Pri prvom pokretanju aplikacije kao i posle izmena koristi se komanda:
docker-compose up --build
Pri ostalim pokretanjima: docker-compose up -d
Gašenje aplikacije: docker-compose down

Generisanje swagger dokumentacije:
php artisan l5-swagger:generate

Nakon podizanja:
​Frontend aplikacija će biti dostupna na: http://localhost:3000
​Backend API će biti dostupan na: http://localhost:8000
API dokumentaciju (Swagger UI) možete pogledati na: http://localhost:8000/api/documentation

```

```
