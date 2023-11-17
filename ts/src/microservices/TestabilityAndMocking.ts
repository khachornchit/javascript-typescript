import {it} from "node:test";

class OrderService {
    constructor(mockUserService: UserService) {

    }

    async createOrder(param: {}) {

    }
}

class UserService {
}

// TypeScript unit test for an order service
it('should create an order', async () => {
    const mockUserService: UserService = new UserService() /* create a mock user service */;
    const orderService = new OrderService(mockUserService);
    const order = await orderService.createOrder({ /* order data */});
    // Perform assertions
});
