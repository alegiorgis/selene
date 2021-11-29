const navSlide = () => {
    const burger = document.querySelector(".nav__burger")
    const navMenu = document.querySelector(".nav__menu")
    const navLinks = document.querySelectorAll(".nav__link");
    // const burgerLines = burger.children;

    burger.addEventListener('click', ()=> {
        navMenu.classList.toggle('nav__menu--active')

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 10 + 0.5}s`
            }
          
        })

        burger.classList.toggle('toggle')
    })
    
}

navSlide();

window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
          $('#topBtn').fadeIn();
        } else{
          $('#topBtn').fadeOut();
        }
      });
    
      $("#topBtn").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
      });
})
