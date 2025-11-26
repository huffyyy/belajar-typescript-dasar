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
});
