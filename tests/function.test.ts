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
});
