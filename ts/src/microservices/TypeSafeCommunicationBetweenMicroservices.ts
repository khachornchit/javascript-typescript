class User {
}

// TypeScript interface for a user service
interface UserService {
    getUser(userId: string): Promise<User>;
}

class Order {
}

// TypeScript interface for an order service
interface OrderService {
    createOrder(order: Order): Promise<Order>;
}
