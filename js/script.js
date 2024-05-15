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

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#7f00ff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
