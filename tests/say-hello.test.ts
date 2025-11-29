import {sayHello} from "../src/say-hello";

describe("SayHello", function (): void {
    it("should return hello husnul", function (): void {
        expect(sayHello("Husnul")).toBe("Hello, Husnul");
    });
});
