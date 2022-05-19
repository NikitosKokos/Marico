document.addEventListener('DOMContentLoaded', () => {
   // header submenu
   if(isMobile.any()){
      const arrows = document.querySelectorAll('.header__arrow');
      arrows.forEach(arrow => {
         const li = arrow.closest('li');
         li.classList.add('sub');
         arrow.classList.add('show');
         arrow.addEventListener('click', () => {
            const subMenu = arrow.nextElementSibling;
            const link = arrow.previousElementSibling;
            arrow.classList.toggle('active');
            subMenu.classList.toggle('open');
         });
      });
   }else{
      const arrows = document.querySelectorAll('.header__arrow');
      arrows.forEach(arrow => {
         const link = arrow.previousElementSibling;
         const li = arrow.closest('li');
         li.classList.add('sub')
         link.classList.add('mouse');
      });
   }

   // header
   const header = document.querySelector('.header');

   const callback = function (entries, observer){
       if(entries[0].isIntersecting){
           header.classList.remove('_scroll');
       }else{
           header.classList.add('_scroll');
       }
   }

   const headerObserver = new IntersectionObserver(callback);
   headerObserver.observe(header);

   // cookies
   const cookies = document.querySelector('.cookies');
   const cookieBtn = document.querySelector('.cookies__btn');

   if(cookieBtn){
      cookieBtn.addEventListener('click', () => {
         cookies.classList.add('_hide');
      }); 
   }

   // scroll to top

   const toTopBtn = document.querySelector('.to-top');
   if(toTopBtn){
      const scroll = new SmoothScroll('.to-top', {
         speed: 200
      });
      window.addEventListener('scroll', (e) => {
         if(toTopBtn.getBoundingClientRect().bottom - document.documentElement.clientHeight <= 0){
            toTopBtn.classList.add('_active');
         }else{
            toTopBtn.classList.remove('_active');
         }
      });      
   }

}); // end