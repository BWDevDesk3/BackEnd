const Helpers = require("./helpers-model.js");
const db = require("../database/dbConfig");
const request = require("supertest");
const server = require("../api/server.js");
describe("Helpers-Model", function() {
    beforeEach(async() => {
        await db("helpers").truncate();
    });
    describe("Environment", function() {
        it("run in test env", function() {
            expect(process.env.DB_ENV).toBe("testing");
        });
    });
    describe("Helpers-Model insert", function() {
        it("adds the Helper", async function() {
            await Helpers.add({ username: "test", password: "Password" });
            const helpers = await db("helpers");
            expect(helpers).toHaveLength(1);
        });
    });
    describe("Get Helpers", function() {
        it("Retruns 200:OK", async function() {
            await request(server)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    });
});