//"library" array contains all submitted books
let library = [
    {
    title: "Add This Title",
    author: "JS Programmer",
    pages: 199,
    read: "Yes",
    },
    {
    title: "This Title Too",
    author: "Writer of Books",
    pages: 99,
    read: "No",
    },    
];

//Book constructor function
function Book (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return title,"by",author,",",pages,"pages",",",read 
    }
}

//Loops through "library" array and displays contents in HTML table
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
    cell5.innerHTML = "<button></button";
}

//Adds event listener to form
const form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    //Gets data from form fields and assigns to variables
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let checkbox = document.getElementById("read");
    let bookRead = "";
    
    //Checks if "already read" checkbox is checked, then assigns "yes" or "no"
    if(checkbox.checked === true){
         bookRead = "Yes";
    }else{
         bookRead = "No";
    }

    //Initialize an empty object named "data"
    let data = {
        title: title,
        author: author,
        pages: pages,
        read: bookRead,
    };

    //Add "data" object to "library" array
    library.push(data);

    //Adds last "library" entry to HTML table
    addBook(library);

    //Clears form fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
});

displayBooks(library);



