let enviar = document.getElementById('enviar');
let limpar = document.getElementById('limpar');
let tabela = document.getElementById('tabela');

enviar.addEventListener('click', function(event) {
    let descricao = document.getElementById('descricao');
    let preco = document.getElementById('preco');
    let categoria = document.getElementById('categoria');
    
    event.preventDefault();

    if (descricao.value.trim() === '' || preco.value.trim() === '' || categoria.value === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        let novaLinha = tabela.insertRow();

        let celulaDescricao = novaLinha.insertCell(0);
        let celulaPreco = novaLinha.insertCell(1);
        let celulaCategoria = novaLinha.insertCell(2);

        if (preco.value.includes(".")) {
            let partes = preco.value.split(".");
            if (partes[1].length === 1) {
                celulaPreco.textContent = `R$ ${preco.value}0`;
            } else if(partes[1].length > 2){
                celulaPreco.textContent = `R$ ${Number(preco.value).toFixed(2)}`;
            } else {
                celulaPreco.textContent = `R$ ${preco.value}`;
            }
        } else {
            celulaPreco.textContent = `R$ ${preco.value}.00`;
        }
        
        celulaDescricao.textContent = descricao.value;
        celulaCategoria.textContent = categoria.value;

        descricao.value = "";
        preco.value = "";
        categoria.value = "";
    }
});

limpar.addEventListener('click', function(event) {
    let descricao = document.getElementById('descricao');
    let preco = document.getElementById('preco');
    let categoria = document.getElementById('categoria');

    event.preventDefault();

    descricao.value = "";
    preco.value = "";
    categoria.value = "";

});