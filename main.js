
/********VARIABLE********/
let rectangle=document.querySelector('div')
console.log(rectangle)
let btn=document.getElementById('toggle-rectangle')

/********FUNCTIONS*******/

function toggle(){
    rectangle.classList.toggle('toggle')
}

function hover(){
    rectangle.classList.toggle('good')
}
function dishover(){
    rectangle.classList.remove('good')
    rectangle.classList.remove('important')
}
function dbclick(){
    rectangle.classList.toggle('important')
}

/*********PROGRAMME*********/
btn.onclick=toggle
rectangle.onmouseover=hover
rectangle.onmouseout=dishover
rectangle.ondblclick=dbclick