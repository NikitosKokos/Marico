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
   // form registration
   const formInputs = document.querySelectorAll('.registration__input input');
   if(formInputs.length > 0){
      function changePasswordType(parent){
         let isPasswordActive = true;
         const icon = parent.querySelector('.registration__icon');
         const input = parent.querySelector('.registration__input input');
         icon.addEventListener('click', () => {
            if(isPasswordActive){
               input.type = 'text';
               icon.classList.remove('password');
               icon.classList.add('text');
               isPasswordActive = false;
            }else{
               input.type = 'password';
               icon.classList.remove('text');
               icon.classList.add('password');
               isPasswordActive = true;
            }
            
         });
      }

      formInputs.forEach(input => {
         const parent = input.parentNode
         input.addEventListener('focus', () => {
            const icon = parent.querySelector('.registration__icon');
            if(icon){
               icon.classList.add('_active');
            }
         });
         input.addEventListener('blur', () => {
            const icon = parent.querySelector('.registration__icon');
            if(icon){
               icon.classList.remove('_active');
            }
         });
         switch(input.type){
            case 'text':
               parent.insertAdjacentHTML('beforeend', 
               `
               <svg class="registration__icon registration__icon_user">
                  <use xlink:href='img/sprite.svg#user'></use>
               </svg>
               `);
               break;
            case 'email':
               parent.insertAdjacentHTML('beforeend', 
               `
               <svg class="registration__icon registration__icon_email">
                  <use xlink:href='img/sprite.svg#email'></use>
               </svg>
               `);
               break;
            case 'password':
               parent.insertAdjacentHTML('beforeend', 
               `
               <svg width="34" height="29" viewBox="0 0 34 29" class="registration__icon registration__icon_password">
                  <use xlink:href='img/sprite.svg#password'></use>
                  <rect y="27.8" width="0" height="2.6694" rx="1.3347" transform="rotate(-46.0706 0 21.8787)"/>
               </svg>
               `);
               changePasswordType(parent);
               break;
            default:
               break;
         }
      });   
   }

}); // end