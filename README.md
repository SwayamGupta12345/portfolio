# Portfolio – Swayam Gupta

A modern, interactive portfolio website built with React and Vite. This portfolio showcases web development, software engineering, and AI projects, with a strong focus on user experience and responsive design.

## Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
---

## Features

- **Project Showcase:**  
  Interactive cards for each project, including GitHub links, live demos, descriptions, and tech stack tags.  
  Projects are filterable by category (Web, AI/ML, C++, Tools, etc.).

- **Skills Section:**  
  Displays categorized skills (front-end, back-end, tools, etc.) with visually appealing icons and responsive design.

- **Animated UI:**  
  Uses Framer Motion for smooth transitions and card flipping effects.

- **Responsive Design:**  
  Fully responsive layout optimized for desktops, tablets, and mobile devices.

- **Modern Styling:**  
  Utilizes CSS Grid/Flexbox, custom properties, and theme variables for maintainable, attractive styles.

---

## Live Demo

[View Portfolio Live](https://swayamgupta.vercel.app/)

---

## Screenshots
![image](https://github.com/user-attachments/assets/ac11bf48-6156-4d49-8d8f-89fa55202779)


---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SwayamGupta12345/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**  
   Visit `http://localhost:5173` (or the port shown in your terminal).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components (ProjectCard, ProjectFilter, etc.)
│   ├── styles/             # Modular CSS files for components & pages
│   ├── projects.jsx        # Main projects section logic
│   ├── App.css             # Global styles
│   └── index.html          # HTML template with SEO/meta tags
├── package.json
└── README.md
```

---

## Usage

- **Adding/Editing Projects:**  
  Project data is fetched dynamically from GitHub or defined in the code. To add new projects, update the relevant data or connect your GitHub repositories.

- **Filtering:**  
  Use the category filter to view projects by technology or domain.

- **Live Demo Links:**  
  Each project card links to the GitHub repo and (if available) a live deployed demo.

---

## Tech Stack

- **Frontend:**  
  - React (with hooks)
  - Vite (for fast development & HMR)
  - Framer Motion (animations)
  - CSS Modules / Custom CSS

- **Styling:**  
  - Theme variables and responsive breakpoints
  - Icons via React Icons
