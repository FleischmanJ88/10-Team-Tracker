const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("create", () => {
        it("should create a new instance of Engineer", () => {

            const obj = new Engineer("Jeff", "001", "jeff@jeff.com", "https://github.com/FleischmanJ88");

            expect(obj).toBeInstanceOf(Engineer)
        });

        it("should create and object with a name", () => {
            const obj = new Engineer("Jeff", "001", "jeff@jeff.com", "https://github.com/FleischmanJ88");
            expect("name" in obj).toEqual(true);
        })

        it("should create and object with an id", () => {
            const obj = new Engineer("Jeff", "001", "jeff@jeff.com", "https://github.com/FleischmanJ88");
            expect("id" in obj).toEqual(true);
        })

        it("should create and object with an email", () => {
            const obj = new Engineer("Jeff", "001", "jeff@jeff.com", "https://github.com/FleischmanJ88");
            expect("email" in obj).toEqual(true);
        })

        it("should create and object with a github", () => {
            const obj = new Engineer("Jeff", "001", "jeff@jeff.com", "https://github.com/FleischmanJ88");
            expect("github" in obj).toEqual(true);
        })
    })

    describe("getGithub", () => {
        it("should return the github of the object", () => {
            const obj = new Engineer("Jeff", "001", "jeff@jeff.com", "https://github.com/FleischmanJ88");
            expect(obj.getGithub()).toEqual(obj.github)
        })
    })

    describe("getRole", () => {
        it("should return the role of Engineer", () => {
            const obj = new Engineer("Jeff", "001", "jeff@jeff.com", "https://github.com/FleischmanJ88");
            expect(obj.getRole()).toEqual("Engineer")
        })
    })

})
