# Fullstack Auto

Automobile web app starter with modern browse UX and backend APIs.

## Features

- Top global search bar with autosuggest
- Browse filters (category, fuel, budget)
- Compare tool
- On-road price calculator by city
- Vehicle detail endpoint
- Admin CRUD API for vehicles
- Persistent JSON database at `src/db.json`

## Run

```bash
cd "/Users/dhanrajpatil/AI - LLM/Cursor_Workspace/Cursor_automotonews/fullstack-auto"
npm install
npm start
```

Open `http://localhost:3000`.

## APIs

- `GET /api/health`
- `GET /api/featured`
- `GET /api/search?q=nexon`
- `GET /api/vehicles?category=EV&fuel=Electric&budgetMax=2000000`
- `GET /api/vehicles/:slug`
- `GET /api/compare?left=tata-nexon-ev&right=mg-zs-ev`
- `GET /api/on-road-price?slug=tata-nexon-ev&city=Pune`

## Admin API

Admin key defaults to `automotonews-admin` and is read from header `x-admin-key`.

Create:

```http
POST /api/admin/vehicles
x-admin-key: automotonews-admin
Content-Type: application/json
```

```json
{
  "name": "Honda Activa",
  "category": "Bike",
  "brand": "Honda",
  "bodyType": "Scooter",
  "fuel": "Petrol",
  "exShowroomPrice": 78000,
  "displayPrice": "78,000",
  "range": "50 kmpl"
}
```
