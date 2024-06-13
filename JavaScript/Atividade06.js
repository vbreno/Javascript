function addTask() {
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;

    if (title === "" || desc === "") {
        alert("Por favor, preencha ambos os campos.");
        return;
    }

    const table = document.getElementById('task-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const titleCell = newRow.insertCell(0);
    const descCell = newRow.insertCell(1);
    const actionCell = newRow.insertCell(2);

    titleCell.textContent = title;
    descCell.textContent = desc;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Excluir";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        const row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
    };
    actionCell.appendChild(deleteBtn);

    document.getElementById('task-title').value = "";
    document.getElementById('task-desc').value = "";
}
