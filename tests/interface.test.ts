import type { Employee, Manager } from "../src/employee";
import type { Person } from "../src/person";
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

  it("Should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Husnul", "Fikri"];
    console.info(names[0]);
    console.info(names[1]);
  });

  it("Should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Husnul",
      address: "Jakarta"
    };

    expect(dictionary["name"]).toBe("Husnul");
    expect(dictionary["address"]).toBe("Jakarta");
  });

  it("Should support extends interface", function () {
    const employee: Employee = {
      id: "1",
      name: "Husnul",
      division: "IT"
    };
    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Fikri",
      division: "IT",
      numberOfEmployees: 10
    };
    console.info(manager);
  });

  it("Should support function interface", function () {
    const person: Person = {
      name: "Husnul",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      }
    };
    console.info(person.sayHello("Fikri"));
  });

  it("Should support intersection type", function () {
    interface Hasname {
      name: string;
    }
    interface HasId {
      id: number;
    }

    type Domain = HasId & Hasname;

    const domain: Domain = {
      id: 1,
      name: "Husnul"
    };
    console.info(domain);
  });

  it("Should support type assertion", function () {
    const person: any = {
      name: "Husnul",
      age: 30
    };
    const personAsPerson = person as Person;
    // personAsPerson.sayHello("Fikri"); // Error
    console.info(personAsPerson);
  });
});
