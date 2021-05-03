// create an empty array 
// initialize and name empty array 
// select the button and add an event listener 
// in the function, select the input box and the value of the input box
// push the value into the array 
// then call the update function 
// update function will take the value and add a paragraph button and text Node, 
// add it to the entire to do list 

let toDoListItems = [];
i = 0 

document.querySelector('.btn').addEventListener('click',btnFunc);

function btnFunc() {
 let inputbox = document.querySelector('.input-box');
 // get value from text input field 
 let inputboxvalue = inputbox.value
  toDoListItems.push(inputboxvalue)
 updateToDoList()

};


function updateToDoList() {
    toDoListItems.forEach(addListItem) 

    function addListItem (listItem,index) {

     // select the to do list 
    let todolist = document.querySelector('#todolist')

    // delete the current items in the to do list
        todolist.innerHTML = ''
        
    // create a list item 
        let li = document.createElement('li')

     // create a checkbox 
       let checkbox = document.createElement('input')
       checkbox.type = 'checkbox'

        //create a textnode 
        document.createElement
        let txtnode = document.createTextNode(listItem)
       


        //append elements to to do list 
      li.appendChild(checkbox)
      li.appendChild(txtnode)

      todolist.appendChild(li)
}
}