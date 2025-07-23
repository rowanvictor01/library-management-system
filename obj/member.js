const members = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        membershipDate: "2023-08-12",
        borrowedBooks: [1],
        borrowHistory: [
            { bookId: 1, borrowedOn: "2025-07-10", returnedOn: null }
        ]
    },
    {
        id: 2,
        name: "Brian Lee",
        email: "brian.lee@example.com",
        membershipDate: "2024-02-05",
        borrowedBooks: [2],
        borrowHistory: [
            { bookId: 2, borrowedOn: "2025-07-01", returnedOn: null }
        ]
    },
    {
        id: 3,
        name: "Catherine Torres",
        email: "catherine.torres@example.com",
        membershipDate: "2024-10-19",
        borrowedBooks: [2],
        borrowHistory: [
            { bookId: 2, borrowedOn: "2025-07-12", returnedOn: null }
        ]
    },
    {
        id: 4,
        name: "Daniel Martinez",
        email: "daniel.martinez@example.com",
        membershipDate: "2025-01-03",
        borrowedBooks: [4],
        borrowHistory: [
            { bookId: 4, borrowedOn: "2025-07-11", returnedOn: null }
        ]
    },
    {
        id: 5,
        name: "Emily Chen",
        email: "emily.chen@example.com",
        membershipDate: "2023-12-22",
        borrowedBooks: [5],
        borrowHistory: [
            { bookId: 5, borrowedOn: "2025-07-13", returnedOn: null }
        ]
    }
];


export default members;
