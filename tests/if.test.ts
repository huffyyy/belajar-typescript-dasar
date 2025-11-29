describe("If Statement", function () {
    it("Should support if statement", function () {
        const examValue = 80;

        if (examValue > 80) {
            console.info("Good");
        } else if (examValue > 60) {
            console.info("Not Bad");
        } else {
            console.info("Try Again");
        }
    });

    it("Should support ternary operator", function () {
        const examValue = 90;
        const say = examValue >= 75 ? "Congratulation" : "Try Agaian";

        console.info(say);
    });

    it("Should support switch statemnt", function () {
        function sayHello(name: string): string {
            switch (name) {
                case "Husnul":
                    return "Hello Husnul";
                case "Fikri":
                    return "Hello Fikri";
                default:
                    return "Hello";
            }
        }

        console.info(sayHello("Husnul"));
        console.info(sayHello("Fikri"));
    });
});
