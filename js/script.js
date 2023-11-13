/* ----------------- toggle icon navbar ----------------- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

/* ----------------- scroll sections active link  ----------------- */
let sections = document.querySelectorAll('section div');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            if(id) {
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            }

            });
        };

    });

    /* ----------------- sticky navbar  ----------------- */
    let header = document.querySelector('header');

   header.classList.toggle('sticky', window.scrollY > 100);


    /* ----------------- remove toggle icon navbar when click navbar link (scroll) ----------------- */
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

};

/* ---------------- scroll reveal ----------------  */

ScrollReveal({
    reset:true,
    distance: '80px',
    duration: 750,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });
ScrollReveal().reveal('.services-box h3, .calculator', { origin: 'bottom' });
ScrollReveal().reveal('.wrapper li, .tabs_content', { origin: 'bottom' });
ScrollReveal().reveal('.portfolio, .tabs_content', { origin: 'left' });
ScrollReveal().reveal('.prohibitted-container, .prohibitted-box', { origin: 'bottom' });




/* ---------------- typed js ----------------  */

const typed = new Typed('.mutiple-text', {
    strings: ['desde Miami','hasta Orotina'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true
})


/* ----- form functionality js code--------*/

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#magia')


$form.addEventListener('submit', handleSubmit )

function handleSubmit (event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:info@nicoyaxpress.com?subject=${form.get('subject')}  de parte de: ${form.get('nombre')}&body=${form.get('message')} Puedes contactarme al número: ${form.get('numero')}`)
  $buttonMailto.click()
} 