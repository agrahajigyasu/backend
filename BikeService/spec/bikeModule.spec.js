let request = require("request");
let bikes = require("../modules/bikes");
let team = require("../modules/team");

describe("Unit tests on bikes module", () => {
    describe("test bikes and teams", () => {
        it("have more than three elements", () => {
            let results = bikes.list();
            expect(results.length).toBeGreaterThan(3);
        });

        it('check third bike name', ()=> {
            let results = bikes.list();
            expect(results[2].name).toBe('Kobe Aluminum Balance');
        });
        it("have more than ten elements", () => {
            let results = team.list();
            expect(results.membersNames.length).toBeGreaterThan(10);
        });
        it('check first member name', ()=> {
            let results = team.list();
            expect(results.membersNames[0]).toBe('Aakash Gopal Vachhani');
        });
    });

    describe("load all bikes with India as location", () => {
        it("have more than two elements", () => {
            let results = bikes.add_tax('India');
            expect(results.length).toBeGreaterThan(2);
        });
        
        it("check second bike", () => {
            let results = bikes.add_tax('India');
            expect(results[1].name).toBe('DJ Fat Bike 500W');
            expect(results[1].price).toBe('1719.85');
        });
    });

    describe("load all bikes with USA as location", () => {
        it("have more than two elements", () => {
            let results = bikes.add_tax('USA');
            expect(results.length).toBeGreaterThan(2);
        });
        
        it("check second bike", () => {
            let results = bikes.add_tax('USA');
            expect(results[1].name).toBe('DJ Fat Bike 500W');
            expect(results[1].price).toBe('1727.85');
        });
    });

    describe("wrong Location given", () => {
        it("should be null", () => {
            let results = bikes.add_tax('Germany');
            expect(results).toBeNull();
        });
    });
});