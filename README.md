# RubExpert 🧩

RubExpert is a web-based Rubik's Cube solver that lets users enter a cube configuration manually or use the camera-based scanner, then generates and displays a solution.

## Features

- Manual Rubik's Cube configuration using an interactive color palette
- Camera-based cube scanning interface
- Interactive 3D Rubik's Cube visualization
- Automatic solution generation
- Reset cube configuration
- React-based responsive user interface
- REST API connecting the frontend with the solving engine

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- HTML/CSS

### Backend
- Node.js
- Express.js
- REST API
- CORS

### Solver
- Python
- Custom Rubik's Cube solving program

## Project Structure

```text
Rubexpert/
├── backend/
│   ├── server.js
│   ├── solver.py
│   └── package.json
├── public/
├── src/
│   ├── components/
│   │   ├── CameraScanner/
│   │   ├── Cube/
│   │   ├── Cube3D/
│   │   ├── ManualInput/
│   │   ├── Scanner/
│   │   └── Solution/
│   └── App.jsx
├── package.json
└── README.md
```

## How It Works

1. Configure the Rubik's Cube using manual input or the scanner.
2. The frontend maintains the current cube state.
3. The cube state is sent to the Express backend through the `/solve` API.
4. The backend invokes the Python solver with the cube configuration.
5. The generated solution is returned to the frontend and displayed to the user.

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js and npm
- Python 3

### 1. Clone the repository

```bash
git clone https://github.com/Ayushsingh-9893/Rubexpert.git
cd Rubexpert
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd backend
npm install
```

### 4. Start the backend

From the `backend` directory:

```bash
npm start
```

The backend runs on:

```text
http://localhost:5000
```

### 5. Start the frontend

Open a new terminal in the project root:

```bash
npm run dev
```

Then open the local URL shown by Vite in your browser.

## API

### POST `/solve`

Accepts the cube configuration and returns the generated solution.

Example request:

```json
{
  "cube": "<cube-state>"
}
```

Example successful response:

```json
{
  "success": true,
  "solution": "<solution>"
}
```

## Future Improvements

- Improve automatic cube-state detection from camera input
- Add step-by-step animated solution instructions
- Add move validation before solving
- Improve mobile responsiveness
- Deploy the frontend and backend for public access

## Author

**Ayush Singh**

GitHub: https://github.com/Ayushsingh-9893
