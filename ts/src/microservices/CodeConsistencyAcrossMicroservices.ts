// Shared TypeScript library for common data types
interface Order {
    orderId: string;
    items: OrderItem[];
}

interface OrderItem {
    productId: string;
    quantity: number;
}