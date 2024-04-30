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

function changeLanguage(languageCode) {
    Array.from(document.getElementsByClassName('lang')).forEach(function (elem) {
        if (elem.classList.contains('lang-' + languageCode)) {
             elem.style.display = 'initial';
        }
        else {
             elem.style.display = 'none';
        }
    });
}

// select handler
const selector = document.getElementById('langSelector');
selector.addEventListener('change', function (evt) {
    changeLanguage(this.value);
});

// detect initial browser language
const lang = navigator.userLanguage || navigator.language || 'en-EN';
const startLang = Array.from(selector.options).map(opt => opt.value).find(val => lang.includes(val)) || 'en';
changeLanguage(startLang);

// updating select with start value
selector.selectedIndex = Array.from(selector.options).map(opt => opt.value).indexOf(startLang)

// fill "The selected language is:"
document.getElementById('browserLang').innerText = lang;
document.getElementById('startLang').innerText = startLang;


