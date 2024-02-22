function FullView(ImgLink){
    //Associando a SOURCE oriunda de cada imagem clicada à tag IMG chamada FullImage 
    //Ou seja, atribuindo cada imagem clicada na tag img chamada FullImage que terá configurações CSS diferetes
   document.getElementById("FullImage").src = ImgLink;
   //O retrato (fullimageview), irá passar de none para block
   document.getElementById("FullImageView").style.display = "block"
}

function CloseFullView() {
    document.getElementById("FullImageView").style.display = "none"
}
