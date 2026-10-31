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
