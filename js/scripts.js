// menu responsive
let menu = document.querySelector("#menu-icon");

menu.onclick = function () {
    navBar = document.querySelector(".navbar");
    menu.classList.toggle('bx-x');
    navBar.classList.toggle("open");

}


// cambio de color navbar
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('change')
    } else {
        nav.classList.remove('change')
    }
}

// contador de la pagina

const counters = document.querySelectorAll('.counter')

window.addEventListener('scroll', fixCount)
function fixCount() {
    if (window.scrollY > nav.offsetHeight + 400) {
        counters.forEach(counter => {
            counter.innerText = '0'

            const updateCounter = () => {
                const target = +counter.getAttribute('data-target')
                const c = +counter.innerText

                const increment = target / 900

                if (c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`
                    setTimeout(updateCounter, 1)
                } else {
                    counter.innerText = target
                }
            }

            updateCounter()
        })
    } else {
        counter.innerText = '0'
    }
}

//animacion scroll

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}


//Casillas deslizables

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})



//Testimonio Clientes

const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad autem adipisci asperiores aut, maxime voluptatem nobis odit accusamus culpa architecto eum cupiditate enim temporibus at provident facilis nisi. Modi, eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aspernatur ad, quasi vel id numquam voluptas natus, non iste odit, incidunt nulla ratione a quas? Placeat voluptatum soluta quasi est.",
    },
    {
        name: 'June Cha',
        position: 'Software Engineer',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad autem adipisci asperiores aut, maxime voluptatem nobis odit accusamus culpa architecto eum cupiditate enim temporibus at provident facilis nisi. Modi, eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aspernatur ad, quasi vel id numquam voluptas natus, non iste odit, incidunt nulla ratione a quas? Placeat voluptatum soluta quasi est.",
    },
    {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad autem adipisci asperiores aut, maxime voluptatem nobis odit accusamus culpa architecto eum cupiditate enim temporibus at provident facilis nisi. Modi, eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aspernatur ad, quasi vel id numquam voluptas natus, non iste odit, incidunt nulla ratione a quas? Placeat voluptatum soluta quasi est.",
    },
    {
        name: 'Renee Sims',
        position: 'Receptionist',
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',
        text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad autem adipisci asperiores aut, maxime voluptatem nobis odit accusamus culpa architecto eum cupiditate enim temporibus at provident facilis nisi. Modi, eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aspernatur ad, quasi vel id numquam voluptas natus, non iste odit, incidunt nulla ratione a quas? Placeat voluptatum soluta quasi est.",
    },
    {
        name: 'Jonathan Nunfiez',
        position: 'Graphic Designer',
        photo: 'https://randomuser.me/api/portraits/men/43.jpg',
        text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad autem adipisci asperiores aut, maxime voluptatem nobis odit accusamus culpa architecto eum cupiditate enim temporibus at provident facilis nisi. Modi, eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aspernatur ad, quasi vel id numquam voluptas natus, non iste odit, incidunt nulla ratione a quas? Placeat voluptatum soluta quasi est.",
    },
    {
        name: 'Sasha Ho',
        position: 'Accountant',
        photo:
            'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
        text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad autem adipisci asperiores aut, maxime voluptatem nobis odit accusamus culpa architecto eum cupiditate enim temporibus at provident facilis nisi. Modi, eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aspernatur ad, quasi vel id numquam voluptas natus, non iste odit, incidunt nulla ratione a quas? Placeat voluptatum soluta quasi est.",
    },
    {
        name: 'Veeti Seppanen',
        position: 'Director',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
        text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad autem adipisci asperiores aut, maxime voluptatem nobis odit accusamus culpa architecto eum cupiditate enim temporibus at provident facilis nisi. Modi, eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aspernatur ad, quasi vel id numquam voluptas natus, non iste odit, incidunt nulla ratione a quas? Placeat voluptatum soluta quasi est.",
    },
]

let idx = 1

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if (idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)



//Carrusel de imagenes Projects
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idy = 0

let interval = setInterval(run, 4000)

function run() {
    idy++
    changeImage()
}

function changeImage() {
    if (idy > img.length - 1) {
        idy = 0
    } else if (idy < 0) {
        idy = img.length - 1
    }

    imgs.style.transform = `translateX(${-idy * 900}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 4000)
}

rightBtn.addEventListener('click', () => {
    idy++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idy--
    changeImage()
    resetInterval()
})



//Carrusel de imagenes Projects DIseño de Interiores
const imgs2 = document.getElementById('imgs2')
const leftBtn2 = document.getElementById('izq')
const rightBtn2 = document.getElementById('der')

const img2 = document.querySelectorAll('#imgs2 img')

let id_y = 0

let inter = setInterval(correr, 4000)

function correr() {
    id_y++
    changeImg()
}

function changeImg() {
    if (id_y > img2.length - 1) {
        id_y = 0
    } else if (id_y < 0) {
        id_y = img2.length - 1
    }

    imgs2.style.transform = `translateX(${-id_y * 900}px)`
}

function resetInterv() {
    clearInterval(inter)
    inter = setInterval(correr, 4000)
}

rightBtn2.addEventListener('click', () => {
    id_y++
    changeImg()
    resetInterv()
})

leftBtn2.addEventListener('click', () => {
    id_y--
    changeImg()
    resetInterv()
})
