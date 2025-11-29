describe("Function", () => {
    it("Should support function", function () {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Husnul")).toBe("Hello Husnul");

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Fikri");
    });

    it("Should support function paramater default value", function () {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Husnul")).toBe("Hello Husnul");
    });

    it("Should support function rest parameter", function () {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it("Should support function optional parameter", function () {
        function sayHello(firstName: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            } else {
                return `Hello ${firstName}`;
            }
        }

        expect(sayHello("Husnul")).toBe("Hello Husnul");
        expect(sayHello("Husnul", "Fikri")).toBe("Hello Husnul Fikri");
    });

    it("Should support function overloading", function () {
        function callMe(value: string): string;
        function callMe(value: number): number;
        function callMe(value: any): any {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value * 10;
            }
        }

        expect(callMe("Husnul")).toBe("HUSNUL");
        expect(callMe(10)).toBe(100);

        console.info(callMe("fikri"));
        console.info(callMe(5));
    });

    it("Should support function as parameter", function () {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello("husnul", toUpper)).toBe("Hello HUSNUL");

        expect(
            sayHello("Husnul", function (name: string): string {
                return name.toUpperCase();
            })
        ).toBe("Hello HUSNUL");

        expect(sayHello("Husnul", (name: string): string => name.toUpperCase())).toBe("Hello HUSNUL");
    });
});
