let offset = 0;
const navBackground = '#eeeeee';

function app() {
  let stickyNavbar = document.querySelector('#sticky');
  let navs = document.querySelectorAll('nav');
  let navBurger = document.querySelector('.burger');
  let mobileNav = document.querySelector('.nav-links')

  let topNavHeight = 70;
  let bottomNavHeight = 30;

  navs.forEach(nav=>{
    nav.style.backgroundColor = navBackground;
  })

  navBurger.addEventListener('click',()=>{
    navBurger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
  // on scroll listner
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > offset) {
      //scroll down
      stickyNavbar.setAttribute('style',`transform: translateY(-70px);`);

      //sets navbar background to white
      navs.forEach(nav=>{
        nav.style.backgroundColor = '#ffffff';
      })
    } else {
      //scroll up
      if(window.pageYOffset < topNavHeight){
        //if navbar is larger than the scroll offset
        stickyNavbar.setAttribute('style',`transform: translateY(0px);transition:0ms;`);
        navs.forEach(nav=>{
          nav.style.backgroundColor = navBackground;
        })
      }else{
        stickyNavbar.setAttribute('style',`transform: translateY(0px)`);
        navs.forEach(nav=>{
          nav.style.backgroundColor = '#ffffff';
        })
      }
    }
    offset = window.pageYOffset;
  });
}

app();