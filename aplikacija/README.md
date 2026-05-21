# E-Zdravstveni Karton

Sistem digitalnog zdravstvenog kartona namenjen pacijentima i lekarima za upravljanje medicinskim podacima (laboratorijske analize, recepti, uputi, pregledi, bolovanja).

## Tehnologije

- **Backend:** Laravel 12 (PHP) + Swagger (API dokumentacija)
- **Frontend:** React.js 19.2.4 (JavaScript) + Axios
- **Baza podataka:** MySQL
- **Kontejnerizacija:** Docker

---

## Pokretanje aplikacije pomoću Dockera (Najlakši način)

Ako imate instaliran Docker i Docker Compose, ceo sistem (Laravel, React i bazu) možete podići jednom komandom iz glavnog foldera:

```bash
docker-compose up --build

# Ulazak u backend folder (prilagodi naziv foldera)
cd backend

# Instalacija PHP zavisnosti
composer install

# Kopiranje konfiguracionog fajla i generisanje ključa
cp .env.example .env
php artisan key:generate

# Pokretanje migracija i punjenje baze (Seeders)
php artisan db --seed

# Pokretanje servera
php artisan serve

# Ulazak u frontend folder (prilagodi naziv foldera)
cd frontend

# Instalacija paketa
npm install

# Pokretanje React aplikacije u razvojnom modu
npm start

php artisan l5-swagger:generate

Nakon podizanja:
​Frontend aplikacija će biti dostupna na: http://localhost:3000
​Backend API će biti dostupan na: http://localhost:8000
API dokumentaciju (Swagger UI) možete pogledati na: http://localhost:8000/api/documentation

```
