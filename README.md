# Learn Nest Frontend

This web application offers a platform for users to browse and purchase online courses, similar to a typical e-commerce website. Users can log in, register, or use guest login to explore courses, add them to their cart, and check out. The application includes a user dashboard to view orders and a cart to manage selected items.

## Features

- User authentication using JWT (Login, Guest Login, Register)
- Product listing and detailed views for online courses
- Add to cart and checkout functionality
- User dashboard to view ordered courses
- Responsive design using Tailwind CSS
- Context API for state management

## Technologies Used

- React
- Tailwind CSS
- JSON Server
- JWT Authentication
- Context API
- Netlify/Render for deployment

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sm-hdurjoy/learn-nest-frontend.git

2. Navigate to the project directory:
   ```bash
   cd learn-nest-frontend

3. Install the dependencies:
   ```bash
   npm install

### Running the Application

1. Start the JSON Server with authentication:
   ```bash
   json-server --watch data/db.json -m ./node_modules/json-server-auth -r data/routes.json --port 8000

2. Start the React application:
   ```bash
   npm run start

3. Open your browser and navigate to `http://localhost:3000`

### Project Structure