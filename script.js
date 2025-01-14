const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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

    myLibrary.forEach( (book, index) => {

        const bookCard = document.createElement('div');
        const bookTitle = document.createElement('p');
        const removeBtn = document.createElement('button');
        const author = document.createElement('p');
        const pageNumber = document.createElement('p');
        const statusBtn = document.createElement('button');

        bookCard.classList.add('bookCard');
        bookTitle.classList.add('bookTitle');
        author.classList.add('author');
        pageNumber.classList.add('pageNumber');
        statusBtn.classList.add('statusBtn');
        removeBtn.classList.add('removeBtn');
    
        bookTitle.textContent = `Title: ${book.title}`;
        author.textContent = `Author: ${book.author}`;
        pageNumber.textContent = `Pages: ${book.pages}`;
        statusBtn.textContent = book.read; //Need to toggle -in-> future
        removeBtn.textContent ='x';

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(author);
        bookCard.appendChild(pageNumber);
        bookCard.appendChild(statusBtn);
        bookCard.appendChild(removeBtn);

        //Data-attribute
        bookCard.dataset.index = index;
        console.log(`${bookTitle.textContent}: index ${ bookCard.dataset.index}`); //✅

        //Add them into the container
        container.appendChild(bookCard);
    })

}

// displayBooks();
// displayBooks();

//'New Book' button and submitting a dialog box

    const addBookBtn = document.querySelector('.addBook'); // New Book Button
    const bookDialog = document.querySelector('#book_dialog'); 
    const form = document.querySelector('#bookForm');

    //Click the button
    addBookBtn.addEventListener('click', () => {
        bookDialog.showModal();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        //Collect data
        const titleData = document.querySelector('#title').value;
        const authorData = document.querySelector('#author').value;
        const pageData = document.querySelector('#pages').value;
        const readData = document.querySelector('#read').checked ? 'read' : 'Not Read';

        addBookToLibrary(titleData, authorData, pageData, readData);
        
        bookDialog.close();
        form.reset();

        displayBooks();

        //Remove Button
        const removeBtn = document.querySelectorAll('.removeBtn');
        console.log(removeBtn);

        removeBtn.forEach(button => {
            button.addEventListener('click', () => {
                const bookCard = button.closest('.bookCard');
                const index = Number(bookCard.dataset.index);
                myLibrary.splice(index, 1);
                displayBooks();
                // console.log(`After remove - ${bookTitle.textContent}: index ${ bookCard.dataset.index}`);
                console.log(myLibrary);
            })
        })
    })

    const cancelBtn = document.querySelector('#cancelDialog');
    cancelBtn.addEventListener('click', () => {
        bookDialog.close();
        form.reset();
    })



