const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("create", () => {
        it("should create a new instance of Intern", () => {

            const obj = new Intern("Jeff", "001", "jeff@jeff.com", "School");

            expect(obj).toBeInstanceOf(Intern)
        });

        it("should create and object with a name", () => {
            const obj = new Intern("Jeff", "001", "jeff@jeff.com", "School");
            expect("name" in obj).toEqual(true);
        })

        it("should create and object with an id", () => {
            const obj = new Intern("Jeff", "001", "jeff@jeff.com", "School");
            expect("id" in obj).toEqual(true);
        })

        it("should create and object with an email", () => {
            const obj = new Intern("Jeff", "001", "jeff@jeff.com", "School");
            expect("email" in obj).toEqual(true);
        })

        it("should create and object with a github", () => {
            const obj = new Intern("Jeff", "001", "jeff@jeff.com", "School");
            expect("school" in obj).toEqual(true);
        })
    })

    describe("getSchool", () => {
        it("should return the github of the object", () => {
            const obj = new Intern("Jeff", "001", "jeff@jeff.com", "School");
            expect(obj.getSchool()).toEqual(obj.school)
        })

    })

    describe("getRole", () => {
        it("should return the role of Intern", () => {
            const obj = new Intern("Jeff", "001", "jeff@jeff.com", "School");
            expect(obj.getRole()).toEqual("Intern")
        })
    })

})
