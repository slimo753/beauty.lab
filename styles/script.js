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

    // let photoElement = document.getElementById('photo-home')
    // photoElement.style.transform = 'scale(1.1)'
    // photoElement.style.overflow = 'hidden'
    // photoElement.style.transition = 'transform 1s'

    removeColor()

    let colorElement = document.getElementById('home')
    colorElement.style.background = "rgba(36, 97, 81, 0.4)"
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

    // let photoElement = document.getElementById('photo-services')
    // photoElement.style.transform = 'scale(1.1)'
    // photoElement.style.overflow = 'hidden'
    // photoElement.style.transition = 'transform 1s'

    removeColor()

    let colorElement = document.getElementById('services')
    colorElement.style.background = "rgba(36, 97, 81, 0.4)"
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

    // let photoElement = document.getElementById('photo-address')
    // photoElement.style.transform = 'scale(1.1)'
    // photoElement.style.overflow = 'hidden'
    // photoElement.style.transition = 'transform 1s'

    removeColor()

    let colorElement = document.getElementById('address')
    colorElement.style.background = "rgba(36, 97, 81, 0.4)"
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

    // let photoElement = document.getElementById('photo-make')
    // photoElement.style.transform = 'scale(1.1)'
    // photoElement.style.overflow = 'hidden'
    // photoElement.style.transition = 'transform 1s'

    removeColor()

    let colorElement = document.getElementById('make')
    colorElement.style.background = "rgba(36, 97, 81, 0.4)"
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