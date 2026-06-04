# InventoryPro - Product Inventory Dashboard

InventoryPro is a React + TypeScript inventory management dashboard for managing products and product categories.

The application allows users to fetch, display, add, edit, delete, search, filter, and sort products. It also includes category management, inventory settings, display preferences, stock status logic, theme switching, and a desktop-focused responsive dashboard layout.

## Live Demo

Live demo: [InventoryPro](https://srdanbtm.github.io/product-inventory-dashboard/)

## Repository

GitHub repository: [product-inventory-dashboard](https://github.com/SrdanBTM/product-inventory-dashboard)

## Features

### Product Management

* Fetch products from an external API
* Transform API data into a custom application-specific product structure
* Display products in a clean product table
* Add new products
* Edit existing products
* Delete products
* Search products by name
* Filter products by category
* Filter products by stock status
* Sort products by selected criteria
* Display product images
* Show placeholder icons for products without images
* Highlight newly added or edited products
* Scroll to newly added products after creation
* Show visual feedback before removing a product

### Category Management

* Display product categories in a separate categories page
* Add new categories
* Edit existing categories
* Delete categories
* Prevent duplicate category names
* Show product count for each category
* Prevent deleting categories that are currently used by products

### Inventory Settings

* Set low stock threshold
* Mark products as low stock based on the selected threshold
* Show or hide out-of-stock products
* Choose default product sort option

### Display Settings

* Switch between light and dark theme
* Change displayed currency
* Show or hide product images
* Configure how product information is displayed

### User Interface

* Sidebar navigation
* Products, Categories, and Settings pages
* Reusable modal layout
* Form validation
* Table row highlight states
* Desktop-focused dashboard layout
* Responsive content width for large screens
* Scrollable tables with sticky table headers
* Icon-based action buttons using lucide-react
* Loading and error states

## Tech Stack

* React
* TypeScript
* Vite
* CSS Modules
* Fetch API
* lucide-react

## Project Purpose

The purpose of this project is to build a portfolio-ready inventory management dashboard while practicing TypeScript in a real React application.

The project focuses on working with typed data, typed props, typed state, event handlers, form handling, CRUD operations, API data transformation, UI state management, and component-based application structure.

Instead of using the fetched API data directly throughout the application, the API response is transformed into a custom `Product` type. This keeps the UI components independent from the exact structure of the external API and makes the project easier to maintain.

## Main Concepts Practiced

* React components
* TypeScript types
* Props typing
* State typing
* Function typing
* Event typing
* Form handling
* Form validation
* Conditional rendering
* List rendering
* CRUD operations
* Data fetching
* API data transformation
* Search functionality
* Filtering
* Sorting
* Stock status logic
* Modal handling
* UI feedback states
* Desktop-focused responsive layout
* CSS Modules
* Component-based project structure

## API Data Transformation

The application does not use the API response directly throughout the UI.

Instead, fetched product data is transformed into a custom application data structure.

Example:

```ts
type Product = {
    id: string
    name: string
    category: string
    price: number
    stock: number
    image: string | null
}
```

This approach separates external API data from internal application data. If the API structure changes, only the transformation logic needs to be adjusted, while the rest of the application can continue using the same internal `Product` type.

## Application Structure

The project is organized around reusable components, page-level components, helper functions, and typed data structures.

Main application areas:

* `Products` - product table, product filtering, sorting, searching, adding, editing, and deleting
* `Categories` - category table, category creation, editing, deleting, and product count display
* `Settings` - inventory preferences and display preferences
* `UI components` - reusable buttons, inputs, modals, layout components, and table-related components
* `Helpers` - formatting, validation, filtering, sorting, and data transformation logic
* `Types` - TypeScript types used across the application

## Layout

The application is designed as a desktop-focused dashboard.

It includes a constrained content width for large screens, scrollable tables, sticky table headers, and a responsive table height. The layout is optimized primarily for desktop and laptop usage rather than as a fully mobile-first interface.


## Screenshots

### Products Page

![Products Page](./screenshots/light-products.png)

### Categories Page

![Categories Page](./screenshots/light-categories.png)

### Settings Page

![Settings Page](./screenshots/light-settings.png)

### Edit Product Modal - Dark Theme

![Edit Product Modal - Dark Theme](./screenshots/dark-edit-modal.png)


## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SrdanBTM/product-inventory-dashboard.git
```

### 2. Open the project folder

```bash
cd product-inventory-dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Build the project

```bash
npm run build
```

## Future Improvements

Possible next steps for this project:

* Refactor modal and row feedback state into reusable hooks
* Extract more shared table logic between Products and Categories
* Add pagination or configurable rows per page
* Add persistent storage with localStorage or a backend
* Add user authentication
* Add unit tests for helper functions
* Add form library support for more complex validation
* Improve accessibility for modals and interactive controls
* Improve mobile navigation and small-screen layout support

## Status

The project is completed as a portfolio project.

The current version includes product management, category management, settings, theme switching, filtering, sorting, CRUD operations, and desktop-focused dashboard styling.
