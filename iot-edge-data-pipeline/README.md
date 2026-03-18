# 🌐 IoT Data Pipeline System (Edge + Cloud + Multi-Database Architecture)

A complete IoT data pipeline that collects, processes, stores, and visualizes sensor data using a layered architecture.

---

## 🚀 Overview
This project implements a full **end-to-end IoT system**, covering the entire data lifecycle:

- Data generation (sensor simulation)
- Communication (MQTT)
- Edge processing (Raspberry Pi)
- Multi-database storage
- Real-time visualization (web dashboard)

The system demonstrates how modern IoT architectures handle data efficiently by using **different databases for different purposes**, similar to real industrial solutions.

As described in the project report :contentReference[oaicite:0]{index=0}, the system successfully processes temperature data and distributes it across multiple storage layers while providing real-time access via a dashboard.

---

## 🧠 Key Features
- 📡 MQTT-based communication (HiveMQ Cloud)  
- 🧠 Edge processing on Raspberry Pi  
- 🗄 Multi-database architecture:
  - MongoDB → historical data  
  - Redis → real-time latest value  
  - PostgreSQL → structured metadata  
- 🌐 Web dashboard (Flask) for live visualization  
- 🔄 Real-time data pipeline  
- ⚡ Efficient data handling using layered design  

---

## 🛠 Technologies Used
- **ESP32** → sensor simulation  
- **MQTT (HiveMQ Cloud)** → communication protocol  
- **Python** → data processing pipeline  
- **Raspberry Pi** → edge computing node  
- **MongoDB** → time-series / historical data  
- **Redis** → in-memory real-time cache  
- **PostgreSQL** → relational metadata storage  
- **Flask** → web dashboard  

---

## ⚙️ System Architecture

The system follows a **layered IoT architecture**, commonly used in industrial environments.

### 🔹 Data Flow
1. ESP32 generates temperature data  
2. Data is sent via MQTT to HiveMQ Cloud  
3. Raspberry Pi subscribes and processes data  
4. Data is distributed to:
   - MongoDB → full history  
   - Redis → latest value  
   - PostgreSQL → device metadata  
5. Flask dashboard displays real-time data  

---

### 🔹 Architecture Layers

- **Sensor Layer**
  - ESP32 simulates temperature sensor data  

- **Communication Layer**
  - MQTT broker (HiveMQ Cloud)  

- **Edge Processing Layer**
  - Raspberry Pi processes incoming data  

- **Storage Layer**
  - MongoDB → historical data  
  - Redis → real-time cache  
  - PostgreSQL → structured data  

- **Application Layer**
  - Flask web dashboard  

---

## 📊 Data Strategy
Each database serves a specific purpose:

- **MongoDB**
  - Stores all historical sensor readings  
  - Enables long-term analysis  

- **Redis**
  - Stores only the latest value  
  - Enables fast real-time access  

- **PostgreSQL**
  - Stores device metadata (ID, location, type)  
  - Enables structured queries  

This separation improves **performance, scalability, and clarity of data usage**.

---

## 🧪 Implementation
- ESP32 generates filtered temperature values  
- Python script on Raspberry Pi processes MQTT messages  
- Data is parsed and routed to appropriate databases  
- Dashboard fetches real-time values from Redis  

Screenshots in the report (pages 4–6) show:
- MQTT communication  
- Database storage (MongoDB, Redis, PostgreSQL)  
- Real-time dashboard output :contentReference[oaicite:1]{index=1}  

---

## 📸 Preview
<img width="704" height="394" alt="image" src="https://github.com/user-attachments/assets/8f302786-2da1-4abf-8c97-1f003136cfc5" />
<img width="320" height="437" alt="image" src="https://github.com/user-attachments/assets/bdbfa578-fc40-4dfe-939e-1e70a0a62c86" />


---

## 📈 Outcome
- Built a complete **end-to-end IoT system**  
- Implemented **multi-database architecture**  
- Achieved real-time data visualization  
- Gained experience in **edge computing and cloud communication**  
- Demonstrated understanding of **industrial IoT design patterns**  

---

## ⚠️ Challenges
- Managing multiple services on Raspberry Pi  
- Ensuring communication between all system components  
- Handling different environments (Linux, Python, database shells)  
- Debugging integration issues across technologies :contentReference[oaicite:2]{index=2}  

---

## 🎯 Purpose
The goal of this project was to:
- Understand full **IoT data pipeline architecture**  
- Learn how to use **different databases for different roles**  
- Build a scalable and modular **real-world IoT system**  
- Combine embedded, backend, and data engineering  

---

## 🔗 Future Improvements
- Add real sensor hardware instead of simulation  
- Implement authentication and security (TLS, auth)  
- Add advanced analytics and visualization  
- Scale to multiple devices  
- Deploy to cloud infrastructure  

---

## 👤 Author
Edvárd Nagy  
