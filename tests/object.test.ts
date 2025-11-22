describe("Object", function () {
  it("should suppot object type", function () {
    const person: { id: string; name: string } = {
      id: "1",
      name: "Husnul"
    };

    console.info(person);

    (person.id = "2"), (person.name = "Fikri");
    //person.description = 'hello' // error

    console.info(person);
  });
});
