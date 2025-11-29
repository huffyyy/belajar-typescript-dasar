import {CustomerType, type Customer} from "../src/enum";

describe("Enum", function () {
    it("Should support basic enum functionality", function () {
        const customer: Customer = {
            id: 1,
            name: "Husnul",
            type: CustomerType.GOLD
        };
        console.info(customer);
    });
});
