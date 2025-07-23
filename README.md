# Library Management System

A command-line interface (CLI) library management system built with JavaScript. This project demonstrates core programming concepts including object manipulation, array operations, input validation, and complex business logic implementation.

## 📋 Project Overview

This library management system allows librarians to manage books, members, and borrowing operations through an intuitive command-line interface. The system handles book inventory, member registration, checkout/return processes, and generates various reports for library analytics.

## 🚀 Current Features

### ✅ Implemented
- **Menu System**: Multi-level navigation with organized options
- **Book Search**: Search books by title, author, or genre with case-insensitive matching
- **Data Structure**: Well-organized book and member objects with proper relationships

### 🔧 Core Data Models
- **Books**: ID, title, author, ISBN, genre, publication year, total/available copies, borrower tracking
- **Members**: ID, name, email, membership date, borrowed books, borrowing history

## 🏗️ Current Development Status

**Phase 1: Foundation** (In Progress)
- [x] Project structure setup
- [x] Menu navigation system
- [x] Basic book search functionality
- [ ] View all books
- [ ] Member registration
- [ ] Basic borrowing system

## 📦 Installation & Setup

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd library-management-system

# Install dependencies
npm install

# Run the application
node main.js
```

## 🎯 Planned Features

### Phase 2: Core Operations
- [ ] **Book Management**
  - [ ] View all books with availability status
  - [ ] Add new books to collection
  - [ ] Update book information
  - [ ] Filter books by availability
  
- [ ] **Member Management**
  - [ ] Register new members
  - [ ] View member profiles
  - [ ] Search members by name or ID
  - [ ] View member borrowing history

- [ ] **Borrowing System**
  - [ ] Check out books to members
  - [ ] Return books and update availability
  - [ ] Calculate due dates (14-day loan period)
  - [ ] Handle overdue books with fine calculations

### Phase 3: Advanced Features
- [ ] **Enhanced Search**
  - [ ] Partial matching support
  - [ ] Multiple search results display
  - [ ] Search result actions (borrow directly from search)
  
- [ ] **Business Logic**
  - [ ] Book reservation system
  - [ ] Member borrowing limits (max 3 books)
  - [ ] Book renewal system
  - [ ] Automated fine calculations

- [ ] **Reports & Analytics**
  - [ ] Most borrowed books
  - [ ] Overdue items tracking
  - [ ] Top borrowers identification
  - [ ] Member fine reports

### Phase 4: Enhancements
- [ ] **Data Persistence**
  - [ ] Save/load data from JSON files
  - [ ] Backup and restore functionality
  
- [ ] **User Experience**
  - [ ] Input validation improvements
  - [ ] Error handling enhancements
  - [ ] Better formatted output displays

## 🛠️ Technical Implementation

**Core Technologies:**
- Node.js
- JavaScript ES6+ features
- prompt-sync for CLI input handling

**Programming Concepts Demonstrated:**
- Object-oriented programming
- Array manipulation and filtering
- Loop structures (for...of, for...in)
- Switch statements and conditional logic
- Input validation and error handling
- Data relationships and referential integrity

## 📈 Learning Objectives

This project reinforces:
- Complex data structure management
- Business logic implementation
- User interface design (CLI)
- Input validation techniques
- Error handling strategies
- Code organization and modularity

## 🤝 Contributing

This is a learning project, but feedback and suggestions are welcome! Feel free to:
- Report bugs or issues
- Suggest feature improvements
- Share optimization ideas
- Provide code review feedback

## 📝 Development Notes

**Current Focus**: Building foundational features with basic functionality before implementing advanced enhancements.

**Architecture Decision**: Using hardcoded data arrays initially, with plans to implement file-based persistence in later phases.

**Code Style**: Emphasizing readability and maintainability over premature optimization.

## 📜 License

This project is created for educational purposes. Feel free to use, modify, and learn from the code.

---

**Status**: 🚧 Active Development  
**Last Updated**: July 24, 2025  
**Next Milestone**: Complete basic book and member viewing functionality
