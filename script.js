const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const idNames = {
  INPUT: 'input'
}

let itemCount = 0, uncheckedCount = 0;
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let input = document.createElement('input')
input.type = 'text'
document.getElementsByClassName('container')[0].insertBefore(input, document.getElementsByTagName('button')[0])
function newTodo() {
  if(!input.value.trim()) return(alert('you need to add something'))
  let li = document.createElement('li')
  
  let text = document.createElement('span')
  text.classList.add(classNames.TODO_TEXT)
  text.innerHTML= input.value.trim()
  input.value = ''
  input.focus()
  li.appendChild(text);

  let checkbox = document.createElement('input')
  checkbox.classList.add(classNames.TODO_CHECKBOX)
  checkbox.type = 'checkbox'
  checkbox.addEventListener('change',function(){
    this.checked? uncheckedCount-- : uncheckedCount++
    refresh(uncheckedCountSpan, uncheckedCount)
  })
  li.appendChild(checkbox)
  li.classList.add(classNames.TODO_ITEM)
  ++itemCount;
  ++uncheckedCount;
  refresh(itemCountSpan, itemCount)
  refresh(uncheckedCountSpan, uncheckedCount)

  let deleteButton = document.createElement('button')
  li.appendChild(deleteButton)
  deleteButton.innerHTML = 'delete'
  deleteButton.classList.add(classNames.TODO_DELETE)
  list.appendChild(li)
  deleteButton.addEventListener('click', ()=>{
    deleteElement(list, li)
    itemCount--
    if(!checkbox.checked) uncheckedCount--;
    refresh(itemCountSpan, itemCount)
    refresh(uncheckedCountSpan, uncheckedCount)
  })
}

function refresh(ele, val){
  ele.innerHTML = val;
}

function deleteElement(list, item){
  list.removeChild(item)
}
