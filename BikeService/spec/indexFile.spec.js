let request= require("request");
const baseUrl= "http://localhost:3031/";
const teamUrl= baseUrl+ 'bikeservice/team/';
const bikeUrl= baseUrl+ 'bikeservice/all/';
console.log("Starting test");

describe("All routes are working", () =>{
    describe("GET /bikeservice/team", () =>{
        it("returns status code 200", (done) => {
            request.get(teamUrl, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        }); 
        
        it("check result for teams", (done) =>{
            request.get(teamUrl, (error, response, body) =>{
                result= JSON.parse(body);
                expect(result.membersNames.length).toBeGreaterThan(10);
                expect(result.membersNames[0]).toBe('Aakash Gopal Vachhani');
                done();
            });
        });
    });

    describe("GET /bikeservice/all/", () =>{
        it("returns status code 200 for correct Parameters", (done) => {
            request.get(bikeUrl+'India', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        }); 

        it("returns status code 404 for incorrect Parameters", (done) => {
            request.get(bikeUrl+'Germany', (error, response, body) => {
                result= JSON.parse(body);
                expect(response.statusCode).toBe(404);
                expect(result.error).toBe("We only provide information for USA and India.");
                done();
            });
        }); 
        
        it("check result for India", (done) =>{
            request.get(bikeUrl+'India', (error, response, body) =>{
                result= JSON.parse(body);
                expect(result.length).toBeGreaterThan(2);
                expect(result[1].price).toBe('1719.85');
                done();
            });
        });
    });
});