# RentAPlace - Premium Property Management System

RentAPlace is a full-stack real estate platform built with Spring Boot (Java 21) and React.js. It allows users to list, browse, and book properties with a secure Razorpay token system.

## 🚀 Features
- **User Roles**: Admin, Owner, Customer.
- **Premium UI**: Modern responsive design with animations.
- **Secure Payments**: Razorpay integration for token booking.
- **Verified Data**: 15+ Premium properties seeded in database.
- **Interactive Maps**: Leaflet integration for property location.

## 🛠️ Tech Stack
-   **Backend**: Java 21, Spring Boot 3.2, Spring Security, H2 Database.
-   **Frontend**: React 18, Bootstrap 5, Redux Toolkit, React Query.

## 📦 Build & Deployment

### prerequisites
-   Java 21 verified.
-   Node.js 18+.

### 1. Build Backend
```bash
cd backend/pms
./mvnw clean package -DskipTests
```
The executable JAR will be in `backend/pms/target/pms-0.0.1-SNAPSHOT.jar`.

### 2. Build Frontend
```bash
cd frontend
npm install
npm run build
```
The static files will be in `frontend/build`.

### 3. Run Production (Locally)
Run backend (Frontend files should be served by a web server or integrated):
```bash
java -jar backend/pms/target/pms-0.0.1-SNAPSHOT.jar
```

## 🔑 Configuration
The project uses `application.yml` for configuration. The database is H2 In-Memory (data is seeded on every restart).
Razorpay keys are configured in the backend properties.

## 📝 Credentials
-   **Admin**: admin@rentaplace.com / password
-   **Owner**: owner@rentaplace.com / 123
-   **Customer**: customer@rentaplace.com / 123

---
**RentAPlace 2026** - All Rights Reserved.
