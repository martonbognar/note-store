function transformToEdit() {
  let header = document.getElementById('header');
  let body = document.getElementById('post-body');

  let title = header.getElementsByTagName('h2')[0].textContent;
  let post = body.innerHTML;
  while (header.hasChildNodes()) {
    header.removeChild(header.lastChild);
  }
  while (body.hasChildNodes()) {
    body.removeChild(body.lastChild);
  }
  let titleInput = document.createElement('input');
  titleInput.value = title;
  titleInput.type = 'text';
  titleInput.name = 'title';
  titleInput.setAttribute('form', 'editForm');

  let editForm = document.createElement('form');
  editForm.id = 'editForm';
  editForm.method = 'post';

  let textarea = document.createElement('textarea');
  textarea.appendChild(document.createTextNode(post));
  textarea.name = 'body';
  editForm.appendChild(textarea);

  let submitButton = document.createElement('input');
  submitButton.type = 'submit';
  editForm.appendChild(submitButton);

  header.appendChild(titleInput);
  body.appendChild(editForm);
}

let editButton = document.getElementById('editButton');
if (editButton !== null) {
  editButton.addEventListener('click', function (event) {
    transformToEdit();
  });
}

let deleteButton = document.getElementById('deleteButton');
if (deleteButton !== null) {
  deleteButton.addEventListener('click', function (event) {
    let noteId = this.getAttribute('data-note-id');
    console.log(noteId);
    window.location.href = '/note/delete/' + noteId;
  });
}
