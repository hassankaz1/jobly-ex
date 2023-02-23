const { sqlForPartialUpdate } = require("./sql");


describe("sqlForPartialUpdate", function () {
    test("updates 1 item", function () {
        const result = sqlForPartialUpdate(
            { to_change: "new value" },
            { to_change: "old value", same: "same" });
        expect(result).toEqual({
            setCols: "\"old value\"=$1",
            values: ["new value"],
        });
    });

    test("updates 2 items", function () {
        const result = sqlForPartialUpdate(
            { to_change: "new val", second: "second" },
            { unchanged: "unchanged" });
        expect(result).toEqual({
            setCols: "\"to_change\"=$1, \"second\"=$2",
            values: ["new val", "second"],
        });
    });
});
