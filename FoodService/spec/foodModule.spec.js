let request = require("request");
let food = require("../modules/food");

describe("Unit tests on food module", () => {
    describe("load all teams", () => {
        it("have more than ten elements", () => {
            let results = food.teamList();
            expect(results.membersNames.length).toBeGreaterThan(10);
        });

        it('check first member name', ()=> {
            let results = food.teamList();
            expect(results.membersNames[0]).toBe('Aakash Gopal Vachhani');
        });
    });

    describe("load all products with India as location", () => {
        it("have more than two elements", () => {
            let results = food.priceList('India');
            expect(results.length).toBeGreaterThan(2);
        });
        
        it("check first product", () => {
            let results = food.priceList('India');
            expect(results[0].brand).toBe('Oreo');
            expect(results[0].price).toBeGreaterThan(2.85);
        });
    });

    describe("load all products with USA as location", () => {
        it("have more than two elements", () => {
            let results = food.priceList('USA');
            expect(results.length).toBeGreaterThan(2);
        });
        
        it("check first product", () => {
            let results = food.priceList('USA');
            expect(results[0].brand).toBe('Oreo');
            expect(results[0].price).toBeGreaterThan(2.85);
        });
    });

    describe("wrong Location given", () => {
        it("should be null", () => {
            let results = food.priceList('Germany');
            expect(results).toBeNull();
        });
    });
});