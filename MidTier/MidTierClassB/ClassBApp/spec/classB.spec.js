let request = require("request");

const base_url = require("./../../../urls").classBurl;
const classB = "/classB";

const urls = {
    books: base_url + classB + "/bookservice",
    dvds: base_url + classB + "/dvdservice",
    laptops: base_url + classB + "/laptopservice"
};

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
            const url = urls.books + '/all/India';

            it("responds with 200 status", (done) => {
                request.get(url, (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
            });

            it("contains title", (done) => {
                request.get(url, (error, response, body) => {
                    expect(body).toBeTruthy();
                    expect(body).toContain("Title");
                    done();
                });
            });

            it("contains atleast 2 books", (done) => {
                request.get(url, (error, response, body) => {
                    const books = JSON.parse(body);
                    expect(books.length).toBeGreaterThan(2);
                    done();
                });
            });
        });

        describe("GET /all/USA", () => {
            const url = urls.books + '/all/USA';

            it("responds with 200 status", (done) => {
                request.get(url, (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
            });

            it("contains title", (done) => {
                request.get(url, (error, response, body) => {
                    expect(body).toBeTruthy();
                    expect(body).toContain("Title");
                    done();
                });
            });

            it("contains atleast 2 books", (done) => {
                request.get(url, (error, response, body) => {
                    const books = JSON.parse(body);
                    expect(books.length).toBeGreaterThan(2);
                    done();
                });
            });
        });

        describe("GET /team", () => {
            const teams_url = urls.books + '/team';

            it("responds with 200 status", (done) => {
                request.get(teams_url, (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
            });

            it("contains team name", (done) => {
                request.get(teams_url, (error, response, body) => {
                    expect(body).toBeTruthy();
                    expect(body).toContain("Team Bradman");
                    done();
                });
            });
        });
    });

    describe("Responds for dvds requests", function () {
        describe("GET /all/India", () => {
            const url = urls.dvds + '/all/India';

            it("responds with 200 status", (done) => {
                request.get(url, (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
            });

            it("contains title", (done) => {
                request.get(url, (error, response, body) => {
                    expect(body).toBeTruthy();
                    expect(body).toContain("title");
                    done();
                });
            });

            it("contains atleast 2 dvds", (done) => {
                request.get(url, (error, response, body) => {
                    const dvds = JSON.parse(body);
                    expect(dvds.length).toBeGreaterThan(2);
                    done();
                });
            });
        });

        describe("GET /all/USA", () => {
            const url = urls.dvds + '/all/USA';

            it("responds with 200 status", (done) => {
                request.get(url, (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
            });

            it("contains title", (done) => {
                request.get(url, (error, response, body) => {
                    expect(body).toBeTruthy();
                    expect(body).toContain("title");
                    done();
                });
            });

            it("contains atleast 2 dvds", (done) => {
                request.get(url, (error, response, body) => {
                    const dvds = JSON.parse(body);
                    expect(dvds.length).toBeGreaterThan(2);
                    done();
                });
            });
        });

        describe("GET /team", () => {
            const teams_url = urls.dvds + '/team';

            it("responds with 200 status", (done) => {
                request.get(teams_url, (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
            });

            it("contains team name", (done) => {
                request.get(teams_url, (error, response, body) => {
                    expect(body).toBeTruthy();
                    expect(body).toContain("Team Bradman");
                    done();
                });
            });
        });
    });

    describe("Responds for laptops requests", function () {
        describe("GET /all/India", () => {
            const url = urls.laptops + '/all/India';

            it("responds with 200 status", (done) => {
                request.get(url, (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
            });

            it("contains product", (done) => {
                request.get(url, (error, response, body) => {
                    expect(body).toBeTruthy();
                    expect(body).toContain("product");
                    done();
                });
            });

            it("contains atleast 2 laptops", (done) => {
                request.get(url, (error, response, body) => {
                    const laptops = JSON.parse(body);
                    expect(laptops.length).toBeGreaterThan(2);
                    done();
                });
            });
        });

        describe("GET /all/USA", () => {
            const url = urls.laptops + '/all/USA';

            it("responds with 200 status", (done) => {
                request.get(url, (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
            });

            it("contains product", (done) => {
                request.get(url, (error, response, body) => {
                    expect(body).toBeTruthy();
                    expect(body).toContain("product");
                    done();
                });
            });

            it("contains atleast 2 laptops", (done) => {
                request.get(url, (error, response, body) => {
                    const laptops = JSON.parse(body);
                    expect(laptops.length).toBeGreaterThan(2);
                    done();
                });
            });
        });

        describe("GET /team", () => {
            const teams_url = urls.laptops + '/team';

            it("responds with 200 status", (done) => {
                request.get(teams_url, (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
            });

            it("contains team name", (done) => {
                request.get(teams_url, (error, response, body) => {
                    expect(body).toBeTruthy();
                    expect(body).toContain("Team Bradman");
                    done();
                });
            });
        });
    });

});