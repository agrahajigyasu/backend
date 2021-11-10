// let request = require("request");
// let contacts = require("../modules/books");

// describe("Unit tests on books module", () => {
//     describe("load all books", () => {
//         //positive test to load all contacts
//         it("have two elements", () => {
//             let results = contacts.list();
//             expect(results.result.length).toBe(2);
//         });
        
//     });
//     describe("load specific books", () => {
//         //positive test to load contact by last name
//         it("with last name Smith", () => {
//             let results = contacts.query_by_arg("lastname", "Smith");
//             expect(results.firstname).toBe("Joe");
//         });
//         //positive test to load contact by first name
//         it("with first name John", () => {
//             let results = contacts.query_by_arg("firstname", "John");
//             expect(results.lastname).toBe("Douglas");
//         });
//         //exception test to load contact by cell phone (argument does not exists)
//         it("with cell phone number +00000", () => {
//             expect( () => {
//                 contacts.query_by_arg("cellphone", "+000000");
//             }).toThrow("Unknow parameter cellphone");
//         });
//         //negative test to load contact by cell phone (value does not exists)
//         it("with first name Max", () => {
//             let results = contacts.query_by_arg("firstname", "Max");
//             expect(results).toBeNull();
//         });
       
//     });

// });
