use rooms;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "John Smith",
        email: "j.smith@email.com",
        checkedin: true,
    },
    {
        name: "Jane Doe",
        email: "j.doe@email.com",
        checkedin: false,
    },
    {
        name: "Harry Enfield",
        email: "stavros@hotmail.com",
        checkedin: true,
    }
]);