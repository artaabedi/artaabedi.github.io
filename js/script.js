// ------------------------Theme Switch -----------------------

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


//   ----------------------------Loader Animation ---------------------------------  

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


//   ----------------------------Top Scroll ---------------------------------  

   const showOnPx = 100;
   const backToTopButton = document.querySelector(".back-to-top");
   const pageProgressBar = document.querySelector(".progress-bar");

   const scrollContainer = () => {
   return document.documentElement || document.body;
   };

   const goToTop = () => {
   document.body.scrollIntoView({
    behavior: "smooth"
  });
  };

  document.addEventListener("scroll", () => {
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  console.log("Client Height: ", scrollContainer().clientHeight);

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
  });

  backToTopButton.addEventListener("click", goToTop);
