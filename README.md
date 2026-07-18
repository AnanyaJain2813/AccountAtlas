# AccountAtlas – Finance Tracker App

AccountAtlas is a full-stack personal finance tracker application built to help users manage income, expenses, and overall balance in one place. It provides a clean dashboard, transaction tracking, category-based organization, and financial insights for better money management.

## Features

- User authentication with secure login and signup
- Add, view, and delete income and expense transactions
- Categorize transactions for better expense tracking
- Dashboard summary for total income, total expenses, and balance
- Monthly and category-wise financial overview
- Responsive UI for desktop and mobile use
- REST API integration between frontend and backend
- MongoDB-based data storage for persistent transaction records

## Tech Stack

**Frontend**
- React.js
- HTML5
- CSS3
- JavaScript
- Axios

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Other Tools**
- JWT Authentication
- Chart.js

## Project Structure

```bash
finance-tracker/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

## How It Works

The application allows users to register and log in securely. After authentication, users can add income or expense transactions, assign categories, and monitor their financial activity through a dashboard that summarizes balance, spending, and earnings.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/finance-tracker.git
cd finance-tracker
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Install frontend dependencies

```bash
cd ../client
npm install
```

### 4. Create environment variables

Create a `.env` file inside the `server` folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 5. Run the backend server

```bash
cd server
npm start
```

### 6. Run the frontend

```bash
cd client
npm run dev
```

## Usage

- Sign up or log in to your account
- Add income and expense transactions
- Select categories such as food, travel, salary, shopping, or bills
- View updated balance and dashboard summary
- Track spending patterns and manage finances efficiently

## Future Improvements

- Edit and update transactions
- Budget planning module
- Export transaction history as CSV or PDF
- Filter by month and date range
- Dark mode support
- Recurring transaction management

## Learning Outcomes

This project helped in understanding:
- Full-stack web development using MERN
- RESTful API design and integration
- MongoDB schema design
- Authentication using JWT
- State management and dashboard rendering in React
- Building responsive and modular web applications


## License

This project is licensed for educational and personal use.
