# 🧾 Inventory Management Frontend

This is the **React frontend** for the Inventory Management System.  
It allows users to submit inventory items through a form and sends the data to the Spring Boot backend.

---

## 🖥️ Tech Stack

- React (Create React App)
- Axios (for HTTP requests)
- JavaScript (ES6+)
- HTML & CSS

---

## 🚀 How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/your-username/inventory-frontend.git
cd inventory-frontend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The app will open in your browser at:

```
http://localhost:3000
```

---

## 🌐 Connects To

Make sure the backend is running at:

```
http://localhost:8080
```

You can customize this using an `.env` file.

---

## 🧾 Features

* Form to input:

  * Name
  * Quantity
  * Location
  * Locker Combination
* Sends a POST request to the backend
* Logs response to the browser console
* Resets the form after submission

---

## 📂 Project Structure

```
src/
├── components/
│   └── InventoryForm.jsx
├── App.js
└── index.js
```

---

## 🌱 .env Setup (optional)

Create a file named `.env` in the root of your frontend folder:

```
REACT_APP_API_URL=http://localhost:8080/api/v1/inventory
```

In your component, use:

```js
axios.post(`${process.env.REACT_APP_API_URL}`, data)
```

---

## ✅ To Do

* Add a list view for submitted items
* Show success/error messages on the page
* Add category & description support

