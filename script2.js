
//Book constructor FUNCTION
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Add book as object FUNCTION
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Display books in the DOM FUNCTION
function displayBooks() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    // Iterate over each book object in the array 
    myLibrary.forEach( (book, index) => {
        // Create DOM element
        const bookCard = document.createElement('div');
        const bookTitle = document.createElement('p');
        const removeBtn = document.createElement('button');
        const author = document.createElement('p');
        const pageNumber = document.createElement('p');
        const statusBtn = document.createElement('button');
        // Add class
        bookCard.classList.add('bookCard');
        bookTitle.classList.add('bookTitle');
        author.classList.add('author');
        pageNumber.classList.add('pageNumber');
        statusBtn.classList.add('statusBtn');
        removeBtn.classList.add('removeBtn');
        // Set the content from each book obj
        bookTitle.textContent = `Title: ${book.title}`;
        author.textContent = `Author: ${book.author}`;
        pageNumber.textContent = `Pages: ${book.pages}`;
        statusBtn.textContent = book.read; 
        removeBtn.textContent ='x';
        // Append to the card
        bookCard.appendChild(removeBtn);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(author);
        bookCard.appendChild(pageNumber);
        bookCard.appendChild(statusBtn);

        //Data-attribute
        bookCard.dataset.index = index;
        console.log(`${bookTitle.textContent}: index ${ bookCard.dataset.index}`); //✅
        //Add them into the container
        container.appendChild(bookCard);
    })
}

const myLibrary = [];

// display a dialog form to collect data for a new book
const addBookBtn = document.querySelector('.addBook'); // New Book Button
const bookDialog = document.querySelector('#book_dialog'); // Dialog box
const form = document.querySelector('#bookForm'); // Form

//Show the dialog box when 'New Book' button is clicked
addBookBtn.addEventListener('click', () => {
    bookDialog.showModal();
});

//2.Collect that data and make an object and add to that array
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //Collect data
    const titleData = document.querySelector('#title').value;
    const authorData = document.querySelector('#author').value;
    const pageData = document.querySelector('#pages').value;
    const readData = document.querySelector('#read').checked ? 'Read' : 'Not Read';

    addBookToLibrary(titleData, authorData, pageData, readData);
    
    bookDialog.close();
    form.reset();

    //3. from that array take each object's value and display it
    displayBooks();
})

//Cancel Button 
const cancelBtn = document.querySelector('#cancelDialog');
cancelBtn.addEventListener('click', () => {
    bookDialog.close();
    form.reset();
})


// 	4. Show a remove btn and when it's clicked ->
// 	Remove the card from the display & its original object from the array

    //Select the container
    const container = document.querySelector('.container');

    // When anything inside is clicked
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('removeBtn')) {
            const bookCard = e.target.closest('.bookCard');
            const index = bookCard.dataset.index;

            myLibrary.splice(index, 1);
            displayBooks();
        }

        if (e.target.classList.contains('statusBtn')) {
            const bookCard = e.target.closest('.bookCard');
            const index = bookCard.dataset.index;

            myLibrary[index].changeReadStatus();
            displayBooks();
        }
    })
        //IF the the target has a class of removeBtn
            // Get the data.index of closest Book Card
            // Remove item of that index from the array
            // Display the updated DOM

// Toggle read status
    //Set a method to the Book constructor
            // It changes this.read = read or unread
            // Update the DOM
    Book.prototype.changeReadStatus = function () {
        if (this.read === 'Read') {
            this.read = 'Not Read';
        } else {
            this.read = 'Read'
        }
    }

    addBookToLibrary('Personal MBA', 'Josh', 300, 'Not read');
    addBookToLibrary('Usul As Thalatha', 'Imam Abdul Wahhab', 100, 'Read');
    displayBooks()
