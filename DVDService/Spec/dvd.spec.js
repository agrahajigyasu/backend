const request = require("request");

const base_url = 'http://localhost:3035/';
const all_url = base_url + 'dvdservice/all/';
const team_url = base_url + 'dvdservice/team/';

describe("First Node Test Server", function () {
    describe("GET /all/USA", () => {
        it("returns status code 200",  (done) => {
            request.get(all_url + "USA", (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains correct price change", (done) => {
            request.get(all_url + "USA", (error, response, body) => {
                expect(body).toBeTruthy();
                bodyList = JSON.parse(body);
                expect(bodyList[0].price).toBeGreaterThan(18);
                console.log(bodyList);
                done();
            });
        });
    });

    describe("GET /all/India", () => {
        it("returns status code 200",  (done) => {
            request.get(all_url + "India", (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains correct price change", (done) => {
            request.get(all_url + "India", (error, response, body) => {
                expect(body).toBeTruthy();
                bodyList = JSON.parse(body);
                console.log(bodyList);
               expect(bodyList[0].price).toBeGreaterThan(18);
                
                done();
            });
        });
    });

    // test for wrong path and expect 404
    describe("GET /all/India", () => {
        // accessing wrong path
        it("returns status code 404",  (done) => {
            request.get(all_url + "Ind", (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    describe("GET /team", () => {
        it("returns status code 200",  (done) => {
            request.get(team_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains correct price change", (done) => {
            request.get(team_url, (error, response, body) => {
                expect(body).toBeTruthy();
                done();
            });
        });
    });

});