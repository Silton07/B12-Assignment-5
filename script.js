function getElement(id){
    const element = document.getElementById(id);
    return element;
}

getElement("card-container").addEventListener("click",function(e){
    if (e.target.className.includes("fa-heart")){
        const life = getElement("life").innerText;
        const currentLife = Number(life) + 1;
        getElement("life").innerText=currentLife;
    }
});