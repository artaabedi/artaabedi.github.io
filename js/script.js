// ------------------------Theme Switch-----------------------

        function light() {
            document.body.classList.remove("dark-mode")
            document.getElementById("light").style.display = "none"
            document.getElementById("dark").style.display = "block"
            
        }
        function dark() {
            document.body.classList.add("dark-mode")
            document.getElementById("dark").style.display = "none"
            document.getElementById("light").style.display = "block"

        }

        function theme() {
            document.body.classList.toggle("dark-mode");
            const label = document.getElementsByClassName("label");
            for (let i = 0; i < label.length; i++) {
                label[i].classList.add("dark")
            }
        }
        function navtoggle() {
            document.querySelector(".bar").classList.toggle("active")
        }

    
// ----------------------multi Tag line---------------------------------------

        var typingEffect = new Typed(".multiText", {

            strings: ["BCA Graduate","Web Developer","UI<span > / </span>UX Designer"],

            loop: true,

            typeSpeed: 100,

            backSpeed: 80,

            backDelay: 1500
         });


// ---------------------------Scroll Animation--------------------------------

    window.addEventListener('scroll', reveal);
    function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){ 
        var windowheight=window.innerHeight; 
        var revealtop=reveals[i].getBoundingClientRect().top; 
        var revealpoint=10; 
        if(revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active'); 
    }else{ 
        reveals[i].classList.remove('active'); 
   } } } 


//   ----------------------------Loader Animation---------------------------------  

            var loadtime;

            function loader() {
                loadtime = setTimeout(showPage, 1000);
            }

            function showPage() {
                document.getElementById("loader").style.display = "none";
                document.getElementById("main").style.display = "block";
                document.getElementById("nav").style.display = "flex";
            }
            function showhome(){
                var ld=setTimeout(shhome,1100)
                function shhome(){
                document.getElementById("home").classList.add('active');
            }}

            const date = new Date()
                const year = date.getFullYear()

                document.getElementById("copy").innerHTML = year


//   ----------------------------Scroll Top---------------------------------  

const scrollTopBtn = document.querySelector('.js-scroll-top');
if (scrollTopBtn) {
  scrollTopBtn.onclick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  const progressPath = document.querySelector('.scroll-top path');
  const pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
  const updateProgress = function() {
    const scroll = window.scrollY || window.scrollTopBtn || document.documentElement.scrollTopBtn;

    const docHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    const height = docHeight - windowHeight;
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }

  updateProgress();
  const offset = 100;

  window.addEventListener('scroll', function(event) {
    updateProgress();

    //Scroll back to top
    const scrollPos = window.scrollY || window.scrollTopBtn || document.getElementsByTagName('html')[0].scrollTopBtn;
    scrollPos > offset ? scrollTopBtn.classList.add('is-active') : scrollTopBtn.classList.remove('is-active');

  }, false);    
 }


//   -----------------------Effect-----------------

