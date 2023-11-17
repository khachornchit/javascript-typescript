// Shared TypeScript library for service contracts
interface ProductService {
    getProduct(productId: string): Promise<Product>;
}

interface Product {
    productId: string;
    name: string;
    price: number;
}