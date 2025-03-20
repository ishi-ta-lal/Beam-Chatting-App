# Beam Chatting App

Beam Chatting App is a real-time messaging application designed to facilitate seamless communication between users. Built with a modern tech stack, it offers a responsive and intuitive interface for an enhanced user experience.

## Features

- **Real-Time Messaging**: Instant communication with live updates.
- **User Authentication**: Secure login and registration system.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Typing Indicators**: See when other users are typing in real-time.

## Tech Stack

- **Frontend**: React.js, CSS, HTML
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **WebSockets**: Socket.io for real-time communication
- **Authentication**: JWT (JSON Web Tokens)
  
## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ishi-ta-lal/Beam-Chatting-App.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd Beam-Chatting-App
   ```

3. **Install dependencies for both frontend and backend**:

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**:

   - Create a `.env` file in the `backend` directory.
   - Add the following variables:

     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

5. **Start the application**:

   - **Backend**:

     ```bash
     cd backend
     npm start
     ```

   - **Frontend**:

     ```bash
     cd ../frontend
     npm start
     ```

6. **Access the application**:

   Open your browser and navigate to `http://localhost:3000`.

## Contributing

We welcome contributions to enhance the Beam Chatting App. To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m 'Add some feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/YourFeatureName
   ```

5. Open a pull request.

 ## Troubleshooting

- **App not starting?** Check if MongoDB is running and environment variables are set correctly.
- **Messages not sending?** Ensure WebSocket connections are working properly.
- **Login issues?** Verify that the JWT secret matches in the backend configuration.


---

