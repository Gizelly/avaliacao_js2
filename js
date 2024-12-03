// Função para atualizar a imagem de fundo e o texto ao passar o mouse
function upDate(previewPic) {
    console.log("Mouseover triggered for: " + previewPic.alt); // Verifica se o evento foi acionado
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
}

// Função para restaurar a imagem e o texto ao remover o mouse
function unDo() {
    console.log("Mouseout triggered");
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

// Função para adicionar o atributo tabfocus ao focar em uma imagem
function onFocus(previewPic) {
    console.log("Focus triggered for: " + previewPic.alt); // Verifica se o evento foi acionado
    previewPic.style.border = "5px solid #FFD700"; // Destacar a imagem com uma borda dourada ao focar
}

// Função para remover o destaque ao desfocar da imagem
function onBlur(previewPic) {
    console.log("Blur triggered for: " + previewPic.alt); // Verifica se o evento foi acionado
    previewPic.style.border = "10px solid black"; // Remove a borda dourada ao desfocar
}

// Função para garantir que o evento de onload seja acionado
window.onload = function() {
    console.log("Page loaded and ready.");
    var images = document.querySelectorAll('.preview');
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', i); // Atribui um tabindex para cada imagem
    }
}
