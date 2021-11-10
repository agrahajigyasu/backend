let request = require("request");
let laptops = require("../modules/books");
let teams=require("../modules/team");

describe("Unit tests on books module", () => {
    describe("load all teams", () => {
        it("have more than ten elements", () => {
            let results = teams.list();
            expect(results.membersNames.length).toBeGreaterThan(5);
        });

        it('check first member name', ()=> {
            let results = teams.list();
            expect(results.membersNames[0]).toBe('Aakash Gopal Vachhani');
        });
    });

    describe("load all products with India as location", () => {
        it("have more than two elements", () => {
            let results = laptops.list('India');
            expect(results.length).toBeGreaterThan(2);
        });
        
        it("check first product", () => {
            let results = laptops.list('India');
            expect(results[0].ISBN).toBe('9780261102385');
            
        });
    });

    describe("load all products with USA as location", () => {
        it("have more than two elements", () => {
            let results = laptops.list('USA');
            expect(results.length).toBeGreaterThan(2);
        });
        
        it("check first product", () => {
            let results = laptops.list('USA');
            expect(results[0].ISBN).toBe('9780261102385');
            expect(results[0].price).toBe(25.99);
        });
    });

    
});