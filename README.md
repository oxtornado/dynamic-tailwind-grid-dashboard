# Tailwind Grid Cards
![Screenshot from 2025-05-31 11 38 34](https://github.com/user-attachments/assets/3a36ca13-59b7-4996-a183-ee70392f1fe9)

A simple and modern web component that displays data in a responsive grid layout using Tailwind CSS.

## Overview
This project demonstrates a dynamic grid layout system that showcases data cards with conditional formatting and responsive design.

## Features
- Dynamic 2-column grid layout
- Responsive card design
- Third item spans full width (2 columns)
- Price formatting with 2 decimal places
- Boolean state display (yes/no)
- Centered content alignment

## Tech Stack
- JavaScript (ES6+)
- Tailwind CSS
- HTML5

## Project Structure
```
tasks/
├── js/
│   ├── script.js
│   └── data.js
└── index.html
```

## Implementation Details
- Uses ES6 modules for data import
- Dynamic DOM manipulation
- Tailwind utility classes for styling
- Conditional class application
- Template literals for HTML generation

## Usage
The component automatically generates cards from a data array, with special styling for the third item.

## Styling
- Margin spacing with `m-20`
- Grid gap of 4 units
- Centered text alignment
- Fixed height cards (h-28)
- Rounded borders (rounded-2xl)

## Development
Clone the repository and ensure you have Tailwind CSS configured in your project.
