function putAway() {
    
    let putAway = document.querySelectorAll('.active')

    if (putAway.length > 0) {

        for (let index = 0; index < putAway.length; index++) {
            
            putAway[index].classList.remove('active')
        }

    }

}

function removeColor() {
    

    let removeElements = document.querySelectorAll('.color_bar')
    
    if (removeElements.length > 0) {

        for (let index = 0; index < removeElements.length; index++) {
            
            removeElements[index].style.background = "rgba(52, 52, 165, 0.0)"
        }

    }

}

function functionHome() {

    removeColor()

    let colorElement = document.getElementById('home')
    colorElement.style.background = "rgba(57, 57, 140, 0.4)"
    colorElement.style.borderRadius = "5px"

    putAway()
    
    let animElement = document.querySelectorAll('.anim_home')
    
    if (animElement.length > 0) {

        for (let index = 0; index < animElement.length; index++) {
            
            animElement[index].classList.add('active')

        }

    }

}

function functionServices() {

    removeColor()

    let colorElement = document.getElementById('services')
    colorElement.style.background = "rgba(57, 57, 140, 0.4)"
    colorElement.style.borderRadius = "5px"

    putAway()

    let animElement = document.querySelectorAll('.anim_services')
    
    if (animElement.length > 0) {

        for (let index = 0; index < animElement.length; index++) {
            
            animElement[index].classList.add('active')

        }

    }

}

function functionAddress() {

    removeColor()

    let colorElement = document.getElementById('address')
    colorElement.style.background = "rgba(57, 57, 140, 0.4)"
    colorElement.style.borderRadius = "5px"

    putAway()

    let animElement = document.querySelectorAll('.anim_address')
    
    if (animElement.length > 0) {

        for (let index = 0; index < animElement.length; index++) {
            
            animElement[index].classList.add('active')

        }

    }

}

function functionMake() {

    removeColor()

    let colorElement = document.getElementById('make')
    colorElement.style.background = "rgba(57, 57, 140, 0.4)"
    colorElement.style.borderRadius = "5px"

    putAway()

    let animElement = document.querySelectorAll('.anim_make')
    
    if (animElement.length > 0) {

        for (let index = 0; index < animElement.length; index++) {
            
            animElement[index].classList.add('active')

        }

    }

}

setTimeout( function() {      
    
    functionHome()

}, 500)