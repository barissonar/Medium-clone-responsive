
document.addEventListener('scroll',WindowWidthChange);

function WindowWidthChange(){

    const windowWidth = window.innerWidth;
    let rightMenu = document.querySelector('#right-menu'); 
    
    let threshold = 1000; // Sabitlenecek öğenin belireceği sayfa scroll değeri
  
    if (window.scrollY >= threshold && windowWidth >= 1250) {
      rightMenu.style.position = 'fixed';
      rightMenu.style.top = '150px';
      rightMenu.style.right = '25px';
     
    } else {
      rightMenu.style.position = 'static';
      rightMenu.style.marginTop = '0px';
    }


}



window.addEventListener('scroll', function() {
    let navBar = document.querySelector('#navbar');
    let threshold = 400;
    let getStartedBtn = document.querySelector('#get-startedbtn')
     // Sabitlenecek öğenin belireceği sayfa scroll değeri
  
    if (window.scrollY >= threshold) {
      navBar.style.backgroundColor = 'white';
      getStartedBtn.classList.remove('btn-dark')
      getStartedBtn.classList.add('btn-success')


    } else {
      navbar.style.backgroundColor = 'rgb(255, 192, 23)';
      getStartedBtn.classList.remove('btn-success');
      getStartedBtn.classList.add('btn-dark')
      
    }
  });  




