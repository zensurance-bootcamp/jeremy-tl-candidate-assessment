# Orders Inventory Client

A React-based web application that provides a user-friendly interface for managing product orders and viewing real-time inventory levels.

## Features

### Order Management

- **Order Placement**: Submit orders by specifying product SKU and quantity
- **Real-time Validation**: Orders are validated against current stock levels
- **Instant Feedback**: Immediate confirmation of order processing

### Inventory Monitoring

- **Stock Level Display**: View current stock levels for products
- **Stock Status Indicators**: Visual badges showing stock status:
  - **In Stock**: 5+ units available
  - **Low Stock**: 1-4 units available
  - **Out of Stock**: 0 units available
  - **Unknown**: Stock information not loaded
- **Manual Refresh**: Update stock information on demand

### User Interface

- **Simple Form Interface**: Clean, intuitive order entry form
- **Responsive Design**: Works across different screen sizes
- **Real-time Updates**: Stock levels update automatically after placing orders

## Technology Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Communication**: gRPC client for backend integration
- **Styling**: Inline styles with system fonts

## Usage

1. Enter a product SKU (defaults to 'ABC123')
2. Specify the quantity to order (defaults to 0)
3. Click "Place Order" to submit
4. Use "Refresh Stock" to get updated inventory levels
5. Monitor stock status through the visual indicator

The application communicates with the backend server via gRPC to ensure real-time inventory management and order processing.
