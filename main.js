const cursorEl = document.querySelector('.cursor')
const nav_link = document.querySelector('.nav-link')
const liEl = document.querySelectorAll('.nav-link li')
const navH1 = document.querySelector('.head h1')

window.addEventListener('mousemove',cursor)

function cursor(e){
    cursorEl.style.top = e.pageY + 'px'
    cursorEl.style.left = e.pageX + 'px'
}

liEl.forEach(links => {
    links.addEventListener('mouseover',
    ()=>{
        cursorEl.style.width = '2rem'
        cursorEl.style.height = '0.8rem'
        cursorEl.style.borderRadius = '15px'
        cursorEl.classList.add('linkGrow')
        links.classList.add('hovered')
    })
    links.addEventListener('mouseleave',
    ()=>{
        cursorEl.style.width = '2rem'
        cursorEl.style.height = '2rem'
        cursorEl.style.borderRadius = '50px'
        cursorEl.classList.remove('linkGrow')
        links.classList.remove('hovered')
    }
    )
})

navH1.addEventListener('mouseover',
()=>{
    cursorEl.style.width = '2.7rem'
    cursorEl.style.height = '1rem'
    cursorEl.style.borderRadius = '17px'
    cursorEl.classList.add('linkGrow')
    navH1.classList.add('hovered')
})

navH1.addEventListener('mouseleave',
()=>{
    cursorEl.style.width = '2rem'
    cursorEl.style.height = '2rem'
    cursorEl.style.borderRadius = '50%'
    cursorEl.classList.remove('linkGrow')
    navH1.classList.remove('hovered')
})