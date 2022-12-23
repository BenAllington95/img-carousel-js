const images = [
    {
    name: "image one",
    link: "images/aaron-burden-5AiWn2U10cw-unsplash.jpg"
    },
    {
    name: "image one",
    link: "images/bob-canning-r53rNKb_7s8-unsplash.jpg"
    }
]

let num = 0

document.addEventListener('click', function(e){

    if (e.target.dataset.name) {
        increaseNum(e.target.dataset.name)
        render()
    }
})

function increaseNum(button) {

    if (button === 'left-button') {
        return num--
     } else if(button === 'right-button') {
        return num++
    }   
}

function render() {
    document.body.style.background = `url(${images[num].link})`
}

render()