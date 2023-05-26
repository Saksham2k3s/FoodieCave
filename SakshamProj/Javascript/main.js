//counter section

document.addEventListener("DOMContentLoaded", ()=>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
        obj.textContent = current;
         if(current == end){
            clearInterval(timer);
         }
        },step);

    }
    counter("count1", 0, 50, 3000);
    counter("count2", 0, 60, 3000);
    counter("count3", 0, 70, 3000);
    counter("count4", 0, 20, 3000);
});

//page loader

let preloader=document.getElementById('loading');
    
      function myFunction(){
        preloader.style.display= 'none';
    }


//scroll to top button

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollToTopBtn").style.display = "none";
    }
  }
  

