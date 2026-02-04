# RentAPlace Real Estate System - Project Handbook

## 1. Project Overview
**RentAPlace** (formerly YOURCHOICE) is a full-stack real estate property management system. It allows users to browse properties, filter by facilities, and book properties using a token payment system.

### Tech Stack
- **Frontend**: React.js (v18), Redux Toolkit (State), React Bootstrap (UI), SCSS (Styling).
- **Backend**: Java (JDK 21), Spring Boot (v3.2.2).
- **Database**: H2 In-Memory Database (for development ease, no installation required).
- **Build Tools**: Maven (Backend), NPM/Webpack (Frontend).

---

## 2. Architecture & Structure

### backend/pms (Spring Boot)
- **`src/main/java/com/mini/pms`**:
  - `controller`: API endpoints (e.g., `PropertyController`).
  - `entity`: Database models (`Property`, `Picture`, `Member`).
  - `repository`: JPA interfaces for DB access.
  - `service`: Business logic.
- **`src/main/resources`**:
  - `application.yml`: Configuration (H2 settings, server port).
  - `data.sql`: Seed data loaded on startup.

### frontend/ (React)
- **`src/components`**: Reusable UI parts (`Header`, `Property` card).
- **`src/pages`**: Main views (`Home`, `Login`, `AddProperty`).
- **`src/features`**: Redux state slices (`authSlice`, `uiSlice`).
- **`src/index.scss`**: Global styles and theme variables.

---

## 3. Database Schema
- **Member**: Users (`Admin`, `Owner`, `Customer`) with roles.
- **Property**: Real estate listings (House, Land, etc.).
- **Offer**: Customer offers on properties.
- **Picture**: Images linked to properties.
  - *Note*: Uses `image_key` (renamed from `key` to avoid H2 reserved word conflict).

---

## 4. How to Run the Project

### Prerequisites
- Java 21+
- Node.js & NPM

### Step 1: Start Backend
The backend runs on port `8080`.
```powershell
# In terminal 1 (backend/pms folder)
$env:JAVA_HOME='C:\Program Files\Eclipse Adoptium\jdk-21.0.8.9-hotspot\'
./mvnw.cmd spring-boot:run
```

### Step 2: Start Frontend
The frontend runs on port `3000`.
```powershell
# In terminal 2 (frontend folder)
npm start
```

### Accessing the App
Open **http://localhost:3000** in your browser.

---

## 5. Troubleshooting
- **images ?**
  - uses external Unsplash URLs. 
  - Check `data.sql` in `backend/src/main/resources`.
- **"Connection Refused"**: Ensure the backend is running. The frontend needs the API at `localhost:8080`.
- **Blank Screen**: Check the browser console (F12) for errors. Often due to a crash in React code.
