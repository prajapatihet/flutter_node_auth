# Flutter-Node-Auth

A Flutter application for user authentication, featuring login and signup functionality, utilizing MongoDB for the database and JWT (JSON Web Tokens) for secure authentication.

## Features

- User Registration (Sign Up)
- User Login
- Secure Authentication using JWT
- MongoDB for data storage

## Tech Stack

- **Frontend:** Flutter
- **Backend:** Node.js
- **Database:** MongoDB
- **Authentication:** JWT

## Installation

To set up the project, follow these steps:

### Flutter Setup

1. Navigate to the Flutter project directory.
2. Run the following commands to clean and install the necessary Flutter packages:
   ```bash
   flutter clean
   flutter pub get
   ```

### Node.js Setup

1. Change to the server directory:

```bash
cd server
```

2. Install the required Node.js packages:

```bash
npm install
```

3. Create a .env file in the server directory and add your MongoDB cluster URL:

```bash
MONGODB_URL=<your_mongodb_cluster_url>
```

4. Start the Node.js server:

```bash
npm start
```

## Usage

- Launch the Flutter application on your device/emulator.
- Use the sign-up form to create a new user account.
- Use the login form to authenticate existing users.
