# ⛽ PetroData Backend API

This is the backend system for the PetroData developer test. It manages retail fuel price uploads, user authentication, and price approval functionality.

---

## 🔗 Live API Link

👉 https://petrodata-backend.onrender.com

Use this URL as the base for all API requests.

---

## 📌 Features

- ✅ User registration & login with JWT
- ✅ Secure price uploads with auth
- ✅ Approve or delete pending prices
- ✅ Filter by region, state, or product
- ✅ MongoDB Atlas integration
- ✅ RESTful API built with Express

---

## 🚀 Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **JWT Authentication**
- **Render (Deployment)**

---

## 📂 Project Structure

petrodata-backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── .env
├── server.js
├── app.js
├── README.md



---

## 🧪 API Endpoints

### 🔐 Authentication
| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| POST   | `/api/auth/register` | Register new user     |
| POST   | `/api/auth/login`    | Log in & get token    |

### 📥 Retail Prices
| Method | Endpoint                                | Description                        |
|--------|-----------------------------------------|------------------------------------|
| POST   | `/api/retail-prices`                    | Upload price (auth required)       |
| GET    | `/api/retail-prices`                    | View prices (public, filterable)   |
| PUT    | `/api/retail-prices/:id/approve`        | Approve price entry (auth)         |
| DELETE | `/api/retail-prices/:id`                | Delete price entry (auth)          |

✅ You must include the token in the `Authorization` header like this:

Authorization: Bearer your_jwt_token


---

## ⚙️ Local Setup

### 1. Clone the Repo

```bash
git clone https://github.com/Daviesadetoro/petrodata-backend.git
cd petrodata-backend
npm install
2. Create .env file
env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

3. Start the Server
bash
npm start

📤 Postman Collection
A Postman collection is included for easy testing.
Import PetroData.postman_collection.json into Postman.

📝 Notes
All prices uploaded start with status: "pending"

Only authenticated users can approve or delete entries

Includes optional pagination and filters via query params

🙏 Author
Davies Adetoro
GitHub: @Daviesadetoro