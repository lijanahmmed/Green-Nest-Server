# Green Nest Server

**Green Nest Server** is the backend API for the Green Nest plant management application.  
It provides secure user authentication, plant management, data validation, and communication with the MongoDB database.  
Built using **Node.js**, **Express.js**, and **MongoDB**, this server powers all plant-related operations for the Green Nest frontend.

---

## Features

- **CRUD Operations for Plants**
- **MongoDB Database Integration**
- **Error Handling & Validation**
- **CORS Enabled for Client Communication**

---

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **dotenv**
- **Cors**

---

## 📦 Dependencies

```json
"dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "mongodb": "^7.0.0",
    "nodemon": "^3.1.11"
  }
```

## Links

- **Client Repository:**  
  https://github.com/lijanahmmed/Green-Nest-Client

- **Live Website:**  
  https://green-nest-client-zdrj.vercel.app/

- **Server Deploy Link:**  
  https://green-nest-server.vercel.app/

---

## Clone the Repository

Use the following command to clone the project:

```bash
git clone https://github.com/lijanahmmed/Green-Nest-Server.git

cd Green-Nest-Server
```

### Install Dependencies

```bash
cd Green-Nest-Server
npm install

```

### Start Backend

```bash
nodemon index.js
```
