describe("Loop", function () {
  it("Should support for loops", function () {
    const names: string[] = ["Husnul", "Fikri"];

    for (let i = 0; i < names.length; i++) {
      console.info(names[i]);
    }

    for (const name of names) {
      console.info(name);
    }

    for (const index of Object.keys(names)) {
      console.info(names[index as any]);
    }
  });

  it("Should support while loops", function () {
    let counter: number = 0;
    while (counter < 10) {
      console.info(counter);
      counter++;
    }
  });
});
