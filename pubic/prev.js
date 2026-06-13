let A=""

function save(title, image ,srcs, description){

    localStorage.setItem("title", title)

    localStorage.setItem("image", image)

    localStorage.setItem("srcs", srcs)

    localStorage.setItem("description", description )

    window.location.href = "preview.html"

}


const titleElement = document.querySelector(".title")

const heroElement = document.querySelector(".hero")

const btnSrc = document.querySelector(".btn-white")

const desc = document.querySelector(".description")

if(titleElement && heroElement && btnSrc && desc){

    const title = localStorage.getItem("title")

    const image = localStorage.getItem("image")

    const srcs =  localStorage.getItem("srcs")

    const description =  localStorage.getItem("description")

    titleElement.innerText = title 

    heroElement.style.backgroundImage =
    `url(${image})`

     A = srcs

    desc.innerText = description

}