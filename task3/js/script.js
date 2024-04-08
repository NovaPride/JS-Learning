document.addEventListener('DOMContentLoaded', function() {
  const todoBtn = document.querySelector('.btn.btn_todo');
  const popUp = document.querySelector('.todo');
  const headerBtn = popUp.querySelector('.todo_header_btn');
  const textInput = popUp.querySelector('.todo_textinput');

  const form = document.querySelector('.todo_form');

  todoBtn.addEventListener('click', () => {
    popUp.classList.toggle('todo_active');
  });

  headerBtn.addEventListener('click', () => {
    popUp.classList.toggle('todo_active');
  });

  function createNewLabel(){

  }

  textInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      const targetValue = e.target.value;
      const label = document.createElement("label");
        label.classList = "todo_form_label";
        label.innerHTML = `
        <input type="checkbox" class="todo_form_checkbox">
        <span class="">${targetValue}</span>
        <input type="button" class="todo_form_edit">
        <input type="button" class="todo_form_delete">`;
      const labelSpan = label.querySelector('span');

      label.querySelector('.todo_form_checkbox').addEventListener('click', e => {
        labelSpan.classList.toggle('crossedout');
      });
      
      label.querySelector('.todo_form_delete').addEventListener('click', e => {
        form.removeChild(label);
      });

      label.querySelector('.todo_form_edit').addEventListener('click', e => {
        labelSpan.innerHTML = "";
        labelSpan.appendChild(
          document.createTextNode(
            prompt(`Edit ToDo for "${targetValue}"`)
          )
        );
      });

      form.appendChild(label);
      e.target.value = "";
    }
  });
});