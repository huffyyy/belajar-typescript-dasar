describe("Array", function () {
    it("Should same with javascript", function () {
        const name: string[] = ["Husnul", "Fikri"];
        const values: number[] = [1, 2, 3, 4];

        console.info(name);
        console.info(values);
    });

    it("Should support readonly array", function () {
        const hobbies: ReadonlyArray<string> = ["membaca", "menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0] = "coding"; // error
    });

    it("Should support tupple", function () {
        const person: [string, string, number] = ["Husnul", "Fikri", 19];
        console.info(person);
        console.info(person[0]);
        console.info(person[2]);
        // person[0] = "Fikri"; // error
    });
});
