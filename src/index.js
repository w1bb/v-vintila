window.onscroll = function() {
    indexNavbarOnScroll();
}

function indexNavbarOnScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#index-nav-top").addClass("scrolled");
        $("#index-nav-left").addClass("scrolled");
    } else {
        $("#index-nav-top").removeClass("scrolled");
        $("#index-nav-left").removeClass("scrolled");
    }
}

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
    
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400, function(){
                window.location.hash = hash;
            });
        }
    });
});

function index_skills_selectSkill(e) {
    for (let x of e.parentElement.getElementsByClassName("choice")) {
        x.classList.remove("active");
    }
    e.classList.add("active");
}

$('#article').on('click', function(e) {
    if (e.target !== this)
        return;
    $("#article").removeClass("visible");
});

$('.article-trigger').on('click', function(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    $("#article").addClass("visible");    
});