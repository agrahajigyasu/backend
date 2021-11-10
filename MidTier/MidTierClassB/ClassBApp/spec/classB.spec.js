let request = require("request");

const base_url = "http://localhost:3022";
const classB = "/classB";

const urls = {
    books: "/bookservice",
    dvds: "/dvdservice",
    laptops: "/laptopservice"
};

console.log("Starting test");

describe("Class B services are working", () => {
    describe("GET /", () => {
        it("returns status code 200", (done) => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("returns status code 404", (done) => {
            request.get(base_url + '/wrongURL', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    describe("Responds for books requests", function () {
        describe("GET /all/India", () => {
            const books_url = base_url + classB + '/bookservice/all/India';
            it("contains title", (done) => {
                request.get(contacts_url, (error, response, body) => {
                    expect(body).toBeTruthy();
                    expect(body).toContain("Title");
                    done();
                });
            });
        });
    });
});