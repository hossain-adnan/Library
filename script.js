const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return (title + ' ' + 'by ' + author + ', ' + pages + ' pages' + ', ' + read)
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary('Kitab At Tawhid', 'Imam Abdul Wahhab', 300, 'Not read');
addBookToLibrary('Usul As Thalatha', 'Imam Abdul Wahhab', 100, 'Read');

console.log(myLibrary);