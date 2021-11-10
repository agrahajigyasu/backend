let request = require("request");
let laptops = require("../modules/laptops");

describe("Unit tests on laptops module", () => {
    describe("load all teams", () => {
        it("have more than ten elements", () => {
            let results = laptops.teamList();
            expect(results.membersNames.length).toBeGreaterThan(10);
        });

        it('check first member name', ()=> {
            let results = laptops.teamList();
            expect(results.membersNames[0]).toBe('Aakash Gopal Vachhani');
        });
    });

    describe("load all products with India as location", () => {
        it("have more than two elements", () => {
            let results = laptops.priceList('India');
            expect(results.length).toBeGreaterThan(2);
        });
        
        it("check first product", () => {
            let results = laptops.priceList('India');
            expect(results[0].brand).toBe('Lenovo');
            expect(results[0].price).toBeGreaterThan(325.09);
        });
    });

    describe("load all products with USA as location", () => {
        it("have more than two elements", () => {
            let results = laptops.priceList('USA');
            expect(results.length).toBeGreaterThan(2);
        });
        
        it("check first product", () => {
            let results = laptops.priceList('USA');
            expect(results[0].brand).toBe('Lenovo');
            expect(results[0].price).toBeGreaterThan(325.09);
        });
    });

    describe("wrong Location given", () => {
        it("should be null", () => {
            let results = laptops.priceList('Germany');
            expect(results).toBeNull();
        });
    });
});