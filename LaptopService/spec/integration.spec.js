let request= require("request");
const baseUrl= "http://localhost:3036/";
const teamUrl= baseUrl+ 'laptopservice/team/';
const locationUrl= baseUrl+ 'laptopservice/all/';
console.log("Starting test");

describe("All routes are working", () =>{
    describe("GET /laptopservice/team", () =>{
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

    describe("GET /laptopservice/all/", () =>{
        it("returns status code 200 for correct Parameters", (done) => {
            request.get(locationUrl+'India', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        }); 

        it("returns status code 400 for incorrect Parameters", (done) => {
            request.get(locationUrl+'Germany', (error, response, body) => {
                result= JSON.parse(body);
                expect(response.statusCode).toBe(400);
                expect(result.error).toBe("We only provide information for USA and India.");
                done();
            });
        }); 
        
        it("check result for India", (done) =>{
            request.get(locationUrl+'India', (error, response, body) =>{
                result= JSON.parse(body);
                expect(result.length).toBeGreaterThan(2);
                expect(result[0].price).toBeGreaterThan(325.09);
                done();
            });
        });
    });
});