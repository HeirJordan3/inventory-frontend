# 🧾 Inventory Management Frontend

![Inventory Form Preview](public/form-preview.png)

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

## 🌐 Backend Connection

Make sure the backend is running at:

```
http://localhost:8080
```

You can customize the API base URL using an environment variable.

---

## 📂 Project Structure

```
src/
├── components/
│   └── InventoryForm.jsx
├── App.js
└── index.js
public/
└── form-preview.png
```

---

## 🧾 Features

* Input form with fields:

  * Name
  * Quantity
  * Location
  * Locker Combination
* Sends data to backend via `axios.post`
* Logs the response in the browser console
* Clears the form after successful submission

---

## 🌱 Optional: Use `.env` for API base URL

Create a file named `.env` in the root of your project:

```
REACT_APP_API_URL=http://localhost:8080/api/v1/inventory
```

Then in your code:

```js
axios.post(`${process.env.REACT_APP_API_URL}`, data);
```

---

## ✅ To Do

* Add success/error messages in the UI
* Add a table or list of submitted items
* Add "category" and "description" fields to the form
* Style the form using Tailwind or Bootstrap
* Add validation and loading states

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to your fork: `git push origin feature/your-feature`
5. Open a pull request

