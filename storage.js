const addToolocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueinput = document.getElementById('storage-value');
    const value = valueinput.value;

    // set Value
    localStorage.setItem(id , value);
    idInput.value = '';
    valueinput.value = ''
}