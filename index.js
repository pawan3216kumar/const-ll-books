function Book(title , author , genre , price){
    this.title = title
    this.author = author
    this.genre = genre
    this.price = price
}


function Author(name , birthYear , nationality){
  this.name = name
  this.birthYear = birthYear
  this.nationality = nationality

}




let details1 = new Book("Rich Dad Poor Dad" , "Robert kiyosaki"  , "Finance literacy" , 5000);
let details2 = new Book("The intelligent investor" , "warren waffet" ,"finance" , 2000 )
let authors = new Author("Robert" , 1948 , "Japan");

// console.log(details1)
// console.log(authors2)

let array = [details1 , details2]

array.forEach(function bookDetails(ele ){

    console.log(ele)

})

document.getElementById("demo").innerHTML = JSON.stringify(details1)


    


