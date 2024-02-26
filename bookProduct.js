

let books= [];

let book1 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12,
    code: "4.1.shelf"
};

let book2 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 15,
    code: "3.5.shelf"
};

let book3 = {
    title: "1984",
    author: "George Orwell",
    price: 10,
    code: "1.3.shelf"
};

let book4 = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 13,
    code: "2.4.shelf"
};

let book5 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 8,
    code: "5.2.shelf"
};

books.push(book1);
books.push(book2);
books.push(book3);
books.push(book4);
books.push(book5);



let shelf11={ code : "1.1.shelf",rendered : false}
let shelf12={ code : "1.2.shelf",rendered : false}
let shelf13={ code : "1.3.shelf",rendered : false}
let shelf14={ code : "1.4.shelf",rendered : false}
let shelf15={ code : "1.5.shelf",rendered : false}
//////////////////////////////////////////////////
let shelf21={ code : "2.1.shelf",rendered : false}
let shelf22={ code : "2.2.shelf",rendered : false}
let shelf23={ code : "2.3.shelf",rendered : false}
let shelf24={ code : "2.4.shelf",rendered : false}
let shelf25={ code : "2.5.shelf",rendered : false}
//////////////////////////////////////////////////
let shelf31={ code : "3.1.shelf",rendered : false}
let shelf32={ code : "3.2.shelf",rendered : false}
let shelf33={ code : "3.3.shelf",rendered : false}
let shelf34={ code : "3.4.shelf",rendered : false}
let shelf35={ code : "3.5.shelf",rendered : false}
//////////////////////////////////////////////////
let shelf41={ code : "4.1.shelf",rendered : false}
let shelf42={ code : "4.2.shelf",rendered : false}
let shelf43={ code : "4.3.shelf",rendered : false}
let shelf44={ code : "4.4.shelf",rendered : false}
let shelf45={ code : "4.5.shelf",rendered : false}
//////////////////////////////////////////////////
let shelf51={ code : "5.1.shelf",rendered : false}
let shelf52={ code : "5.2.shelf",rendered : false}
let shelf53={ code : "5.3.shelf",rendered : false}
let shelf54={ code : "5.4.shelf",rendered : false}
let shelf55={ code : "5.5.shelf",rendered : false}



let shelves = [
    [shelf11,shelf12,shelf13,shelf14,shelf15],
    [shelf21,shelf22,shelf23,shelf24,shelf25],
    [shelf31,shelf32,shelf33,shelf34,shelf35],
    [shelf41,shelf42,shelf43,shelf44,shelf45],
    [shelf51,shelf52,shelf53,shelf54,shelf55]];

shelves = shelves.reverse();

    let line="";
createShelf();

function createShelf(){
    console.clear();
    for(let i=0 ; i<shelves.length ; i++){
        for(let j=0;j<shelves[i].length ; j++){
            line+="| "+(shelves[i][j].rendered? shelves[i][j].code :"---") +" ";
        }
        console.log(line);
        console.log("-----------------------------");
        line="";
    }
}


let x = "\r\n";

let SelectedBook = prompt("Enter book title"+x+x+ 
"1-) To Kill a Mockingbird"+x+
"2-) The Great Gatsby"+x+
"3-) 1984"+x+
"4-) The Catcher in the Rye"+x+
"5-) Pride and Prejudice"


);

books.forEach(book =>{
    if(book.title.toUpperCase().includes(SelectedBook.toUpperCase(),0)){
        ShowBook(book.code);
    }
}); 

function ShowBook(code){
    for(let a =0 ; a<shelves.length;a++){
        for(let b=0; b<5;b++){
           if(shelves[a][b].code==code){
            shelves[a][b].rendered=true;
            createShelf();
        }
    
        }
    }
}

