

let books= [];

let book1 = {
    title:"İnsan Ne ile Yaşar",
    author:"Tolstoy",
    price:20,
    code : "4.1.RAF"
}

let book2={
    title:"Hiçbir Karşılaşma Tesadüf Değildir",
    author:"Hakan Mengüç",
    price: 58,
    code : "3.5.RAF"
}

let book3={
    title:"Hayat Kaybettiğin Yerden Başlar",
    author:"Miraç Çağrı Aktaş",
    price :27,
    code : "1.3.RAF"
}

let book4 = {
    title:"Her Şeyi Düşünme",
    author : "Anne Bogel",
    price:34,
    code: "1.4.RAF"
}

let book5 ={
    title:"Dikili İlişkiler",
    author:"Haluk Tatar",
    price:17,
    code : "4.2.RAF"
}
books.push(book1);
books.push(book2);
books.push(book3);
books.push(book4);
books.push(book5);


let raf11={ code : "1.1.RAF",rendered : false}
let raf12={ code : "1.2.RAF",rendered : false}
let raf13={ code : "1.3.RAF",rendered : false}
let raf14={ code : "1.4.RAF",rendered : false}
let raf15={ code : "1.5.RAF",rendered : false}

let raf21={ code : "2.1.RAF",rendered : false}
let raf22={ code : "2.2.RAF",rendered : false}
let raf23={ code : "2.3.RAF",rendered : false}
let raf24={ code : "2.4.RAF",rendered : false}
let raf25={ code : "2.5.RAF",rendered : false}

let raf31={ code : "3.1.RAF",rendered : false}
let raf32={ code : "3.2.RAF",rendered : false}
let raf33={ code : "3.3.RAF",rendered : false}
let raf34={ code : "3.4.RAF",rendered : false}
let raf35={ code : "3.5.RAF",rendered : false}

let raf41={ code : "4.1.RAF",rendered : false}
let raf42={ code : "4.2.RAF",rendered : false}
let raf43={ code : "4.3.RAF",rendered : false}
let raf44={ code : "4.4.RAF",rendered : false}
let raf45={ code : "4.5.RAF",rendered : false}

let raf51={ code : "5.1.RAF",rendered : false}
let raf52={ code : "5.2.RAF",rendered : false}
let raf53={ code : "5.3.RAF",rendered : false}
let raf54={ code : "5.4.RAF",rendered : false}
let raf55={ code : "5.5.RAF",rendered : false}



let raflar = [
    [raf11,raf12,raf13,raf14,raf15],
    [raf21,raf22,raf23,raf24,raf25],
    [raf31,raf32,raf33,raf34,raf35],
    [raf41,raf42,raf43,raf44,raf45],
    [raf51,raf52,raf53,raf54,raf55]];

raflar = raflar.reverse();

    let satir="";
raflariOlustur();

function raflariOlustur(){
    console.clear();
    for(let i=0 ; i<raflar.length ; i++){
        for(let j=0;j<raflar[i].length ; j++){
            satir+="| "+(raflar[i][j].rendered? raflar[i][j].code :"---") +" ";
        }
        console.log(satir);
        console.log("-------------------------");
        satir="";
    }
}



let secilenKitap = prompt("Kitap ismi giriniz");

books.forEach(book =>{
    if(book.title.toUpperCase().includes(secilenKitap.toUpperCase(),0)){
        kitabiGoster(book.code);
    }
}); 

function kitabiGoster(code){
    for(let a =0 ; a<raflar.length;a++){
        for(let b=0; b<5;b++){
           if(raflar[a][b].code==code){
            raflar[a][b].rendered=true;
            raflariOlustur();
        }
    
        }
    }
}

