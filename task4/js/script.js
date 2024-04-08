document.addEventListener('DOMContentLoaded', function() {
  
  const popUp = document.querySelector('.todo'),
        todoBtn = document.querySelector('.btn.btn_todo'),
        headerBtn = popUp.querySelector('.todo_header_btn'),
        form = popUp.querySelector('.todo_form'),
        textInput = popUp.querySelector('.todo_textinput');

  todoBtn.addEventListener('click', () => {
    popUp.classList.toggle('todo_active');
  });

  headerBtn.addEventListener('click', () => {
    popUp.classList.toggle('todo_active');
  });

  const createLabel = (value) => {
    const label = document.createElement("label");
      label.classList = "todo_form_label";
      label.innerHTML = `
      <input type="checkbox" class="todo_form_checkbox">
      <span class="">${value}</span>
      <input type="button" class="todo_form_edit">
      <input type="button" class="todo_form_delete">`;
      form.appendChild(label);
  }
 
  form.addEventListener('click', e => {
    if (e.target.parentElement.tagName == "LABEL"){
      const granny = e.currentTarget,
            mommy = e.target.parentElement,
            labelSpan = mommy.querySelector('span');
      switch (e.target.classList.value){
        case 'todo_form_checkbox': 
          labelSpan.classList.toggle('crossedout'); 
          break;
        case 'todo_form_edit': 
          const temp = labelSpan.innerHTML;
          labelSpan.innerHTML = "";
          labelSpan.appendChild(
            document.createTextNode(
              prompt(`Edit ToDo for "${temp}"`)
            )
          );
          break;
        case 'todo_form_delete': 
          granny.removeChild(mommy);
          break;
        default: break;
      }
    }
  });

  textInput.addEventListener('keypress', e => {
    e.preventDefault();
    if (e.key === 'Enter') {
      if(e.target.value.trim() == "") return;
      createLabel(e.target.value.trim());
      e.target.value = "";
    } else {
      e.target.value += e.key;
    }
  });
});