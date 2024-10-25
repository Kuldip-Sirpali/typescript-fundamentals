var score = 33;
score = "12";
//union type
var me = { name: "k", id: 123 };
me = { username: "kk", id: 124 };
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array
var data1 = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
var seatAllotment;
// seatAllotment = "crew"; not possible
