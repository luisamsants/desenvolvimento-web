const links = document.querySelectorAll("nav a");

links.forEach(function(link) {
    link.addEventListener("click", function() {

        links.forEach(function(item) {
            item.style.backgroundColor = "";
            item.style.color = "";
        });

        link.style.backgroundColor = "#9f87bb";
        link.style.color = "#34263d";
    });
});


const imagens = document.querySelectorAll("#hobbies img");

imagens.forEach(function(imagem) {
    imagem.addEventListener("click", function() {

        if (imagem.style.transform == "scale(1.5)") {
            imagem.style.transform = "scale(1)";
        } else {
            imagem.style.transform = "scale(1.5)";
        }

    });
});


document.getElementById("contato").addEventListener("submit", function(e) {
            e.preventDefault();

            let nome = document.getElementById("nome").value;
            let email = document.getElementById("email").value;
            let mensagem = document.getElementById("mensagem").value;
            let retorno = document.getElementById("mensagem");

            // Limpa mensagem anterior
            retorno.textContent = "";

            if (nome.length < 3) {
                retorno.textContent = "Nome deve ter no mínimo 3 caracteres.";
                retorno.className = "erro";
                return;
            }

            if (email.indexOf("@") === -1) {
                retorno.textContent = "E-mail inválido (@).";
                retorno.className = "erro";
                return;
            }

            if (mensagem.length > 200) {
                retorno.textContent = "Deve ter no máximo 200 caracteres.";
                retorno.className = "erro";
                return;
            }

            retorno.className = "sucesso";

        });
