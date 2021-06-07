//"library" array contains all submitted books
let library = [];

//Book constructor function
function Book (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//Loops through "library" array and displays contents in HTML table
//For displaying existing books on page load
let table = document.getElementById("table");
function displayBooks(library){
    for (i = 0; i < library.length; i++){
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        cell1.innerHTML = library[i].title;
        cell2.innerHTML = library[i].author;
        cell3.innerHTML = library[i].pages;
        cell4.innerHTML = library[i].read;
        cell5.innerHTML = "<button></button";
    }
}
//Adds last "library" item to HTML table
function addBook(library){
    let pos = library.length - 1;
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = library[pos].title;
    cell2.innerHTML = library[pos].author;
    cell3.innerHTML = library[pos].pages;
    cell4.innerHTML = library[pos].read;
    cell5.innerHTML = "<button id=${`btn`+`pos`}> </button";
};

//Adds event listener to form
const form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
  
    //Checks if "already read" checkbox is checked, then assigns "yes" or "no"
    let checkbox = document.getElementById("read");
    let read = "";
    if(checkbox.checked === true){
         read = "Yes";
    }else{
         read = "No";
    }

    //Creates new Book object containing form values
    let book = new Book(
        document.getElementById("title").value, 
        document.getElementById("author").value, 
        document.getElementById("pages").value, 
        read
        );

    //Add "book" object to "library" array
    library.push(book);

    //Adds last "library" entry to HTML table
    addBook(library);

    //Clears form fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
});

displayBooks(library);



