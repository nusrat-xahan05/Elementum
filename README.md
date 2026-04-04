# 🚀 Elementum -- Modern React UI Project

## 📌 Project Overview

Elementum is a pixel-perfect, responsive React application built from a Figma design. The goal of this project is to demonstrate strong UI implementation skills, clean architecture, and modern frontend practices using React, TypeScript, Tailwind CSS and Framer Motion.

------------------------------------------------------------------------

## ✨ Features

-   🎯 Pixel-perfect Figma implementation
-   📱 Fully responsive (Mobile, Tablet, Desktop)
-   🎨 Clean and modern UI
-   ⚡ Smooth animations using Framer Motion
-   🧩 Reusable components
-   🐳 Dockerized for easy setup & deployment

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   ⚛️ React (with TypeScript) – Building a robust, type-safe UI.
-   ⚡ Vite – Ultra-fast development server and build tool.
-   🎨 Tailwind CSS v4.2 – Modern utility-first styling for rapid design.
-   🎞️ Framer Motion – High-performance production-ready animations.
-   ✨ Lucide React – Clean, consistent, and flexible icon library.
-   🐳 Docker – Containerized environment for consistent deployment.
-   📦 npm – Standard package management.

------------------------------------------------------------------------

## 📁 Folder Structure

    elementum/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── layout/
    │   │   ├── ui/
    │   ├── assets/
    │   │   ├── data/
    │   │   ├── font/
    │   │   ├── images/
    │   ├── index.css
    │   ├── App.tsx
    │   ├── main.tsx
    ├── Dockerfile
    ├── docker-compose.yml
    ├── package.json
    ├── index.html

------------------------------------------------------------------------

## ⚙️ Project Setup

### 🔹 Local Development

``` bash
npm install
npm run dev
```

------------------------------------------------------------------------

### 🐳 Docker Setup

#### 1. Build & Run Container

``` bash
docker compose up --build
```

#### 2. Access App

Open browser:

    http://localhost:3000

------------------------------------------------------------------------

## 🐳 Docker Configuration

### Dockerfile (Multi-stage build)

-   Uses Node.js for build
-   Uses Nginx for production serving

### docker-compose.yml

-   Maps container port 80 → local port 3000

------------------------------------------------------------------------

## 🎨 Styling Approach

-   Tailwind CSS v4 (@theme inside index.css)
-   No PostCSS or config file required
-   Custom design tokens used for colors

------------------------------------------------------------------------

## 📱 Responsiveness

-   Mobile-first design
-   Breakpoints:
    -   sm
    -   md
    -   lg
    -   xl

------------------------------------------------------------------------

## 🎞️ Animations

-   Subtle UI animations using Framer Motion
-   Hover effects
-   Page load transitions

------------------------------------------------------------------------

## 🚀 Deployment

This project is containerized using Docker, making it easy to deploy
anywhere: - VPS - AWS / DigitalOcean - Render / Railway

------------------------------------------------------------------------

## 📌 Notes

-   Fonts (Gerbil, Satoshi) are manually integrated
-   Design strictly follows Figma
-   Clean and scalable structure maintained

------------------------------------------------------------------------

## 👩‍💻 Author

Nusrat Jahan (Jahan)

------------------------------------------------------------------------

## ⭐ Final Words

This project reflects strong frontend fundamentals, attention to detail, and production-ready setup using Docker.
