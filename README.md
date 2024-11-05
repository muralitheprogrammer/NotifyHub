# Notification App

A real-time notification app that uses Vue.js for the frontend and .NET Web API with SignalR for the backend. The app provides instant notifications with a clean and intuitive user interface.

## Features
- **Real-Time Notifications**: Uses SignalR for live updates.
- **Notification Bell Icon**: Displays the count of unread notifications.
- **Toggle Notification Panel**: Easily show or hide the list of notifications.
- **Clear Notifications**: Option to clear individual notifications or all at once.
- **Visual Indicator**: Highlights when new notifications arrive.

## Technologies Used
### Frontend
- **Vue.js**: A progressive JavaScript framework for building user interfaces.
- **HTML & CSS**: Used for structuring and styling the application.
- **SignalR**: Integrated with Vue.js for real-time communication.

### Backend
- **.NET Web API**: Provides RESTful endpoints and real-time SignalR services.
- **SignalR**: Manages real-time communication between the server and the client.
- **C#**: Backend programming language.

## Getting Started

### Prerequisites
- **Node.js**: Required to run the frontend.
- **.NET SDK**: Required to build and run the backend.
- **Visual Studio or VS Code**: Recommended for development.

## Setup Instructions

### Backend (C#)
Download and setup the backend service from: https://github.com/muralitheprogrammer/NotifyHub-backend.git


### Frontend (Vue.js)
1. **Clone the frontend repository**:
   ```
   git clone https://github.com/muralitheprogrammer/NotifyHub.git
   cd NotifyHub
   npm install

2. **Update API Base URL**:

    Open signalRService.js and update the base URL to point to your .NET Web API backend URL

3. **Start the frontend development server**:

    ```
    npm run serve

## How It Works
### SignalR Integration: 
The frontend uses SignalR to establish a real-time connection with the .NET Web API backend for notifications.
### Notification Handling: 
New notifications are added to the top of the list and the bell icon updates to reflect unread notifications.