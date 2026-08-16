import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import request from "supertest";

import app from "../src/app.js";
import { connectDB } from "../src/db/db.js";

before(async () => {
    await connectDB();
});

test("GET /api/todo returns todos", async () => {
    const response = await request(app)
        .get("/api/todo");

    assert.equal(response.statusCode, 200);
    assert.ok(Array.isArray(response.body.data));
});

test("POST /api/todo creates a todo", async () => {
    const response = await request(app)
        .post("/api/todo")
        .send({
            title: "Test todo",
            description: "This is a test todo"
        });

    assert.equal(response.statusCode, 201);
    assert.equal(response.body.data.title, "Test todo");
});

test("POST /api/todo rejects invalid data", async () => {
    const response = await request(app)
        .post("/api/todo")
        .send({});

    assert.equal(response.statusCode, 400);
});