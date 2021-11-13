let loaderBox = document.querySelector('.loader-box')
let pos = Number.parseInt(getComputedStyle(loaderBox).left)
let interval;


function moveRight() {
    return interval = requestAnimationFrame(() => {
        if (pos < Number.parseInt(getComputedStyle(loaderBox.parentElement).width) - Number.parseInt(getComputedStyle(loaderBox).width)) {
            pos += 4;
            loaderBox.style.left = `${pos}px`
            interval = requestAnimationFrame(moveRight)
        } else {
            interval = requestAnimationFrame(moveLeft)
        }
    })
}

function moveLeft() {
    return interval = requestAnimationFrame(() => {
        if (pos >= 0) {
            pos -= 4;
            loaderBox.style.left = `${pos}px`
            interval = requestAnimationFrame(moveLeft)
        } else {
            interval = requestAnimationFrame(moveRight)
        }
    })
}

export {moveRight, interval};
