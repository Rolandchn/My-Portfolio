
const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    
    let isMobileNavOpen = false;
    
    window.onresize = function() {
        if(window.outerWidth > 768){
            isMobileNavOpen = false;

            mobileNav.style.display = 'none';
    
            document.body.style.overflowY = 'auto'
        }
    };

    headerBtn.addEventListener('click', () => {
        /* let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        console.log(vw); */

        isMobileNavOpen = !isMobileNavOpen;

        if(isMobileNavOpen){
            mobileNav.style.display = 'flex';
    
            document.body.style.overflowY = 'hidden'
        }
        else{
            mobileNav.style.display = 'none';
    
            document.body.style.overflowY = 'auto'
        }

        mobileLinks.forEach((link) => {
            link.addEventListener('click', () => {
                isMobileNavOpen = false;

                mobileNav.style.display = 'none';
    
                document.body.style.overflowY = 'auto'
            });
        })
    });

     

    /* $(window).on('load resize', function(){ 
        resizer();
    }); */
} 

export default mobileNav;