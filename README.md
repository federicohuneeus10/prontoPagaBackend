# Backend - Financial Score API

## Setup

```bash
npm install
```

Create a .env file:
JWT_SECRET=supersecretkey123

Run

npm run dev

Endpoints
POST /auth/login — returns JWT token
GET /score/:rut — returns financial score (requires Bearer token)

Mock Users
username password role
pguzman 1234 admin
mrobles 1234 user

AI Usage
Used Claude to guide the implementation of JWT auth, middleware structure, and deterministic scoring algorithm.
