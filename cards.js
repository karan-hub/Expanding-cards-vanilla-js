const container= document.querySelectorAll(".inner_container");
 

function removeActive( ) {
    container.forEach((card) =>{
        card.classList.remove("active")
        card.classList.add("remove")
    })
}

container.forEach((card) =>{
    card.addEventListener('mouseenter',()=>{
        // console.log("click");
        removeActive();
        card.classList.add("active");
        console.log(card);
    })
})
// console.log(container);
