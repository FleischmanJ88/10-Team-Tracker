const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("create", () => {
        it("create new employee tab", () => {

            const obj = new Employee("Jeff", "001", "jeff@jeff.com");

            expect(obj).toBeInstanceOf(Employee)
        });

        it("create an object with name", () => {
            const obj = new Employee("Jeff", "001", "jeff@jeff.com");
            expect("name" in obj).toEqual(true);
        })

        it("create an object with ID", () => {
            const obj = new Employee("Jeff", "001", "jeff@jeff.com");
            expect("id" in obj).toEqual(true);
        })

        it("create and object with an email", () => {
            const obj = new Employee("Jeff", "001", "jeff@jeff.com");
            expect("email" in obj).toEqual(true);
        })
    })

    describe("getName", () => {
        it("return the name of the object", () => {
            const obj = new Employee("Jeff", "001", "jeff@jeff.com");
            expect(obj.getName()).toEqual(obj.name)
        })
    })

    describe("getId", () => {
        it("return the id of the object", () => {
            const obj = new Employee("Jeff", "001", "jeff@jeff.com");
            expect(obj.getId()).toEqual(obj.id)
        })
    })
    describe("getRole", () => {
        it("return the role of employee", () => {
            const obj = new Employee("Jeff", "001", "jeff@jeff.com");
            expect(obj.getRole()).toEqual("Employee")
        })
    })

})
