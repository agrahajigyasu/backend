let request= require("request");
const base_url= "http://localhost:3022/";
console.log("Starting test");



describe("Class B services are working", () =>{
    describe("GET /", () =>{
        it("returns status code 200", (done) => {
        request.get(base_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
        });
        });

    });
    });



    /*
    describe("Wrong URL returns error", () =>{
        it("returns status code 404", (done) => {
        request.get(base_url+'wrongURL', (error, response, body) => {
        expect(response.statusCode).toBe(404);
        done();
        });
        });

        it("returns list of valid URLs", (done) =>{
        request.get(base_url+'wrongURL', (error, response, body) =>{
        result= JSON.parse(body);
        expect(result.URLs.length).toBeGreaterThan(2);
        expect(result.URLs[1]).toBe('/Laptops/all/:location');
        done();
        });
    });
});
*/