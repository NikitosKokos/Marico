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

}); // end