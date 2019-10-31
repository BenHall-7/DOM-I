const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// task 1

let cta_img = document.getElementById("cta-img");
cta_img.setAttribute('src', siteContent["cta"]['img-src']);

let middle_img = document.getElementById("middle-img");
middle_img.setAttribute('src', 'img/mid-page-accent.jpg');

// task 2

let nav = document.getElementsByTagName("nav")[0];
let nav_a = Array.from(nav.getElementsByTagName("a"));
console.log(nav_a);
nav_a.forEach((a, i) => {a.textContent = siteContent["nav"]["nav-item-" + (i + 1)]})

let cta_text = document.getElementsByClassName("cta-text")[0];
cta_text.querySelector("h1").textContent = siteContent["cta"]["h1"];
cta_text.querySelector("button").textContent = siteContent["cta"]["button"];

const sections = ["features", "about", "services", "product", "vision"];
let text_sections = Array.from(document.getElementsByClassName("text-content"));
text_sections.forEach((ts, index) => {
  ts.querySelector("h4").textContent = siteContent["main-content"][sections[index] + "-h4"];
  ts.querySelector("p").textContent = siteContent["main-content"][sections[index] + "-content"];
});

let contact = document.getElementsByClassName("contact")[0];
contact.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];
let ps = contact.getElementsByTagName("p");
ps[0].textContent = siteContent["contact"]["address"];
ps[1].textContent = siteContent["contact"]["phone"];
ps[2].textContent = siteContent["contact"]["email"];

let footer = document.getElementsByTagName("footer")[0];
footer.querySelector("p").textContent = siteContent["footer"]["copyright"];