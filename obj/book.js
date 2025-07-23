const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        isbn: "978-0-7432-7356-5",
        genre: "Fiction",
        publicationYear: 2004,
        totalCopies: 3,
        availableCopies: 2,
        borrowedBy: [1]
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert C. Martin",
        isbn: "978-0-13-235088-4",
        genre: "Programming",
        publicationYear: 2008,
        totalCopies: 5,
        availableCopies: 3,
        borrowedBy: [2, 3]
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        isbn: "978-0-452-28423-4",
        genre: "Dystopian",
        publicationYear: 1950,
        totalCopies: 4,
        availableCopies: 4,
        borrowedBy: []
    },
    {
        id: 4,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt and David Thomas",
        isbn: "978-0-2016-1622-4",
        genre: "Programming",
        publicationYear: 1999,
        totalCopies: 2,
        availableCopies: 1,
        borrowedBy: [4]
    },
    {
        id: 5,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isbn: "978-0-06-112008-4",
        genre: "Fiction",
        publicationYear: 2006,
        totalCopies: 3,
        availableCopies: 2,
        borrowedBy: [5]
    }
];


export default books;
