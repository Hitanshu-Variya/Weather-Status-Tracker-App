# 🌤️ Weather Tracker Website

A responsive and visually rich weather tracking web application built with **React + Vite**. It fetches real-time weather data using the **OpenWeatherMap API** and dynamically displays weather stats, background images, and icons based on the current weather conditions.

---

## 🚀 Live Demo

🔗 [View Live Website on Render](https://weather-status-tracker.onrender.com)

---

## 📸 Features

- 🌍 Search and track weather for any location
- ⏰ Real-time digital clock and date
- 🌦️ Weather-based background images (rain, snow, clear, etc.)
- 📊 Dynamic weather stats (temperature, pressure, humidity, etc.)
- 📱 Fully responsive UI for mobile and desktop
- 🔍 Instant input handling with `Enter` key

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, TypeScript, Tailwind CSS
- **Weather API**: OpenWeatherMap
- **Deployment**: Render.com
- **Icons & Assets**: Custom weather icons and background images

---

## ⚙️ Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Hitanshu-Variya/Weather-Status-Tracker-App.git
cd src
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup .env File

Create a `.env` file inside the `src/` directory:

```env
VITE_API_KEY=your_openweathermap_api_key
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

The build output will be generated in the `dist/` folder (outside `src/`).

---

## 📦 Deployment Notes (Render.com)

- **Root Directory**: `src`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Environment Variable**: Add `VITE_API_KEY`

---

## 📁 Folder Structure

```
project-root/
├── public/   
│   ├── assets/         # Images & icons         
├── src/                # Project root
│   ├── dist/           # Production build output
│   ├── Interfaces/     # TypeScript interfaces
│   ├── Functions/      # Utility functions
│   ├── App.tsx         # Main component
│   ├── main.tsx        # Entry point
│── vite.config.js      # Vite configuration
```
