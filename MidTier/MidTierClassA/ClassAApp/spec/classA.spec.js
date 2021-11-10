let request= require("request");
const base_url= "http://localhost:3021/";
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
});


describe("Wrong URL returns error", () =>{
	it("returns status code 404", (done) => {
		request.get(base_url+'wrongURL', (error, response, body) => {
			expect(response.statusCode).toBe(404);
			done();
		});
	});
});
