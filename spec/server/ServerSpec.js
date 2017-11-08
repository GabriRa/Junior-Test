var request = require("request");
var base_url = "http://localhost:3000/";

describe("Server running", () => {

    describe("GET Files", () => {

        it("Can access index.html", () => {
            request(base_url + "index.html", (err, response, body) =>{
                expect(response.statusCode).toBe(200);
                done();
            })
        })
        it("Can access app.js", () => {
            request(base_url + "script/app.js", (err, response, body) =>{
                expect(response.statusCode).toBe(200);
                done();
            })
        })
        it("Can access index.css", () => {
            request(base_url + "style/index.css", (err, response, body) =>{
                expect(response.statusCode).toBe(200);
                done();
            })
        })

    })

});