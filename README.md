# 🌍 Trip-Card-Explorer

A modern **React web app** for exploring, searching, and sorting travel destinations through interactive trip cards.

---

## 🚀 Project Overview

**Trip Card Explorer** allows users to browse curated trip cards with destination details, images, and ratings.  
The app includes features such as:
- Dynamic search by trip name
- Sorting by rating (highest ↔ lowest)  
- Clean, responsive UI built with CSS Grid & Flexbox  
- Smooth animations and hover effects  

---

## 🧩 Tech Stack

- **React 18+**
- **Vite** (for fast development and builds)
- **CSS / SASS** for styling
- **React Hooks (useState, useEffect)** for state management
- **Optional:** `react-icons`

---

## ⚙️ How to Run the App

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Bogomil-Simitchiev/Trip-Card-Explorer
cd Trip-Card-Explorer after that cd trip-card-explorer
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the app locally
```bash
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

### 4️⃣ Build for production
```bash
npm run build
```

---

## 🎨 Design Decisions

1. **Component-Based Architecture:**  
   Each part of the UI (SearchBar, TripCard, TripCardsList) is built as a separate component for clarity and reusability.

2. **CSS Grid & Flexbox Layout:**  
   The grid layout ensures responsive card arrangement, while Flexbox is used for alignment within cards.

3. **Custom CSS Animations:**  
   Used subtle transitions like:
   ```css
   @keyframes fadeIn {
     from { opacity: 0; transform: scale(0.95); }
     to { opacity: 1; transform: scale(1); }
   }
   ```
   for smoother element appearance.

4. **State Management with Hooks:**  
   Using `useState` and `useEffect` keeps the app lightweight — Redux wasn’t necessary for this scale.

---

## ⚖️ Trade-offs and Considerations

- **Performance vs. Simplicity:**  
  Instead of adding complex libraries (like Redux or TanStack Query), simple hooks were used for speed and easier learning.
  
- **Styling Choice:**  
  Chose **pure CSS / SASS** over libraries like Tailwind or Material UI for full design control.

- **Data Source:**  
  Current version uses static mock data; integrating an API would improve realism but add backend dependencies.

- **Animations:**  
  Kept transitions lightweight — avoided heavy animation libraries to maintain smooth rendering on lower-end devices.

---

## 🧠 Future Improvements

- Add real-time data fetching from an API  
- Implement user favorites and filtering by category  
- Dark mode toggle  
- Pagination 

---

## 👨‍💻 Author

**Bogomil Simitchiev (Me)**  
Frontend Developer passionate about clean UI and performant web apps.  
📧 [simitchiev365@gmail.com]  
🔗 [LinkedIn](https://www.linkedin.com/in/bogomil-simitchiev-97593724b/)

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use and modify it.
