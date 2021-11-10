let request = require("request");
let dvds = require("../modules/dvd");

describe("Unit tests on dvds module", () => {
    describe("load all dvds", () => {
        //positive test to load all dvds
        it("have two elements", () => {
            let results = dvds.list();
            expect(results.length).toBe(4);
        });
        
    });

    describe("load taxed dvds", () => {
        it("with price of 19.94", () => {
            let results = dvds.get_taxed_dvds(0.075);
            expect(results[0].price).toBe(19.94);
        });
        
        it("with price of 20.03", () => {
            let results = dvds.get_taxed_dvds(0.08);
            expect(results[0].price).toBe(20.03);
        });

        it("with -1 on negative sales tax", () => {
            let results = dvds.get_taxed_dvds(-0.1);
            expect(results).toBe(-1);
        });
    });
});