// Static typing in TypeScript
function add(a: number, b: number): number {
    return a + b;
}

let result: number = add(2, 3);  // Correct usage
// let error: string = add(2, 3);  // Error: Type 'number' is not assignable to type 'string'
