# YOUR PROJECT TITLE cs50 to-do
#### Video Demo:  https://youtu.be/UfEYiofSPvA
CS50 To-Do Chrome Extension

Overview

The CS50 To-Do Chrome Extension is a lightweight, user-friendly productivity tool designed to help users efficiently manage their daily tasks directly from the Chrome browser. This extension provides a simple yet elegant interface that allows users to add, track, edit, and remove tasks in a seamless way. Built with HTML, CSS, and JavaScript, it leverages the Chrome Storage API to ensure all tasks persist between sessions, providing a reliable and persistent task management solution without requiring any external accounts or databases.

The extension was developed as part of the CS50 final project, reflecting principles of good user experience, clean design, and functional programming. Its primary goal is to serve as a minimal, accessible, and visually appealing tool for anyone seeking to stay organized, whether for academic work, professional projects, or personal daily planning.


---

Features

1. Task Management

Users can quickly add new tasks using a text input and a dedicated add button.

Tasks are displayed in a clean, card-style layout that is easy to read and interact with.

Each task has a checkbox to mark it as completed, giving a clear visual indicator of progress.



2. Persistent Storage

The extension uses Chrome’s chrome.storage.sync API, which allows tasks to be saved and synced across devices that the user is signed into with Chrome.

This ensures that tasks are not lost when closing the popup or restarting the browser, providing reliable and continuous task management.



3. Edit and Delete

Users can edit tasks by double-clicking on the task text.

Editing is intuitive and keyboard-friendly, allowing Enter to save changes and Escape to cancel edits.

Each task includes a delete button that appears on hover, allowing users to remove unwanted tasks effortlessly.



4. Keyboard-Friendly UX

The extension is designed for rapid task entry: pressing Enter automatically adds a new task, while pressing Escape cancels an ongoing edit.

This minimizes the need for constant mouse interaction, enhancing productivity for users who prefer keyboard navigation.



5. Task Summary

At the bottom of the popup, a live summary displays the number of completed tasks, active tasks, and total tasks.

This immediate feedback allows users to track their progress at a glance without scrolling through their task list.



6. Clear All Tasks

A “Clear All” button allows users to remove all tasks in one action.

The extension prompts the user for confirmation before clearing to prevent accidental data loss.



7. Modern, Clean Design

The UI uses soft, calming colors and a card-based layout that emphasizes clarity and readability.

Rounded corners, subtle shadows, and hover effects create a professional and polished look.

The extension supports the addition of a custom logo or image at the top of the popup for branding or personal customization.



8. Responsive and Lightweight

The extension’s popup is designed to fit neatly within the standard Chrome extension popup window, ensuring no scrolling is required for typical task lists.

It is lightweight and optimized to load instantly, even with a large number of tasks.





---

Installation and Setup

1. Clone or download the repository to your local machine.


2. Open Google Chrome and navigate to chrome://extensions/.


3. Enable Developer mode in the top-right corner.


4. Click Load unpacked and select the folder containing the extension files.


5. The CS50 To-Do extension icon will appear in the Chrome toolbar.


6. Click the icon to open the popup and start managing tasks immediately.




---

Folder Structure

todo-extension/
├── popup.html       # Main HTML file for the extension popup
├── popup.css        # Stylesheet for layout, colors, and effects
├── popup.js         # JavaScript logic for tasks, storage, and interactivity
├── manifest.json    # Chrome extension manifest file
└── logo.png/jpg     # Optional logo image displayed at the top


---

Technical Details

HTML & CSS: The popup interface is built using modern HTML5 and CSS3 standards. CSS variables are used for consistent theming, and flexbox is utilized to maintain a responsive and clean layout.

JavaScript: The logic is written in vanilla JavaScript, leveraging event listeners, DOM manipulation, and Chrome Storage APIs. It supports task creation, deletion, completion toggling, and inline editing with keyboard shortcuts.

Chrome Storage API: Tasks are stored in chrome.storage.sync, providing persistent data storage and synchronization across devices where the user is signed into Chrome.

Accessibility: The extension includes accessible features such as alt text for images, focusable input elements, and keyboard-friendly interactions.



---

Customization

1. Logo/Image: Users can add a custom image to the popup by placing it in the extension folder and updating the src attribute in popup.html. Supported formats include PNG, JPG, GIF, and SVG.


2. Colors & Styles: The extension uses CSS variables for easy customization of accent colors, background, and text styles. Users can modify popup.css to match personal or brand preferences.


3. Popup Size: The popup width and other layout settings can be adjusted in the CSS to accommodate different user preferences.




---

Benefits

Quick Access: Manage tasks without leaving your browser or opening another application.

Persistent Progress: Never lose track of tasks, even after closing the browser or restarting your computer.

Minimal Distraction: Designed to be compact, visually clear, and simple to use.

Enhanced Productivity: Keyboard-friendly input and editing improve workflow speed.

Professional Look: Clean, modern design makes it suitable for both personal and professional use.



---

Future Enhancements

1. Drag-and-Drop Ordering: Allow users to reorder tasks manually.


2. Categories or Tags: Add functionality for task categorization.


3. Due Dates & Reminders: Enable deadlines and notifications.


4. Dark Mode: Offer a dark theme to reduce eye strain.


5. Synchronization with Cloud: Expand storage options beyond Chrome sync.




---

Conclusion

The CS50 To-Do Chrome Extension is a functional, aesthetically pleasing, and user-centric tool for task management. It showcases clean design, thoughtful interaction design, and efficient use of web technologies, making it an excellent project for CS50 submission or a personal productivity tool. Its lightweight structure, persistent storage, and customizable options provide both flexibility and practicality, allowing users to manage their daily tasks efficiently directly from their browser.