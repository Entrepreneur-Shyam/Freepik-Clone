
//   Suggestion Heading

document.querySelector("#right-btn").onclick = () => {

    var check = document.querySelector(".suggestion-container").scrollWidth
    var check2 = document.querySelector(".suggestion-container").clientWidth

    document.querySelector(".suggestion-container").style.transform = `translateX(-${check - check2}px)`
    document.querySelector("#right-btn").style.display = "none"
    document.querySelector("#left-btn").style.display = "inline-block"
    document.querySelector("#left-btn").style.zIndex = "1"
}
document.querySelector("#left-btn").onclick = () => {
    document.querySelector(".suggestion-container").style.transform = "translateX(0%)"
    document.querySelector("#left-btn").style.display = "none"
    document.querySelector("#right-btn").style.display = "inline-block"
    document.querySelector("#right-btn").style.zIndex = "1"
}


// Border bottom when scroll on suggestion heading

// Sticky position position for sidebar and suggestion-heading
const suggestionHeading=document.querySelector(".suggestion-heading");
const sideFilters = document.querySelector(".side-filters");
const filtersType=document.querySelector(".filters-type")
const inputContainer = document.querySelector(".input-container")
suggestionHeading.style.top = `${inputContainer.clientHeight + 1}px`
sideFilters.style.top= `${inputContainer.clientHeight +1}px`

console.log(inputContainer.offsetHeight,suggestionHeading.offsetHeight)
var navbar = document.querySelector(".navbar")
window.onscroll = function () {

    if (navbar.getBoundingClientRect().bottom < 0) {
        document.querySelector(".suggestion-heading").style.borderBottom = "1px solid rgb(227, 227, 227)"
    }
    else {
        document.querySelector(".suggestion-heading").style.border = "none"
    

    }
}





// Add to Collection , Like ,Pinterest
var onImage = document.querySelectorAll(".on-image")
var hint = document.querySelectorAll(".image-overlay ul li span")

onImage.forEach((el) => {
    el.addEventListener("mouseover", () => {
        el.previousElementSibling.style.display = "inline"

    })
    el.addEventListener("mouseout", () => {
        el.previousElementSibling.style.display = "none"

    })

})

// width set in image container  and height of side-filter with suggestion Heading
const sidebar = document.querySelector(".sidebar");

const mainContainer = document.querySelector(".main-container");
const sidebarMainContainer = document.querySelector(".sidebar-main-container")
const imageContainer=document.querySelector('.image-container')

sideFilters.style.height = ` ${document.querySelector(".suggestion-heading").offsetHeight + 2}px`
// Sidebar height


//  Sidebar hide
const filter = document.querySelector(".filter")
const sideFilterSVG = document.querySelector(".side-filters>svg")

filter.onclick = () => {
    filter.style.display = "none"
    sidebar.style.display = "flex"
    mainContainer.style.width = "1px"
    mainContainer.style.width = `calc( 100% - ${sidebar.offsetWidth}px )`


}

sideFilterSVG.addEventListener("click", () => {
    sidebar.style.display = "none"
    mainContainer.style.width = "100%"
    filter.style.display = "flex"
})


var first = document.querySelectorAll(".first")

var assetType = document.querySelector(".asset-type")
var paragraphAndBtn = document.querySelector(".paragraph-and-btn")

first.forEach(el => {
    el.addEventListener("click", () => {
        if (el.nextElementSibling.style.display == "none") {
            el.nextElementSibling.style.display ="flex"
           
        }
        else  {
            el.nextElementSibling.style.display = "none"
         

        }
    })
})
