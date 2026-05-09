# BLR Pincode Finder

A simple and efficient web application to find pincodes for areas in Bangalore (BLR) and vice versa. Built with a modern tech stack, this tool provides a clean interface for quick location lookups.

## 🚀 Features

- **Search by Pincode**: Enter a 6-digit Bangalore pincode to find the associated area name.
- **Search by Area**: Enter an area name to retrieve its corresponding pincode.
- **Modern UI**: Clean, minimal, and responsive design built with React and Vanilla CSS.
- **RESTful API**: Robust backend architecture using Express and MongoDB.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Custom Design System)
- **Icons**: Lucide (if applicable) / Custom SVG

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Middleware**: CORS, Dotenv

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone <repository-url>
cd blr-pincode-finder
```

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Backend` root:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/pincode/pincode/:pincode` | Get area name for a given pincode |
| `GET` | `/api/pincode/area/:area` | Get pincode for a given area name |

## 📂 Project Structure

```text
blr-pincode-finder/
├── Backend/
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # Database schemas
│   │   ├── routes/         # API routes
│   │   └── services/       # DB connection & business logic
│   ├── server.js           # Server entry point
│   └── .env                # Environment variables
├── Frontend/
│   ├── src/
│   │   ├── assets/         # Images and icons
│   │   ├── App.jsx         # Main application logic
│   │   └── index.css       # Global styles & design system
│   └── vite.config.js      # Vite configuration
└── README.md
```



