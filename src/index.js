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

    if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
        $("#go-to-top").addClass("visible");
    } else {
        $("#go-to-top").removeClass("visible");
    }
}

function go_to_top() {
    $('html, body').animate({
        scrollTop: 0
    }, $(window).scrollTop() / 4, function(){});
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
                <p>Key features</b> of this engine include:</p>\
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
                <p>For more info, please check out the <a href=\"#\">code repository</a>. The code is made available under the <a href=\"#\">? license</a>.</p>\
                <p>I value keeping my code open-source. However, it's disheartening whenever I find that someone has copied my code without giving me proper credit. All I ask of you is to not claim my effort as your own.</p>\
            </div>"
        );
    } else if(content_of == "proj-WI-CRYPT") {
        $("#article-main-info").html(
            "<div class=\"date\">September 2022</div>\
            <div class=\"title\">Wi-Crypt</div>\
            <div class=\"text\">\
                <p>As a replacement for the Data Encryption Standard (DES), NIST called for proposals for a new Advanced Encryption Standard (AES) in 1997. Four years later, NIST declared the block cipher Rijndael as the encyption of choice and published it as a final standard.</p>\
                <p>Today, the algorithm is used everywhere - it secures your messages and files, it generates great pseudo-random numbers and it is even used in top&#8209;secret gouvernment documents.</p>\
                <p>This is the reason I have decided to implement the algorithm in <b>C++</b>. My implementation is not only <b>very fast</b>, but it is also meant to give a <b>full explanation</b> of how the lookup tables were initially generated.</p>\
                <p>Here are some of the <b>key features</b> of this project:</p>\
                <ul>\
                    <li>128, 192 and 256-bit encryption (decryption) support;</li>\
                    <li>ECB, CBC, CFB, OFB and CTR encryption (decryption) modes;</li>\
                    <li>GF(2^8) precomputations used instead of meaningless lookup tables;</li>\
                    <li>Tests against other known implementations, such as <a href=\"https://github.com/dhuertas/AES\">dhuertas</a>' and <a href=\"https://github.com/SergeyBel/AES\">SergeyBel</a>'s in order to verify correctness;</li>\
                    <li>Logging capabilities;</li>\
                    <li>Great code modularization.</li>\
                </ul>\
                <p>All in all, this was a great project and I am proud of how it turned out. Here are some of the resoruces I have used:</p>\
                <ul>\
                    <li>A good starting point would be <a href=\"https://scholar.google.com/citations?user=w81afLAAAAAJ&hl=en\">Christof Paar</a>'s explanation, which can be found <a href=\"https://www.youtube.com/watch?v=NHuibtoL_qk\">on YouTube</a>;</li>\
                    <li>The book he recommends is also a great read, <a href=\"https://www.amazon.com/Understanding-Cryptography-Textbook-Students-Practitioners/dp/3642446493\">Understanding Cryptography: A Textbook for Students and Practitioners</a>, by Christof Paar and Jan Pelzi;</li>\
                    <li>Wikipedia also talks about <a href=\"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard\">AES</a> and links to various important pieces of information that were used in the algorithm.</li>\
                </ul>\
                <p>For more info, please check out the <a href=\"#\">code repository</a>. The code is made available under the <a href=\"#\">? license</a>.</p>\
                <p>I value keeping my code open-source. However, it's disheartening whenever I find that someone has copied my code without giving me proper credit. All I ask of you is to not claim my effort as your own.</p>\
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