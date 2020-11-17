document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('#create-task-form')

  form.addEventListener("submit", function(event) {
    // console.dir(event)
    event.preventDefault();
    const ul = document.querySelector('#tasks')
    const li = document.createElement('li')
    const text = document.createElement('text')
    const input = document.querySelector('#new-task-description')
    const username = document.querySelector('#username')
    const buttonDelete = document.createElement('button')
    const priority = document.querySelector('#drop-down')

    if (priority.value === "high priority") {
      text.style.color = "red"
    } else if (priority.value === "medium priority") {
      text.style.color = "yellow"
    } else {text.style.color = "green"}
    
   
    buttonDelete.innerText = "x"
    buttonDelete.addEventListener("click", (event) => {event.target.parentNode.remove()})

    text.innerText = input.value + " - " + username.value + " " 

    li.appendChild(text)
    li.appendChild(buttonDelete)  
    ul.appendChild(li)
  });
})

