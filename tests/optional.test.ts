describe("Optional Paramater", function () {
    it("Should support optional parameter in interface", function () {
        function sayHello(name?: string | null) {
            if (name) {
                console.info(`Hello, ${name}`);
            } else {
                console.info("Hello");
            }
        }

        sayHello("Husnul");
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    });
});
