// const colors = ["red", "green", "blue"];
// const[first,second]=colors;
// //first is "red", and second will be "green"
// console.log(first);
// console.log(second);

// const a=[1,2]
// // const b=[3,4]

// // const all=[...a,...b]
// // console.log(all);

// const newarray=[...a,"x","y","z"]
// console.log(newarray);

// const product={
//     name:"mouse",
//     price:700
// }
// const updated_product={
//     ...product,
//     price:699
// }
// console.log(updated_product)


// function addNumbers(...num){
//     console.log(num)
// }
// addNumbers(10,20,30,40)

{/* <h1 id="title">Hello</h1>
const title= document.getElementById("Title")
title.textContent("Welcome") */}

// const li= document.createElement("li")
// li.testContent="xyz"
// list.appendChild(li)

let list = document.getElementById("playingxi");

let addButton = document.getElementById("addItem");
let deleteButton = document.getElementById("deleteItem");

addButton.addEventListener("click", function() {
    let item = document.createElement("li");
    item.textContent = "Virat Kohli";
    list.appendChild(item);
}

);

deleteButton.addEventListener("click", function() {
    list.removeChild(list.firstElementChild);
});




