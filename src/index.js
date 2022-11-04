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
    indexNavbarOnScroll();
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

$('#article-close-btn').on('click', function(e) {
    if (e.target !== this)
        return;
    $("#article").removeClass("visible");
});

$('.article-trigger').on('click', function(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    $("#article").addClass("visible");
    var classes = $(this).attr("class").split(" ");
    var found = "unknown";
    for (var i = 0; i < classes.length; ++i)
        if(classes[i].startsWith("proj"))
            found = classes[i];
    article_content(found);
});

function article_content(content_of) {
    if(content_of == "proj-WICE") {
        $("#article-main-info").html(
            "<div class=\"date\">June 2021</div>\
            <div class=\"title\">Wi's Chess Engine</div>\
            <div class=\"text\">\
                <p>Chess, as we know it today, has emerged in Spain and the rest of Southern Europe during the second half of the 15th century. Currently, chess is one of the world's most beloved games, played by millions worldwide!</p>\
                <p>I have always wondered where its beauty came from; as I have developed a deeper understanding on the game's tactics over the years, I have decided to write a program that could play against humans (and beat them too). Such an algorithm is called a <b>chess engine</b>.</p>\
                <p>This project was written in <b>C++</b>, following the <b>object-oriented</b> paradigm. This way, I could create an efficent algorithm with minimal overhead, while also using modern techniques that could simplify my workload.</p>\
                <p><b>Key features</b> of this engine include:</p>\
                <ul>\
                    <li>C++ 17 speed;</li>\
                    <li>An estimated rating of <a href=\"https://en.wikipedia.org/wiki/Elo_rating_system\">1800 ELO</a>;</li>\
                    <li>Windows &amp; Linux compatibility.</li>\
                </ul>\
                <p>I might come back to this project someday. However, I currently have no plans to update it. Some features that would be nice include:</p>\
                <ul>\
                    <li>Multithreading support;</li>\
                    <li>A faster evaluation algorithm.</li>\
                </ul>\
                <p>For more info, please check out the <a href=\"#\"><b>code</b></a>.</p>\
            </div>"
        );
    } else {
        $("#article-main-info").html(
            "<div class=\"date\">Unknown date</div>\
            <div class=\"title\">Unknown article</div>\
            <div class=\"text\">\
                <p>Wrong JS call was made. You should not see this!</p>\
            </div>"
        );
    }
}