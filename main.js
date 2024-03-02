const form = document.getElementById('form-confirm');
const inputA = document.getElementById('valor-a');
const inputB = document.getElementById('valor-b');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const valorA = parseFloat(inputA.value);
    const valorB = parseFloat(inputB.value);

    if (valorB > valorA) {
        
        const containerSucesso = document.querySelector('.success-message');
        containerSucesso.innerHTML = 'Formulário enviado com sucesso! Valor B é maior que Valor A!';
        containerSucesso.style.display = 'block';
        containerSucesso.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';

        
        inputA.value = '';
        inputB.value = '';
    } else {
        
        document.querySelector('.error-message').style.display = 'block';
    }
});
