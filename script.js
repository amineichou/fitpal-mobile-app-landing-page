// nav bar
var burger = document.getElementById('burger');
var menu = document.getElementById('menu-items');

burger.addEventListener('click', function () {
    menu.style.display = getComputedStyle(document.getElementById('menu-items')).display == 'none' ? "flex" : "none";
})

// home image animation
var homePoster = document.getElementById('home');
let imagesUrl = ['url("./assets/one.jpg")', 'url("./assets/two.jpg")', 'url("./assets/four.jpg")'];

homePoster.style.backgroundImage = imagesUrl[0];

for (let i = -1; i < 0; i++) {
    setInterval(() => {
        if (homePoster.style.backgroundImage == imagesUrl[0])
            homePoster.style.backgroundImage = imagesUrl[1];
        else if (homePoster.style.backgroundImage == imagesUrl[1])
            homePoster.style.backgroundImage = imagesUrl[2];
        else if (homePoster.style.backgroundImage == imagesUrl[2])
            homePoster.style.backgroundImage = imagesUrl[0];
    }, 5000)
}

// nav bar
document.getElementById('nav-logo').addEventListener('click', function () {
    location.reload();
})
document.getElementById('menu-item-download').addEventListener('click', function () {
    document.getElementById('download').scrollIntoView({ block: "end", behavior: "smooth" });
})
document.getElementById('menu-item-about').addEventListener('click', function () {
    document.getElementById('about').scrollIntoView({ behavior: "smooth" });
})
document.getElementById('menu-item-contact-us').addEventListener('click', function () {
    document.getElementById('contact-us').scrollIntoView({ behavior: "smooth" });
})


// scroll back to top
document.getElementById('scrollToTop').style.display = 'none';
document.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        document.getElementById('scrollToTop').style.display = 'flex';
    } else {
        document.getElementById('scrollToTop').style.display = 'none';
    }
})

document.getElementById('scrollToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})