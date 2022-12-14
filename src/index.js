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

    $("#loading").addClass("loaded");
    let h = window.location.hash.toLowerCase();
    if (h === '#wi-crypt') {
        article_content("proj-WI-CRYPT");
        $("#article").addClass("visible");
        history.pushState("", document.title, window.location.pathname + window.location.search);
    } else if (h === '#wice') {
        article_content("proj-WICE");
        $("#article").addClass("visible");
        history.pushState("", document.title, window.location.pathname + window.location.search);
    } else if (h === '#n-ai-spam') {
        article_content("proj-N-AI-SPAM");
        $("#article").addClass("visible");
        history.pushState("", document.title, window.location.pathname + window.location.search);
    } else if (h === '#v-vintila') {
        article_content("proj-V-VINTILA");
        $("#article").addClass("visible");
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }

    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
    
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, Math.abs($(window).scrollTop() - $(hash).offset().top) / 4, function(){
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
    $("#article").removeClass();
});

$('#article-close-btn').on('click', function(e) {
    if (e.target !== this)
        return;
    $("#article").removeClass();
});

$('.article-trigger').on('click', function(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    console.log($(e.target))
    if ($(e.target).is("div")) {
        var classes = $(this).attr("class").split(" ");
        var found = "unknown";
        for (var i = 0; i < classes.length; ++i)
            if(classes[i].startsWith("proj"))
                found = classes[i];
        article_content(found);
        $("#article").addClass("visible");
        $("#article").addClass("visible-" + found);
    }
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
                <p>For more info, please check out the <a href=\"https://github.com/w1bb/WICE\">code repository</a>. The code is made available under the <a href=\"https://github.com/w1bb/WICE/blob/master/LICENSE\">MIT license</a>.</p>\
                <p>I value keeping my code open&#8209;source. However, it's disheartening whenever I find that someone has copied my work without giving me proper credit. All I ask of you is to not claim my effort as your own.</p>\
            </div>"
        );
    } else if (content_of == "proj-WI-CRYPT") {
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
                <p>For more info, please check out the <a href=\"https://github.com/w1bb/Wi-Crypt\">code repository</a>. The code is made available under the <a href=\"https://github.com/w1bb/Wi-Crypt/blob/master/LICENSE\">MIT license</a>.</p>\
                <p>I value keeping my code open&#8209;source. However, it's disheartening whenever I find that someone has copied my work without giving me proper credit. All I ask of you is to not claim my effort as your own.</p>\
            </div>"
        );
    } else if (content_of == "proj-N-AI-SPAM") {
        $("#article-main-info").html(
            "<div class=\"date\">January 2022</div>\
            <div class=\"title\">N-AI Spam</div>\
            <div class=\"text\">\
                <p>2022's Baliza challenge (by Bitdefender) was all about creating a <b>C</b> (or Python) program that could detect 2000's spam emails based on their title and content. My algorithm won <b>1st place</b>, having an <a href=\"https://en.wikipedia.org/wiki/F-score\">F-score</a> of F1=95.63%.</p>\
                <p>The programs were NOT allowed to use any kind of AI, so they were limited by the quality of the chosen heuristics. Moreover, the participants were given 150 emails to test their algorithms on, but these were different than the emails used in the final evaluation. We were not given any hints or guides, so every implementaion detail was up to us.</p>\
                <p>So, based on what I knew, I came up with a scoring system that would change once a certain value would be passed:</p>\
                <ul>\
                    <li>score &lt; 35: the email is definitely HAM (<b>DHAM</b>), a.k.a. non-spam;</li>\
                    <li>35 &leq; score &lt; 42: the email is probably HAM (<b>PHAM</b>);</li>\
                    <li>42 &leq; score &lt; 50: the email is a suspicious HAM (<b>SHAM</b>);</li>\
                    <li>50 &leq; score: the email is <b>SPAM</b>;</li>\
                </ul>\
                <p>Some of the heuristics used include:</p>\
                <ul>\
                    <li><b>Punctuation</b> could indicate a SPAM email - for example, dollar signs could indicate money transfers wanted by potential malicious users, while exclamation marks could indicate urgency. A score is determined based on the number of characters relative to the number of words counted in the email;</li>\
                    <li><b>Uppercase</b> letters are usually used in excess or not at all when it comes to SPAM email. <a href=\"https://www.desmos.com/calculator/lw4qgluitr\">Here</a> is the formula I found best suited for computing this score. In the end, everything is converted relative to the toal count of non-space characters;</li>\
                    <li><b>Consonants</b> don't appear naturally in groups of 4 or more, so this clue could raise a red flag. Obviously, links should be ignored;</li>\
                    <li><b>Keywords</b> that trigger a SPAM are very important - they include words such as 'money', 'purchase', 'deposit', 'diamond', 'risk', 'bank' etc. However, there are some words that could lower this score, including 'forwarded', 'newsletter' and 'yahoo' (it was big back then). If the same word occures multiple times, say n times in the same email, it should be counted only about sqrt(n) times (my formula is a little bit more complicated, but for small values this works too);</li>\
                    <li><b>Known spam email addresses</b> should also be taken into account.</li>\
                </ul>\
                <p>There are some other metrics that were used, but all in all, this is the algorithm. In the end, it also checks if there are duplicate emails inputed, since these are most likely SPAM. If an email is considered a PHAM or an SHAM, its score will be reevaluated to make sure it isn't actually a SPAM.</p>\
                <p>The algorithm was written in <b>C</b> and it was <b>tested</b> using some custom made tests as well. The code is <b>very well documented</b>.</p>\
                <p>Note: the original challenge also contained some other task, but that one was trivial and it was only used to filter those who wanted to win an award from those who weren't all that interested.</p>\
                <p>For more info, please check out the <a href=\"https://github.com/w1bb/N-AI-Spam\">code repository</a>. The code is made available under the <a href=\"https://github.com/w1bb/N-AI-Spam/blob/master/LICENSE\">MIT license</a>.</p>\
                <p>I value keeping my code open&#8209;source. However, it's disheartening whenever I find that someone has copied my work without giving me proper credit. All I ask of you is to not claim my effort as your own.</p>\
            </div>"
        );
    } else if (content_of == "proj-MN") {
        $("#article-main-info").html(
            "<div class=\"date\">Work in progress</div>\
            <div class=\"title\">A numerical methods book</div>\
            <div class=\"text\">\
                <p>I had always found numerical methods fascinating. However, whenever I had to study something in this field, I had always felt lost, since all resources I had found are way too vague, incomplete or completly wrong. And so, I started writing my own numerical methods book.</p>\
                <p>The project is currently written in <b>LaTeX</b> and will be soon released under an <b>open&#8209;source</b> license. Some of the covered materials include:</p>\
                <ul>\
                    <li><b>LU decomposition</b>: Doolittle, Crout, Cholesky, linear system of equations, LDU decomposition and PLU explanation;</li>\
                    <li><b>QR decomposition</b>: Gram-Schmidt and its modified, more stable version, Householder and Givens;</li>\
                    <li><b>Gaussian Elimination</b>: and its many variations, including partial pivoting, partial pivoting with a scaled pivot, total pivoting, Thomas algorithm and Gauss&#8209;Jordan Elimination;</li>\
                    <li><b>Iterative methods</b> for solving LSE: Jacobi, Gauss&#8209;Seidel, successive over-relaxation method and gradient descent;</li>\
                    <li><b>Non-linear equations</b>: successive approximations method, bisection method, tangent method, secant method and systems of non-linear equations;</li>\
                    <li><b>Interpolation methods</b>: polynomial methods (Vandermonde, Lagrange, Neville, Newton), spline methods, B??zier curves and De Casteljau's algorithm;</li>\
                    <li><b>Approximation methods</b>: least squares methods, methods based on orthogonal polynomials and rational functions methods;</li>\
                    <li><b>Numerical derivatives</b>: simple formula, 3&#8209;points method, Richardson extrapolation and higher&#8209;order derivatives methods;</li>\
                    <li><b>Numerical integration</b>: quadrature methods (rectangle method, trapezoidal method and Simpson methods), Newton-Cotes methods, Romberg methods, adaptive quadratures and Gaussian quadratures;</li>\
                    <li><b>Ordinal Differential Equations</b>: Euler's method, explicit Runge-Kutta methods and multistep methods;</li>\
                </ul>\
                <p>Bonus materials include the <b>PageRank</b> algorithm and <b>FFT</b>. All the code presented in the book is written in <b>Octave</b>, but I plan to convert it in <b>Julia</b> in the next editions.</p>\
                <p>However, the book is only 80% ready and it written in Romanian, so it will not be released just yet. More info will come soon.</p>\
            </div>"
        );
    } else if (content_of == "proj-V-VINTILA") {
        $("#article-main-info").html(
            "<div class=\"date\">November 2022 (ongoing)</div>\
            <div class=\"title\">My personal website</div>\
            <div class=\"text\">\
                <p>It's been years since I've first dreamt of building my own platform to publish my work with the world. After many years of hard-work, I've decided I was prepared for such a project. It might not be perfect, but it is <b>written from scratch</b> in <b>SASS</b> and <b>JavaScript</b> (<b>jQuery</b>) and I am very proud of it.</p>\
                <p>Britany Chiang's <a href=\"/brittanychiang.com\">personal website</a> was a great inspiration. I didn't use any of her code, but I felt she deserved a shout-out. Other open&#8209;source materials used in this project include:</p>\
                <ul>\
                    <li>The <a href=\"https://fonts.google.com/specimen/Inter/about\">Inter</a> font;</li>\
                    <li>The <a href=\"https://fonts.google.com/specimen/Courier+Prime/about\">Courier Prime</a> font.</li>\
                </ul>\
                <p>For more info, please check out the <a href=\"https://github.com/w1bb/v-vintila\">code repository</a>. The code is made available under the <a href=\"https://github.com/w1bb/v-vintila/blob/master/LICENSE\">MIT license</a>.</p>\
                <p>I value keeping my code open&#8209;source. However, it's disheartening whenever I find that someone has copied my work without giving me proper credit. All I ask of you is to not claim my effort as your own.</p>\
            </div>"
        );
    } else if (content_of == "proj-WGJ") {
        $("#article-main-info").html(
            "<div class=\"date\">Spring 2020</div>\
            <div class=\"title\">Wi's Game Jam</div>\
            <div class=\"text\">\
                <p>During high school, I was amazed to witness my creative friends collaborating to win different team contests. Back then, I was watching a lot of game development videos, so I thought to myself: \"Why isn't there a game jam contest in Romania?\".</p>\
                <p>So I took attitude and <b>created one</b>. Of course, this might be considered a small event, but there were 7 teams involved, and each one of them created something unique in Unity, Unreal or Godot. The chosen theme was 'the devil within'; <b>the winner team (Matei-??tefan Ionescu, Alexandra Stoean)</b> designed a platformer which changes the realm based on the character's self evolution.</p>\
                <p>The contest lasted for 72 hours (originaly, there were supposed to be 48h, but a bonus of 24h were later added) and the submissions <b>were judged by me</b>. The whole event happened on Discord.</p>\
                <p>For privacy reasons (GDPR), the games were since removed from the public view. However, the screenshot from above contains four of the seven games written back then.</p>\
            </div>"
        );
    } else if (content_of == "proj-HAZOSES") {
        $("#article-main-info").html(
            "<div class=\"date\">April 2022</div>\
            <div class=\"title\">\"Hazoses\" Trivia Bot</div>\
            <div class=\"text\">\
                <p>When I participated in <a href=\"https://olympics10.eestec.ro/about\">EESTEC (10th edition)</a>, our team, <b>Hazoses</b>, qualified for both the main event and the second event. We won second place in the latter, but this project is all about the first one.</p>\
                <p>We were tasked to design an AI in 24 hours that could answer basic trivia questions, such as 'Who is the first person to walk on the moon?' or 'When was Albert Einstein born?'. These queries were recieved by a local server that would process them and return an answer.</p>\
                <p>Together with <b>Vlad Negoi????</b>, our team designed a <b>Python</b> script capable of answering some of these questions, but the project was far from perfect. However, the code found here is <b>open&#8209;source</b> and, most importantly, <b>written in only 12 hours</b> (there were some communication problems on our side, so we had to develop our bot in half the normal time).</p>\
                <p>There are many issues with this code, but I will not solve any of them; the code ran its course, since it was meant to be used in the competition and nowhere else. In the future, I might recreate this AI alone.</p>\
                <p>For more info, please check out the <a href=\"https://github.com/w1bb/Hazoses-Trivia-Bot\">code repository</a>. The code is made available under the <a href=\"https://github.com/w1bb/Hazoses-Trivia-Bot/blob/master/LICENSE\">MIT license</a>.</p>\
                <p>I value keeping my code open&#8209;source. However, it's disheartening whenever I find that someone has copied my work without giving me proper credit. All I ask of you is to not claim my effort as your own.</p>\
            </div>"
        );
    } else if (content_of == "proj-MasterMinds") {
        $("#article-main-info").html(
            "<div class=\"date\">During high school</div>\
            <div class=\"title\">MasterMinds</div>\
            <div class=\"text\">\
                <p>Until high school, I had participated in many LEGO robotics contests, but back then, I hadn't quite understood how that would shape my future. I wasn't doing remarkable advancements in robotics, but there was some special feeling when I was not only writing the code, but seeing it execute on something I built myself.</p>\
                <p>Fast forward a few years later and I was part of the senior MasterMinds team. As a <b>Java</b> programmer, I have written the software required to qualify our team for the <b>national</b> stage of <a href=\"https://www.firstinspires.org/robotics/ftc\">FTC</a> and, in the end, <b>won third place</b>.</p>\
                <p>The next year, I was <b>elected team leader</b>. Until high school was over, I helped my team win <b>other awards</b> (such as the Think Award and the Design Award) through excellent <b>communication skills</b> and inclusiveness.</p>\
                <p>In university, I couldn't participate actively in the competition anymore, but I could <b>mentor</b> the other members of MasterMinds, and so I did. Due to Covid restrictions, the competition was postponed, but we had great fun building stronger bonds and learning more about robotics.</p>\
            </div>"
        );
    } else if (content_of == "proj-OtherProjects") {
        $("#article-main-info").html(
            "<div class=\"date\">During university</div>\
            <div class=\"title\">Other projects</div>\
            <div class=\"text\">\
                <p>There are many projects I have written over the years - some of these are various assignments, others were pure curiosities. Since they are still interesting and relevant, I will mention them on this list:</p>\
                <ul>\
                    <li><a href=\"https://github.com/w1bb/POO-Homework-01\"><b>GwentStone</b></a> - a complex card game simulator (a combination of Hearthstone and Gwent). The project was written in Java as a programming assignment (POO, 2nd year, 1st sem.);</li>\
                    <li><b>ELF Loader</b> - an ELF loader for Linux that allows statically-linked executables to be loaded using a demand paging mechanism. The project was written in C as a programming assignment (SO, 2nd year, 1st sem.). Sadly, I don't currently have permissions to publish my work;</li>\
                    <li><a href=\"https://github.com/w1bb/octave-simulator\"><b>Octave Simulator</b></a> - an Octave-like matrix-based simulator which computes a wide range of transformations on matrices, vectors and scalars. The project was written in C as a programming assignment (PCLP, 1st year, 1st sem.);</li>\
                    <li><a href=\"https://github.com/w1bb/image-editor\"><b>Image Editor</b></a> - a PPM/PGM image manipulation software, designed for advanced filtering and algebraic transformations. The project was written in C as a programming assignment (PCLP, 1st year, 1st sem.);</li>\
                </ul>\
                <p>If these don't satisfy your curiosity, check out the rest of them on <a href=\"https://github.com/w1bb/\">my GitHub page</a> - have a safe journey!</p>\
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