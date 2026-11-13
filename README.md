# Decora — 3D Room Design Application

A collaborative mobile application for creating, customizing, and managing 3D interior designs.

Decora allows users to personalize virtual rooms, explore furniture collections, modify colors, arrange decorative objects, and save their designs.

The project consists of two separately developed components: a **React Native mobile frontend** and a **Node.js backend**.

## Application Demo

**[Watch the Application Demo](

)**
The demonstration showcases the mobile interface, room customization features, furniture selection, and 3D editor.

## Project Overview

The application provides an interactive interior-design experience with the following features:

- 3D room visualization and customization
- Furniture selection and color variations
- Interactive object positioning and rotation
- Wall and interior decoration
- Saved room designs and favorites
- User accounts and profile functionality
- Local design persistence and cloud-related features

## My Contribution — Backend Development

I independently developed the backend services using **Node.js, Express.js, MongoDB, and Mongoose**.

### Authentication and User Management

- Implemented user registration and login endpoints.
- Generated JSON Web Tokens (JWT) for authenticated sessions.
- Developed authentication middleware to protect API routes.
- Implemented user profile retrieval and updates.
- Added endpoints for user statistics, including saved designs and likes.

### REST API Development

- Structured the Express application into controllers, routes, middleware, and models.
- Configured MongoDB connectivity using Mongoose.
- Developed API routing for authentication, users, designs, likes, and cloud-related operations.
- Configured JSON request handling and CORS middleware.

### Backend Technologies

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Architecture:** REST API, controllers, routes, and middleware
- **Language:** JavaScript

## Frontend — Collaborative Contribution

The mobile frontend was independently developed by my teammate using **React Native and Expo**.

Its features include:

- Interactive 3D room editor using WebView
- Furniture catalog and color customization
- 3D model previews
- Room design management
- Local persistence using AsyncStorage
- Favorites and inspiration gallery
- JSONBin-based export and cloud features

**Frontend Repository:** [PASTE_TEAMMATE_GITHUB_URL_HERE]

### Frontend Technologies

React Native · Expo · React Navigation · WebView · AsyncStorage · glTF/GLB

## Project Architecture

**Mobile Frontend**

React Native / Expo — 3D room editor and user interface

**Backend API**

Node.js / Express.js — Authentication, user management, and application endpoints

**Database**

MongoDB — Backend data storage

*Integration note:* The frontend README documents mocked authentication and local persistence, while the backend provides separate JWT authentication and MongoDB functionality. End-to-end integration should be verified before claiming it is complete.

## Backend API Structure

| API Route | Purpose |
|---|---|
| `/api/auth` | Registration, login, and authenticated user retrieval |
| `/api/users` | User profile management |
| `/api/designs` | Design-related endpoints |
| `/api/likes` | Like-related endpoints |
| `/api/cloud` | Cloud-related endpoints |

## Backend Setup

1. Clone this backend repository.
2. Install dependencies using `npm install`.
3. Create a local `.env` file with the required `MONGODB_URI`, `JWT_SECRET`, and optional `PORT` configuration.
4. Start the server using `node server.js`.
5. Ensure MongoDB is accessible.

Never commit real credentials or secrets to GitHub.

## Team Contributions

**Backend Developer — [sirin-gh]**

Node.js, Express.js, MongoDB, authentication, user management, and backend API development.

**Frontend Developer — [https://github.com/fatma218]**

React Native application, 3D room editor, mobile UI, furniture catalog, and frontend interaction systems.

## Project Links

- **Backend:** https://github.com/sirin-gh/decora-backend
- **Frontend:** https://github.com/fatma218/Threejs_Room

