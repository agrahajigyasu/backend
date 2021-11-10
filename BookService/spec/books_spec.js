const request = require("request");

const base_url = 'http://localhost:3034/';
const contacts_url = base_url + 'bookservice';



describe("First Node Test Server", function () {
    describe("GET /books", () => {
        it("returns status code 200",  (done) => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains title", (done) => {
            request.get(contacts_url, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Title");
                done();
            });
        });
    });
    // test for wrong path and expect 404
    describe("GET /boooooooks", () => {
        // accessing wrong path
        it("returns status code 404",  (done) => {
            request.get(base_url + "booooooooks", (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });

        
        it("returns list of valid URLs", (done) =>{
            request.get(base_url+'wrongURL', (error, response, body) =>{
                result= JSON.parse(body);
                expect(result.URLs.length).toBeGreaterThan(2);
                expect(result.URLs[1]).toBe('/bookservice/all/:location');
                done();
            });
        });

    });
});