import type { Seller } from "../src/seller";

describe("Interface", function () {
  it("Should support interface with optional property", function () {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC"
    };

    console.info(seller);
  });
});
