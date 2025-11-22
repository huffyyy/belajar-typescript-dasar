describe("Union Type", function () {
  it("Should support union type", function () {
    let sample: number | string | boolean = "Husnul";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);
    // sample = []; // error
  });

  it("Should support typeof operator", function () {
    function proscess(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(proscess("Husnul")).toBe("HUSNUL"), expect(proscess(100)).toBe(102), expect(proscess(true)).toBe(false);
  });
});
