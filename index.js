// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
console.log(document.all);
console.log(document.all[1]);
console.log(document.all[7]);
{/* <tr>
<td class="post">post 4</td>
<td>
  <span class="fa fa-times float-right pr-3"></span>
</td>
</tr> */}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
td1.className = 'post';
td1.textContent = 'post 6';
// td1.id = 'post-id';
// td1.style.color= '#333';
// td1.setAttribute('title', 'post-title-6');

const td2 = document.createElement('td');
const span = document.createElement('span');
span.className = 'fa fa-times float-right pr-3';
td2.appendChild(span);

tr.appendChild(td1);
tr.appendChild(td2);


const tbody = document.querySelector('tbody');
tbody.appendChild(tr);

// // Get the table body element
// const tableBody = document.querySelector('tbody');

// // Create a new table row
// const newRow = document.createElement('tr');

// // Create the post cell and set its properties
// const postCell = document.createElement('td');
// postCell.textContent = 'post 6';
// postCell.className = 'post';

// // Create the actions cell and set its properties
// const actionsCell = document.createElement('td');
// const deleteIcon = document.createElement('span');
// deleteIcon.className = 'fa fa-times float-right pr-3';

// // Append the delete icon to the actions cell
// actionsCell.appendChild(deleteIcon);

// // Append the cells to the row
// newRow.appendChild(postCell);
// newRow.appendChild(actionsCell);

// // Append the row to the table body
// tableBody.appendChild(newRow);

// event listener

const clearbutton = document.querySelector('.clear-post');

// clearbutton.addEventListener('click',function(event){console.log('murgi')});
// clearbutton.addEventListener('dblclick',function(event){console.log('murgi')});
// clearbutton.addEventListener('mousedown',function(event){console.log('murgi')});
// clearbutton.addEventListener('mouseup',function(event){console.log('murgi')});
// clearbutton.addEventListener('mouseenter',function(event){console.log('murgi')});
// clearbutton.addEventListener('mouseleave',function(event){console.log('murgi')});
// clearbutton.addEventListener('mousemove',function(event){console.log('murgi')});

clearbutton.addEventListener('click', function(event) {
console.log(event)
console.log(event.clientX)
console.log(event.clientY)
console.log(event.offsetX)
console.log(event.offsetY)
console.log(event.altKey)});

// console.log(event.);

localStorage.setItem('name','sakib');
localStorage.setItem('age','90');

const age = localStorage.getItem('age');


localStorage.removeItem('name');
localStorage.clear();

const user =[
    {name:'tohfa',age:21},
    {name:'tara',age:29},
    {name:'tuba',age:54},
];

localStorage.setItem('users',JSON.stringify(user));

const userFRomLS = localStorage.getItem('users');
console.log(JSON.parse(userFRomLS));

// sesssion storage through browser api

sessionStorage.setItem('name','tohfa');
localStorage.setItem('name','tohfa');




