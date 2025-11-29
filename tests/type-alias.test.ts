import type {Category, Product} from "../src/type-alias";

describe("Type Alias", function () {
    it("Should support type alias", function () {
        const category: Category = {
            id: 1,
            name: "Handphone"
        };

        const product: Product = {
            id: "1",
            name: "Samsung A56",
            price: 5000000,
            category: category
        };

        console.info(category);
        console.info(product);
    });
});
