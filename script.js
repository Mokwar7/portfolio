const imgs = document.querySelectorAll('.grid__img')
const view = document.querySelector('.view')
const viewImg = document.querySelector('.view__img')

imgs.forEach((img) => {
    img.addEventListener('click', () => {
        view.classList.add('active')
        viewImg.src = img.src
        window.addEventListener('keyup', (e) => {
            if (e.keyCode == 27) {
                view.classList.remove('active')
            }
        })
    })
})

view.addEventListener('click', (e) => {
    if (e.target.classList.contains("active")) {
        view.classList.remove('active')
    }
})