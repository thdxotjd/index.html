// JavaScript source code
const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const todo_ls = 'toDos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(todo_ls, JSON.stringify(toDos));
    // localStroage���� javascript�� data�� ������ �� ����, ���� string ���¸� ���� ����
    // �켱 JSON.stringify�� ����� ��ü�� string ���·� ���� 
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); 
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
        // parseInt : string�� ������ Ư�� ������ ������ ��ȯ�ϴ� �޼���. �ɼ��� ���� ������ 10������ �⺻.
    });
    toDos = cleanToDos;
    saveToDos();
    // array.filter() : �־��� �Լ��� �׽�Ʈ�� ����ϴ� ��� ��Ҹ� ��� ���ο� �迭�� ��ȯ�ϴ� �޼���. forEach�� ���������� array ��� �������� �����.
}

function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.addEventListener('click', deleteToDo);
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    span.innerText = text;
    li.id = newId;
    toDoList.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(span);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
    delBtn.classList.add("Delete");
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
}

function loadTodos() {
    const loadedToDos = localStorage.getItem(todo_ls);
    if(loadedToDos !== null) {
        const parseToDos = JSON.parse(loadedToDos);
        // JSON.parse�� �̿��� string���� �ٲپ� �����ߴ� localStorage�� ������ �ٽ� �� data ���·� ���� ��.
        // JSON : Javascript Object Notation
        parseToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        // forEach : �־��� �Լ��� array ��� ������ �����ϴ� �޼���
    }
}

function init() {
    loadTodos();
    toDoForm.addEventListener('submit', handleSubmit);
}
init();