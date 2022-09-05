// Lista de todo os campos da página

let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),
];

console.log(campos);

const tbody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    const tr = document.createElement('tr');

    // Incluir os campos dinâmicamente
    campos.forEach(function(campo) {
        const td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    const tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
});