const toggleButton = document.getElementsByClassName('toggle')[0]
const navBarLinks = document.getElementsByClassName('navbar-links')[0]
console.log(navBarLinks)

toggleButton.addEventListener('click',()=>{
    navBarLinks.classList.toggle('active')
})