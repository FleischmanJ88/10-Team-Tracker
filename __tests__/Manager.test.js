const Manager = require("../lib/Manager")

describe("Manager", () =>{
    describe("create", () =>{
        it("should create a new instance of Manager", () => {

            const obj = new Manager("Jeff", "001", "jeff@jeff.com", "Manager");

            expect(obj).toBeInstanceOf(Manager)
        });

        it("should create and object with a name",()=>{
            const obj = new Manager("Jeff", "001", "jeff@jeff.com", "Manager");
            expect ("name" in obj).toEqual(true);
        })

        it("should create and object with an id",()=>{
            const obj = new Manager("Jeff", "001", "jeff@jeff.com", "Manager");
            expect ("id" in obj).toEqual(true);
        })

        it("should create and object with an email",()=>{
            const obj = new Manager("Jeff", "001", "jeff@jeff.com", "Manager");
            expect ("email" in obj).toEqual(true);
        })
    })

    describe("getOfficeNumber", () =>{
        it("should return the officeNumber of the object",()=>{
            const obj = new Manager("Jeff", "001", "jeff@jeff.com", "Manager");
            expect(obj.getOfficeNumber()).toEqual(obj.officeNumber)
        })
    })
    
    describe("getRole", () =>{
        it("should return the role of Manager",()=>{
            const obj = new Manager("Jeff", "001", "jeff@jeff.com", "Manager");
            expect(obj.getRole()).toEqual("Manager")
        })
    })

})
