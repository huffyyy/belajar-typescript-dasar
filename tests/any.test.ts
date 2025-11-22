describe("Any", function () {
  it("Should support in typescript", function () {
    const person: any = {
      id: 1,
      name: "Husnul",
      age: 19
    };

    person.age = "Nineteen";
    person.address = "Indonesia";

    console.info(person);
  });
});
