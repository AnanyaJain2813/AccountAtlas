# Finance Tracker MERN

A full-stack personal finance tracker built with MongoDB, Express.js, React.js, and Node.js. It includes JWT authentication, transaction CRUD, dashboard analytics, category filters, and monthly summaries.

## Features
- User registration and login
- JWT-based protected routes
- Add, edit, delete, and list transactions
- Dashboard KPIs: income, expense, balance
- Category-wise expense breakdown
- Monthly transaction filtering
- REST APIs with modular structure

## Structure
- `client/` React frontend
- `server/` Express + MongoDB backend

## Setup
### Server
```bash
cd server
npm install
npm run dev
```

Create `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/finance_tracker
JWT_SECRET=replace_this_with_a_secure_secret
CLIENT_URL=http://localhost:5173
```

### Client
```bash
cd client
npm install
npm run dev
```

## Resume Description
Built a full-stack finance tracker using the MERN stack with JWT authentication, CRUD operations, REST APIs, MongoDB schema design, and dashboard analytics for income, expenses, and monthly budget insights.
