let request= require("request");
const urlList=require('./../../../urls');
//const base_url= "http://localhost:3021/";
const base_url = require("./../../../urls").classAurl + '/';
const teamUrl = base_url + 'classA/bikeservice/team/';
//const teamUrl = urlList.bikeurl + 'classA/bikeservice/team/';
const toyUrl = base_url + "classA/toyservice/all/";
//const toyUrl = urlList.toyurl + "/classA/toyservice/all/";
//const foodUrl = urlList.foodurl + "classA/foodservice/all/";
//const bikeUrl = urlList.bikeurl + 'classA/bikeservice/all/';
const bikeUrl = base_url + 'classA/bikeservice/all/';
const foodUrl =  base_url + "classA/foodservice/all/";
console.log("Starting test");



describe("Class A services are working", () =>{
	describe("GET /", () =>{
		it("returns status code 200", (done) => {
			request.get(base_url, (error, response, body) => {
				expect(response.statusCode).toBe(200);
				done();
			});
		});

	});

	describe("GET /classA/bikeservice/team", () =>{
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

		it("should have more than two elements for India", (done) => {
            request.get(bikeUrl+"India", (error, response, body) =>{
                result= JSON.parse(body);
                expect(result.length).toBeGreaterThan(2);
                expect(result[1].name).toBe('DJ Fat Bike 500W');
                done();
            });
        });

		it("should have more than two elements for USA", (done) => {
            request.get(bikeUrl+"USA", (error, response, body) =>{
                result= JSON.parse(body);
                expect(result.length).toBeGreaterThan(2);
                expect(result[1].name).toBe('DJ Fat Bike 500W');
                done();
            });
        });
	});

	describe("GET /classA/toyservice/all/", () =>{
        it("should have more than two elements for India", (done) => {
            request.get(toyUrl+"India", (error, response, body) =>{
                result= JSON.parse(body);
                expect(result.length).toBeGreaterThan(2);
                expect(result[1].name).toBe('Ferry Boat');
                done();
            });
        });

		it("should have more than two elements for USA", (done) => {
            request.get(toyUrl+"USA", (error, response, body) =>{
                result= JSON.parse(body);
                expect(result.length).toBeGreaterThan(2);
                expect(result[1].name).toBe('Ferry Boat');
                done();
            });
        });
	});

	describe("GET /classA/foodservice/all/", () =>{
        it("should have more than two elements for India", (done) => {
            request.get(foodUrl+"India", (error, response, body) =>{
                result= JSON.parse(body);
                expect(result.length).toBeGreaterThan(2);
                expect(result[1].name).toBe('Peanut Butter');
                done();
            });
        });

		it("should have more than two elements for USA", (done) => {
            request.get(foodUrl+"USA", (error, response, body) =>{
                result= JSON.parse(body);
                expect(result.length).toBeGreaterThan(2);
                expect(result[1].name).toBe('Peanut Butter');
                done();
            });
        });

	});
});


describe("Wrong URL returns error", () =>{
	it("returns status code 404", (done) => {
		request.get(base_url+'wrongURL', (error, response, body) => {
			expect(response.statusCode).toBe(404);
			done();
		});
	});
});
