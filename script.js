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

addBookToLibrary('Personal MBA', 'Josh', 300, 'Not read');
addBookToLibrary('Usul As Thalatha', 'Imam Abdul Wahhab', 100, 'Read');

console.log(myLibrary);

// Display books in the DOM
function displayBooks() {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    //create DOM elements
    myLibrary.forEach(book => {

        const bookCard = document.createElement('div');
        const bookTitle = document.createElement('p');
        const removeBtn = document.createElement('button');
        const author = document.createElement('p');
        const pageNumber = document.createElement('p');
        const statusBtn = document.createElement('button');
    
        //Add contents for DOM elements from the Object Array v1
        bookTitle.textContent = `Title: ${book.title}`;
        bookCard.appendChild(bookTitle);
        author.textContent = `Author: ${book.author}`;
        bookCard.appendChild(author);
        pageNumber.textContent = `Pages: ${book.pages}`;
        bookCard.appendChild(pageNumber);
        statusBtn.textContent = `${book.read}`; //Need to toggle -> future
        bookCard.appendChild(statusBtn);
        
        //Add them into the container
        container.appendChild(bookCard);

    })

}

displayBooks();
displayBooks();