# Product Inventory Dashboard

Product Inventory Dashboard is a React + TypeScript CRUD application for managing products in an inventory system.

The application allows users to fetch, display, add, edit, delete, search, filter, and sort products. It also includes stock status management and uses a custom application data structure instead of relying directly on the API response shape.

## Features

- Fetch products from an external API
- Transform API data into a custom application-specific product structure
- Display products in a clean product list/table
- Add new products
- Edit existing products
- Delete products
- Search products by name
- Filter products by category
- Filter products by stock status
- Sort products by selected criteria
- Display stock status based on product stock quantity
- Show loading and error states
- Use TypeScript for products, props, state, and functions
- Responsive layout for different screen sizes

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- Fetch API

## Project Purpose

The main purpose of this project is to practice using TypeScript in a real React application.

This project focuses on working with typed data, typed props, typed state, event handlers, form handling, CRUD operations, and API data transformation.

Instead of using the fetched API data directly in the components, the application transforms the API response into a custom `Product` type. This makes the application easier to maintain and keeps the UI components independent from the exact structure of the external API.

## Main Concepts Practiced

- React components
- TypeScript types
- Props typing
- State typing
- Function typing
- Form handling
- Conditional rendering
- List rendering
- CRUD operations
- Data fetching
- API data transformation
- Search functionality
- Filtering
- Sorting
- Stock status logic
- Component-based project structure

## API Data Transformation

The application does not use the API response directly throughout the project.

Instead, the fetched product data is transformed into a custom application data structure.

Example idea:

```ts
type Product = {
  id: number | string
  name: string
  category: string
  price: number
  stock: number
  description: string
}