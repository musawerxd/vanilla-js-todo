
# Vanilla JS Todo App

A **feature-rich Todo application** built with **vanilla JavaScript, HTML, and CSS**, demonstrating **state-driven UI, DOM manipulation, and localStorage persistence**.

---

## Features

- Add, edit, and delete tasks  
- Mark tasks as completed (green + line-through)  
- Clear all tasks with confirmation  
- Filter tasks: All / Active / Completed  
- Light & Dark theme toggle (saved in localStorage)  
- Keyboard shortcuts: Enter to add, Escape to cancel edit  
- Smooth animations: fade out on delete, hover effects  
- Task stats: total, completed, remaining  

---

## Architecture

- **State-driven:** All tasks stored in a single array of objects  
- **Rendering:** UI is re-rendered from state on every change  
- **Persistence:** localStorage used to save tasks across sessions  
- **Event Handling:** User interactions update state → storage → UI  

---

## Project Structure

```txt
vanilla-js-todo/
├── index.html
├── style.css
├── script.js
└── README.md
````

---

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/vanilla-js-todo.git
```

2. Open `index.html` in your browser.
   *No server required — fully client-side.*

---

## Learnings

* DOM manipulation and event handling
* Array methods: `forEach`, `filter`, `map`
* State management in vanilla JS
* localStorage persistence
* UX enhancements: animations, keyboard shortcuts, theme toggle


