// import 
import books from "./obj/book.js";
import members from "./obj/member.js";
import promptSync from "prompt-sync";
const prompt = promptSync();


// show books and search functions created. Can improve search function further for better ux

// main program
function main() {
    console.log("Welcome to the Library Program. Enter the number of the option you want to proceed with.\n");

    switch (showOptions()) {
        case 11:
            showBooks();
            break;
        case 12:
            searchBook();
            break;
        case 13:
            // borrowing operations
            break;
        case 14:
            // report and analytics
            break;
        case 15:
            // exit
            break;
        case 21:
            // code here
            break;
        case 22:
            // code here
            break;
        case 23:
            // code here
            break;
        case 24:
            // code here
            break;
        case 31:
            // code here
            break;
        case 32:
            // code here
            break;
        case 33:
            // code here
            break;
        case 34:
            // code here
            break;
        case 41:
            // code here
            break;
        case 42:
            // code here
            break;
        case 43:
            // code here
            break;
        case 44:
            // code here
            break;
        case 5:
            // code here
            break;
    }
}

main();

function showOptions() {
    let userSelect;
    console.log("[1]Book Operations (view, search, add)\n[2]Member Operations (register, view, search)\n[3]Borrowing Operations (checkout, return, renewals)\n[4]Reports and Analytics\n[5]Exit\n");
    userSelect = +prompt(">> ");

    switch (userSelect) {
        case 1:
            console.log("\n[1]View all books\n[2]Search books by title, author, or genre\n[3]Filter books by availability\n[4]Add new books to collection\n[5]Update book information\n");
            userSelect = +prompt(">> ");

            if (userSelect === 1) {
                return 11;
            }
            else if (userSelect === 2) {
                return 12
            }
            else if (userSelect === 3) {
                return 13
            }
            else if (userSelect === 4) {
                return 14
            }
            else if (userSelect === 5) {
                return 15
            }
            break;
        case 2:
            console.log("\n[1]Register new members\n[2]View member profiles\n[3]Search members by name or ID\n[4]View member borrowing history\n");
            userSelect = +prompt(">> ");

            if (userSelect === 1) {
                return 21;
            }
            else if (userSelect === 2) {
                return 22
            }
            else if (userSelect === 3) {
                return 23
            }
            else if (userSelect === 4) {
                return 24
            }
            break;
        case 3:
            console.log("\n[1]Checkout books to members\n[2]Return books and update availability\n[3]Calculate and display due dates\n[4]Handle overdue books with fine calculations\n");
            userSelect = +prompt(">> ");
            if (userSelect === 1) {
                return 31;
            }
            else if (userSelect === 2) {
                return 32
            }
            else if (userSelect === 3) {
                return 33
            }
            else if (userSelect === 4) {
                return 34
            }
            break;
        case 4:
            // report and analytics
            console.log("\n[1]Most borrowed books\n[2]Overdue items\n[3]Top borrowers\n[4]Members with most fines\n");
            userSelect = +prompt(">> ");

            if (userSelect === 1) {
                return 41;
            }
            else if (userSelect === 2) {
                return 42
            }
            else if (userSelect === 3) {
                return 43
            }
            else if (userSelect === 4) {
                return 44
            }
            break;
        case 5:
            return 5;
    }
}

function showBooks() {
    console.log(books);
    // can be formatted in the future
}

function searchBook() {
    const userBook = prompt("Enter book's title, author, or genre >> ").toLowerCase();

    for (let e of books) {
        if (userBook === e.title.toLowerCase()) {
            console.log(`Title: ${e.title}\nAuthor: ${e.author}\nAvailable Copies: ${e.availableCopies}\n`);
            return;
        }
        else if (userBook === e.author.toLowerCase()) {
            console.log(`Title: ${e.title}\nAuthor: ${e.author}\nAvailable Copies: ${e.availableCopies}\n`);
            return;
        }
        else if (userBook === e.genre.toLowerCase()) {
            console.log(`Title: ${e.title}\nAuthor: ${e.author}\nAvailable Copies: ${e.availableCopies}\n`);
            return;
        }
    }
}
