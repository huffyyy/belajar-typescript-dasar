import type { Seller } from "../src/seller";

describe("Interface", function () {
  it("Should support interface with optional property", function () {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      nib: "1234567890",
      npwp: "0987654321"
    };
    seller.name = "Toko XYZ";
    // seller.nib = "1111111111"; // Error: Cannot assign to 'nib' because it is a read-only property
    console.info(seller);
  });

  it("Should support function interface", function () {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(1, 2)).toBe(3);
  });
});
