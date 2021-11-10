let request = require("request");
let toys = require("../modules/toys");

describe("Unit tests on toys module", () => {
    describe("load all teams", () => {
        it("have more than ten elements", () => {
            let results = toys.teamList();
            expect(results[0].membersNames.length).toBeGreaterThan(10);
        });

        it('check first member name', ()=> {
            let results = toys.teamList();
            expect(results[0].membersNames[0]).toBe('Aakash Gopal Vachhani');
        });
    });

    describe("load all products with India as location", () => {
        it("have more than two elements", () => {
            let results = toys.priceList('India');
            expect(results.length).toBeGreaterThan(2);
        });
        
        it("check first product", () => {
            let results = toys.priceList('India');
            expect(results[0].brand).toBe('Fisher-Price');
            //expect(results[0].price).toBe(349.47175);
        });
    });

    describe("load all products with USA as location", () => {
        it("have more than two elements", () => {
            let results = toys.priceList('USA');
            expect(results.length).toBeGreaterThan(2);
        });
        
        it("check first product", () => {
            let results = toys.priceList('USA');
            expect(results[0].brand).toBe('Fisher-Price');
            //expect(results[0].price).toBe(351.0972);
        });
    });

    describe("wrong Location given", () => {
        it("should be null", () => {
            let results = toys.priceList('Germany');
            expect(results).toBeNull();
        });
    });
});