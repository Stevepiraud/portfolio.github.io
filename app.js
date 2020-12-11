/*OUTSIDE BARBA*/

/*VARIABLES*/
//Cursor
const mouseGhost = document.querySelector(".cursor-ghost");
const mouseRocket = document.querySelector(".cursor-rocket");
//Logo
const logo = document.querySelector("#logo");
const logoMobile = document.querySelector("#logo-mobile");
//Links
//const linkTemplates = document.querySelector("#link-templates");
const linkHome = document.querySelector("#link-home");
const linkPortfolio = document.querySelector("#link-portfolio");
const linkStory = document.querySelector("#link-story");
const linkHomeMobile = document.querySelector("#link-home-mobile");
const linkPortfolioMobile = document.querySelector("#link-portfolio-mobile");
const linkStoryMobile = document.querySelector("#link-story-mobile");
const linkEn = document.querySelector(".language.eng");
const linkFr = document.querySelector(".language.fr");
const linkEnMobile = document.querySelector(".language.eng.mobile");
const linkFrMobile = document.querySelector(".language.fr.mobile");
//Mobile for Nav
const burger = document.querySelector(".burger");

/*EVENT LISTENERS*/
//Cursor
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);
//logo
logo.addEventListener("click", swipersBabyYoda());
logoMobile.addEventListener("click", swipersBabyYoda());
//Scroll btn to top
window.addEventListener("scroll", () => {
  if ($(window).scrollTop() > 300) {
    $("#btn-scroll-to-top").show(500);
  } else {
    $("#btn-scroll-to-top").hide(500);
  }
});
$("#btn-scroll-to-top").click(() => {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});
//Nav for Mobile
burger.addEventListener("click", navToggle);

/*FUNCTIONS*/
//Cursor
function cursor(e) {
  mouseGhost.style.top = e.pageY + "px";
  mouseGhost.style.left = e.pageX + "px";
  mouseRocket.style.top = e.pageY + "px";
  mouseRocket.style.left = e.pageX + "px";
}

function activeCursor(e) {
  const item = e.target;
  if (item.classList.contains("ghost-cursor-animation")) {
    mouseGhost.classList.add("cursor-ghost-active");
  } else if (item.classList.contains("rocket-cursor-animation")) {
    mouseRocket.classList.add("cursor-rocket-active");
  } else {
    mouseGhost.classList.remove("cursor-ghost-active");
    mouseRocket.classList.remove("cursor-rocket-active");
  }
}

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    //gsap.to("#logo-color", 1, { color: "black" });
    gsap.to(".line1", 0.5, { rotate: "45", y: 7 });
    gsap.to(".line2", 0.5, { rotate: "-45" });
    gsap.to(".nav-bar-mobile", 1, { clipPath: "circle(2500px at 100% -10%)" });
    document.body.classList.add("hide-overflowing-content");
  } else {
    e.target.classList.remove("active");
    //gsap.to("#logo-color", 1, { color: "white" });
    gsap.to(".line1", 0.5, { rotate: "0", y: 0 });
    gsap.to(".line2", 0.5, { rotate: "0" });
    gsap.to(".nav-bar-mobile", 0.5, { clipPath: "circle(50px at 100% -10%)" });
    document.body.classList.remove("hide-overflowing-content");
  }
}

$(".nav-bar-mobile a, #logo-mobile").click(function () {
  burger.classList.remove("active");
  //gsap.to("#logo-color", 1, { color: "white" });
  gsap.to(".line1", 0.5, { rotate: "0", y: 0 });
  gsap.to(".line2", 0.5, { rotate: "0" });
  gsap.to(".nav-bar-mobile", 0.5, { clipPath: "circle(50px at 100% -10%)" });
  document.body.classList.remove("hide-overflowing-content");
});

/*ANIMATIONS*/
//Stagger slides with babyYoda
function swipersBabyYoda() {
  const tl = gsap.timeline({
    defaults: {
      duration: 1.5,
      ease: "power2.inOut",
      stagger: 0.15,
    },
  });
  tl.fromTo(".swipe", 0.3, { opacity: 0 }, { opacity: 1 });
  tl.fromTo(".swipe", { x: "0%" }, { x: "100%" });
  tl.fromTo(".babyYodaSpaceship", 7, { x: "-100%" }, { x: "100%" }, "-=3.5");
}

//Title Fading In
class Animator {
  //Constructor
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }
  //Steve Piraud
  fadeIn(time, delay) {
    const tl = gsap.timeline({
      defaults: {
        duration: `${time}`,
        ease: "power2.inOut",
        delay: `${delay}`,
      },
    });
    tl.fromTo(this.selector, { opacity: 0 }, { opacity: 1 }, "-=0.5");
    tl.fromTo(this.selector, { scale: 1.5 }, { scale: 1 }, "-=3");
  }
  //Ux Ui Designer
  slideIn(time, delay) {
    const tl = gsap.timeline({
      defaults: {
        duration: `${time}`,
        ease: "power2.inOut",
        delay: `${delay}`,
      },
    });
    tl.fromTo(this.selector, { opacity: 0 }, { opacity: 1 });
    tl.fromTo(this.selector, { y: 10 }, { y: 0 }, "-=4");
  }
}
const introH1 = new Animator(".introduction-text-wrapper h1");
const introH2 = new Animator(".introduction-text-wrapper h2");

/*INSIDE BARBA*/
barba.init({
  views: [
    /*HOMEPAGE - ENGLISH*/
    {
      namespace: "homepage-en",
      beforeEnter() {
        //Navbar Animation
        gsap.to(".link-container", { y: -100, stagger: 0.2 });
        //Navbar Style
        $(".main-head").removeClass("bottom-shadow");
        $(".main-head-mobile").removeClass("bottom-shadow");
        //Navbar Links
        logo.href = "/index.html";
        logoMobile.href = "/index.html";
        //templatesLink.href = "./index.html";
        linkHome.href = "/index.html";
        linkPortfolio.href = "/en/portfolio/index.html";
        linkStory.href = "/en/story/index.html";
        linkHomeMobile.href = "/index.html";
        linkPortfolioMobile.href = "/en/portfolio/index.html";
        linkStoryMobile.href = "/en/story/index.html";
        linkEn.href = "/index.html";
        linkFr.href = "/fr/index.html";
        linkEnMobile.href = "/index.html";
        linkFrMobile.href = "/fr/index.html";
        //Text of the nav bar links
        $(linkHome).html("Home");
        $(linkPortfolio).html("Portfolio");
        $(linkStory).html("Story");
        $(linkHomeMobile).html("Home");
        $(linkPortfolioMobile).html("Portfolio");
        $(linkStoryMobile).html("Story");
        //navbar link active - menu
        $(linkHome).removeClass("active-link");
        $(linkPortfolio).removeClass("active-link");
        $(linkStory).removeClass("active-link");
        //navbar links - languages
        $(linkEn).addClass("active-language");
        $(linkEnMobile).addClass("active-language");
        $(linkFr).removeClass("active-language");
        $(linkFrMobile).removeClass("active-language");
      },
      afterEnter() {
        /*VARIABLES*/
        //Btn
        const landingPageBtns = document.querySelectorAll(".btn");
        const btn1 = document.querySelector("#btn1-en");
        const btn2 = document.querySelector("#btn2-en");
        const btn3 = document.querySelector("#btn3-en");
        //Bg
        const heroBg = document.querySelector("#hero");
        const bgContainerText = document.querySelector("#bgContainer-text-en");
        const bgContainerTexth3 = document.querySelector(
          "#bgContainer-text-en h3"
        );
        //Pop-up
        const closeIcon = document.querySelector(
          "#work-in-progress-close-btn-en"
        );
        const workInProgressContainer = document.querySelector(
          "#work-in-progress-en"
        );
        //Baby Yoda img
        const babyYodaContainer = document.querySelector(
          "#introduction-img-en"
        );

        /*EVENT LISTENERS*/
        //Pop-Up
        btn1.addEventListener("click", openPopup);
        closeIcon.addEventListener("click", closePopup);
        //Yoda popping up from title
        $("#yodaH2-en").hover(
          function () {
            // over
            babyYodaContainer.classList.add("introduction-img-yoda-active");
          },
          function () {
            // out
            babyYodaContainer.classList.remove("introduction-img-yoda-active");
          }
        );

        //FUNCTIONS
        //Pop-Up
        function openPopup(e) {
          const popup = workInProgressContainer.children[0];
          workInProgressContainer.classList.add("active");
          popup.classList.add("active");
        }
        function closePopup(e) {
          const popup = workInProgressContainer.children[0];
          workInProgressContainer.classList.remove("active");
          popup.classList.remove("active");
        }
        //Button Animations Hovering - Landing page
        landingPageBtns.forEach((button) => {
          //When I mouseover the button 1
          button.addEventListener("mouseover", (event) => {
            if (button.classList.contains("btn1")) {
              button.classList.add("btnActiveBig1");
              btn2.classList.add("btnActiveSmall2");
              btn3.classList.add("btnActiveSmall3");
              heroBg.classList.add("bgActive1");
              bgContainerText.classList.add("bgContainer-text-active");
              bgContainerTexth3.innerHTML =
                "A preview of templates... You will be able to choose from";
            }
          });
          //When I mouseover the button 2
          button.addEventListener("mouseover", (event) => {
            if (button.classList.contains("btn2")) {
              button.classList.add("btnActiveBig2");
              btn1.classList.add("btnActiveSmall1");
              btn3.classList.add("btnActiveSmall3");
              heroBg.classList.add("bgActive2");
              bgContainerText.classList.add("bgContainer-text-active");
              bgContainerTexth3.innerHTML =
                "From mobile to desktop... Different projects you will contemplate";
            }
          });
          //When I mouseover the button 3
          button.addEventListener("mouseover", (event) => {
            if (button.classList.contains("btn3")) {
              button.classList.add("btnActiveBig3");
              btn2.classList.add("btnActiveSmall2");
              btn1.classList.add("btnActiveSmall1");
              heroBg.classList.add("bgActive3");
              bgContainerText.classList.add("bgContainer-text-active");
              bgContainerTexth3.innerHTML =
                "My story I can tell... If a click you dare to make";
            }
          });
          //When I mouseout the buttons
          button.addEventListener("mouseout", (event) => {
            button.classList.remove("btnActiveBig1");
            button.classList.remove("btnActiveBig2");
            button.classList.remove("btnActiveBig3");
            btn1.classList.remove("btnActiveSmall1");
            btn2.classList.remove("btnActiveSmall2");
            btn3.classList.remove("btnActiveSmall3");
            heroBg.classList.remove("bgActive1");
            heroBg.classList.remove("bgActive2");
            heroBg.classList.remove("bgActive3");
            bgContainerText.classList.remove("bgContainer-text-active");
          });
        });

        //Linking the contact button to the contact form
        $(".contact-me-popup-btn.project").click(() => {
          window.location.href = "/en/story/index.html#form-section-english";
        });

        //ANIMATIONS FROM CONSTRUCTOR
        introH1.fadeIn(0.5, 3);
        introH2.slideIn(0.5, 3.5);
      },
      beforeLeave() {
        $(".main-head").addClass("bottom-shadow");
        $(".main-head-mobile").addClass("bottom-shadow");
      },
    },

    /*HOMEPAGE - FRENCH*/
    {
      namespace: "homepage-fr",
      beforeEnter() {
        //Navbar Animation
        gsap.to(".link-container", { y: -100, stagger: 0.2 });
        //Navbar Style
        $(".main-head").removeClass("bottom-shadow");
        $(".main-head-mobile").removeClass("bottom-shadow");
        //Navbar Links
        logo.href = "/fr/index.html";
        logoMobile.href = "/fr/index.html";
        //templatesLink.href = "./index.html";
        linkHome.href = "/fr/index.html";
        linkPortfolio.href = "/fr/portfolio/index.html";
        linkStory.href = "/fr/story/index.html";
        linkHomeMobile.href = "/fr/index.html";
        linkPortfolioMobile.href = "/fr/portfolio/index.html";
        linkStoryMobile.href = "/fr/story/index.html";
        linkEn.href = "/index.html";
        linkFr.href = "/fr/index.html";
        linkEnMobile.href = "/index.html";
        linkFrMobile.href = "/fr/index.html";
        //Text of the nav bar links
        $(linkHome).html("Accueil");
        $(linkPortfolio).html("Portfolio");
        $(linkStory).html("A propos");
        $(linkHomeMobile).html("Accueil");
        $(linkPortfolioMobile).html("Portfolio");
        $(linkStoryMobile).html("A propos");
        //navbar link active - menu
        $(linkHome).removeClass("active-link");
        $(linkPortfolio).removeClass("active-link");
        $(linkStory).removeClass("active-link");
        //navbar links - languages
        $(linkEn).removeClass("active-language");
        $(linkEnMobile).removeClass("active-language");
        $(linkFr).addClass("active-language");
        $(linkFrMobile).addClass("active-language");
      },
      afterEnter() {
        /*VARIABLES*/
        //Btn
        const landingPageBtns = document.querySelectorAll(".btn");
        const btn1 = document.querySelector("#btn1-fr");
        const btn2 = document.querySelector("#btn2-fr");
        const btn3 = document.querySelector("#btn3-fr");
        //Bg
        const heroBg = document.querySelector("#hero-fr");
        const bgContainerText = document.querySelector("#bgContainer-text-fr");
        const bgContainerTexth3 = document.querySelector(
          "#bgContainer-text-fr h3"
        );
        //Pop-up
        const closeIcon = document.querySelector(
          "#work-in-progress-close-btn-fr"
        );
        const workInProgressContainer = document.querySelector(
          "#work-in-progress-fr"
        );
        //Baby Yoda img
        const babyYodaContainer = document.querySelector(
          "#introduction-img-fr"
        );

        /*EVENT LISTENERS*/
        //Pop-Up
        btn1.addEventListener("click", openPopup);
        closeIcon.addEventListener("click", closePopup);
        //Yoda popping up from title
        $("#yodaH2-fr").hover(
          function () {
            // over
            babyYodaContainer.classList.add("introduction-img-yoda-active");
          },
          function () {
            // out
            babyYodaContainer.classList.remove("introduction-img-yoda-active");
          }
        );

        //FUNCTIONS
        //Pop-Up
        function openPopup(e) {
          const popup = workInProgressContainer.children[0];
          workInProgressContainer.classList.add("active");
          popup.classList.add("active");
        }
        function closePopup(e) {
          const popup = workInProgressContainer.children[0];
          workInProgressContainer.classList.remove("active");
          popup.classList.remove("active");
        }
        //Button Animations Hovering - Landing page
        landingPageBtns.forEach((button) => {
          //When I mouseover the button 1
          button.addEventListener("mouseover", (event) => {
            if (button.classList.contains("btn1")) {
              button.classList.add("btnActiveBig1");
              btn2.classList.add("btnActiveSmall2");
              btn3.classList.add("btnActiveSmall3");
              heroBg.classList.add("bgActive1");
              bgContainerText.classList.add("bgContainer-text-active");
              bgContainerTexth3.innerHTML =
                "Parmis de multiples templates... Choisir, vous pourrez";
            }
          });
          //When I mouseover the button 2
          button.addEventListener("mouseover", (event) => {
            if (button.classList.contains("btn2")) {
              button.classList.add("btnActiveBig2");
              btn1.classList.add("btnActiveSmall1");
              btn3.classList.add("btnActiveSmall3");
              heroBg.classList.add("bgActive2");
              bgContainerText.classList.add("bgContainer-text-active");
              bgContainerTexth3.innerHTML =
                "De l'application mobile au site internet... Differents projets vous contemplerez";
            }
          });
          //When I mouseover the button 3
          button.addEventListener("mouseover", (event) => {
            if (button.classList.contains("btn3")) {
              button.classList.add("btnActiveBig3");
              btn2.classList.add("btnActiveSmall2");
              btn1.classList.add("btnActiveSmall1");
              heroBg.classList.add("bgActive3");
              bgContainerText.classList.add("bgContainer-text-active");
              bgContainerTexth3.innerHTML =
                "Mon histoire je vous dévoilerais... Si cliquer vous osez";
            }
          });
          //When I mouseout the buttons
          button.addEventListener("mouseout", (event) => {
            button.classList.remove("btnActiveBig1");
            button.classList.remove("btnActiveBig2");
            button.classList.remove("btnActiveBig3");
            btn1.classList.remove("btnActiveSmall1");
            btn2.classList.remove("btnActiveSmall2");
            btn3.classList.remove("btnActiveSmall3");
            heroBg.classList.remove("bgActive1");
            heroBg.classList.remove("bgActive2");
            heroBg.classList.remove("bgActive3");
            bgContainerText.classList.remove("bgContainer-text-active");
          });
        });

        //Linking the contact button to the contact form
        $(".contact-me-popup-btn.project").click(() => {
          const navbarHeight = $("#header-fix-space").outerHeight();
          window.location.href = "/fr/story/index.html#form-section-english";
        });

        //ANIMATIONS FROM CONSTRUCTOR
        introH1.fadeIn(0.5, 3);
        introH2.slideIn(0.5, 3.5);
      },
      beforeLeave() {
        $(".main-head").addClass("bottom-shadow");
        $(".main-head-mobile").addClass("bottom-shadow");
      },
    },

    /*PORTFOLIO PAGE - ENGLISH*/
    {
      namespace: "portfolio-en",
      beforeEnter() {
        //Navbar Animation
        gsap.to(".link-container", { y: 0, stagger: 0.2 });
        //Navbar style
        $(".main-head").addClass("bottom-shadow");
        $(".main-head-mobile").addClass("bottom-shadow");
        //Navbar Links
        logo.href = "/index.html";
        logoMobile.href = "/index.html";
        //templatesLink.href = "./index.html";
        linkHome.href = "/index.html";
        linkPortfolio.href = "/en/portfolio/index.html";
        linkStory.href = "/en/story/index.html";
        linkHomeMobile.href = "/index.html";
        linkPortfolioMobile.href = "/en/portfolio/index.html";
        linkStoryMobile.href = "/en/story/index.html";
        linkEn.href = "/en/portfolio/index.html";
        linkFr.href = "/fr/portfolio/index.html";
        linkEnMobile.href = "/en/portfolio/index.html";
        linkFrMobile.href = "/fr/portfolio/index.html";
        //Text of the nav bar links
        $(linkHome).html("Home");
        $(linkPortfolio).html("Portfolio");
        $(linkStory).html("Story");
        $(linkHomeMobile).html("Home");
        $(linkPortfolioMobile).html("Portfolio");
        $(linkStoryMobile).html("Story");
        //Navbar States
        //navbar link on hover
        $(linkHome).addClass("on-hover-link");
        $(linkPortfolio).addClass("on-hover-link");
        $(linkStory).addClass("on-hover-link");
        //navbar link active - menu
        $(linkHome).removeClass("active-link");
        $(linkPortfolio).addClass("active-link");
        $(linkStory).removeClass("active-link");
        //navbar links - languages
        $(linkEn).addClass("active-language");
        $(linkEnMobile).addClass("active-language");
        $(linkFr).removeClass("active-language");
        $(linkFrMobile).removeClass("active-language");
      },
      afterEnter() {
        /*VARIABLES*/
        //Scroll btn sections
        const navbarHeight = $("#header-fix-space").outerHeight();
        const allProjectsOverviewContainer = document.querySelectorAll(
          ".scroll-img-container"
        );

        /*EVENT LISTENERS*/
        //Scroll btn section on click
        allProjectsOverviewContainer.forEach((scrollContainer) => {
          scrollContainer.addEventListener("click", () => {
            if ($(scrollContainer).hasClass("thesliderz")) {
              $("html, body").animate(
                {
                  scrollTop:
                    $(".project-overview-main-container.orphee").offset().top -
                    navbarHeight,
                },
                500
              );
            } else if ($(scrollContainer).hasClass("orphee")) {
              $("html, body").animate(
                {
                  scrollTop:
                    $(".project-overview-main-container.wonderfood").offset()
                      .top - navbarHeight,
                },
                500
              );
            } else if ($(scrollContainer).hasClass("wonderfood")) {
              $("html, body").animate(
                {
                  scrollTop:
                    $(".project-overview-main-container.ariane").offset().top -
                    navbarHeight,
                },
                500
              );
            }
          });
        });
      },
    },

    /*PORTFOLIO PAGE - FRENCH*/
    {
      namespace: "portfolio-fr",
      beforeEnter() {
        //Navbar Animation
        gsap.to(".link-container", { y: 0, stagger: 0.2 });
        //Navbar style
        $(".main-head").addClass("bottom-shadow");
        $(".main-head-mobile").addClass("bottom-shadow");
        //Navbar Links
        logo.href = "/fr/index.html";
        logoMobile.href = "/fr/index.html";
        //templatesLink.href = "./index.html";
        linkHome.href = "/fr/index.html";
        linkPortfolio.href = "/fr/portfolio/index.html";
        linkStory.href = "/fr/story/index.html";
        linkHomeMobile.href = "/fr/index.html";
        linkPortfolioMobile.href = "/fr/portfolio/index.html";
        linkStoryMobile.href = "/fr/story/index.html";
        linkEn.href = "/en/portfolio/index.html";
        linkFr.href = "/fr/portfolio/index.html";
        linkEnMobile.href = "/en/portfolio/index.html";
        linkFrMobile.href = "/fr/portfolio/index.html";
        //Text of the nav bar links
        $(linkHome).html("Accueil");
        $(linkPortfolio).html("Portfolio");
        $(linkStory).html("A propos");
        $(linkHomeMobile).html("Accueil");
        $(linkPortfolioMobile).html("Portfolio");
        $(linkStoryMobile).html("A propos");
        //Navbar States
        //navbar link on hover
        $(linkHome).addClass("on-hover-link");
        $(linkPortfolio).addClass("on-hover-link");
        $(linkStory).addClass("on-hover-link");
        //navbar link active - menu
        $(linkHome).removeClass("active-link");
        $(linkPortfolio).addClass("active-link");
        $(linkStory).removeClass("active-link");
        //navbar links - languages
        $(linkEn).removeClass("active-language");
        $(linkEnMobile).removeClass("active-language");
        $(linkFr).addClass("active-language");
        $(linkFrMobile).addClass("active-language");
      },
      afterEnter() {
        /*VARIABLES*/
        //Scroll btn sections
        const navbarHeight = $("#header-fix-space").outerHeight();
        const allProjectsOverviewContainer = document.querySelectorAll(
          ".scroll-img-container"
        );

        /*EVENT LISTENERS*/
        //Scroll btn section on click
        allProjectsOverviewContainer.forEach((scrollContainer) => {
          scrollContainer.addEventListener("click", () => {
            if ($(scrollContainer).hasClass("thesliderz")) {
              $("html, body").animate(
                {
                  scrollTop:
                    $(".project-overview-main-container.orphee").offset().top -
                    navbarHeight,
                },
                500
              );
            } else if ($(scrollContainer).hasClass("orphee")) {
              $("html, body").animate(
                {
                  scrollTop:
                    $(".project-overview-main-container.wonderfood").offset()
                      .top - navbarHeight,
                },
                500
              );
            } else if ($(scrollContainer).hasClass("wonderfood")) {
              $("html, body").animate(
                {
                  scrollTop:
                    $(".project-overview-main-container.ariane").offset().top -
                    navbarHeight,
                },
                500
              );
            }
          });
        });
      },
    },

    /*PROJECT PAGE - THESLIDERZ - ENGLISH*/
    {
      namespace: "projects-thesliderz-en",
      beforeEnter() {
        //Navbar Animation
        gsap.to(".link-container", { y: 0, stagger: 0.2 });
        //Navbar Style
        $(".main-head").addClass("bottom-shadow");
        $(".main-head-mobile").addClass("bottom-shadow");
        //navbar links
        logo.href = "/index.html";
        logoMobile.href = "/index.html";
        //templatesLink.href = "./index.html";
        linkHome.href = "/index.html";
        linkPortfolio.href = "/en/portfolio/index.html";
        linkStory.href = "/en/story/index.html";
        linkHomeMobile.href = "/index.html";
        linkPortfolioMobile.href = "/en/portfolio/index.html";
        linkStoryMobile.href = "/en/story/index.html";
        linkEn.href = "/en/portfolio/thesliderz.html";
        linkFr.href = "/fr/portfolio/thesliderz.html";
        linkEnMobile.href = "/en/portfolio/thesliderz.html";
        linkFrMobile.href = "/fr/portfolio/thesliderz.html";
        //Text of the nav bar links
        $(linkHome).html("Home");
        $(linkPortfolio).html("Portfolio");
        $(linkStory).html("Story");
        $(linkHomeMobile).html("Home");
        $(linkPortfolioMobile).html("Portfolio");
        $(linkStoryMobile).html("Story");
        //navbar link on hover
        $(linkHome).addClass("on-hover-link");
        $(linkPortfolio).addClass("on-hover-link");
        $(linkStory).addClass("on-hover-link");
        //navbar link active - menu
        $(linkHome).removeClass("active-link");
        $(linkPortfolio).addClass("active-link");
        $(linkStory).removeClass("active-link");
        //navbar links - languages
        $(linkEn).addClass("active-language");
        $(linkEnMobile).addClass("active-language");
        $(linkFr).removeClass("active-language");
        $(linkFrMobile).removeClass("active-language");
      },
      afterEnter() {
        //Popup Site Mapping
        $("#site-mapping-btn-thesliderz").click((e) => {
          $(".popup-site-mapping-container.thesliderz").show(300);
        });
        $("#popup-site-mapping-close-btn-thesliderz").click((e) => {
          $(".popup-site-mapping-container.thesliderz").hide(300);
        });
        $(document).mouseup(function (e) {
          const popupSiteMapping = $(
            ".popup-site-mapping-container.thesliderz"
          );
          if (
            !popupSiteMapping.is(e.target) &&
            popupSiteMapping.has(e.target).length === 0
          ) {
            popupSiteMapping.hide(300);
          }
        });
      },
    },

    /*PROJECT PAGE - THESLIDERZ - FRENCH*/
    {
      namespace: "projects-thesliderz-fr",
      beforeEnter() {
        //Navbar Animation
        gsap.to(".link-container", { y: 0, stagger: 0.2 });
        //Navbar Style
        $(".main-head").addClass("bottom-shadow");
        $(".main-head-mobile").addClass("bottom-shadow");
        //navbar links
        logo.href = "/fr/index.html";
        logoMobile.href = "/fr/index.html";
        //templatesLink.href = "./index.html";
        linkHome.href = "/fr/index.html";
        linkPortfolio.href = "/fr/portfolio/index.html";
        linkStory.href = "/fr/story/index.html";
        linkHomeMobile.href = "/fr/index.html";
        linkPortfolioMobile.href = "/fr/portfolio/index.html";
        linkStoryMobile.href = "/fr/story/index.html";
        linkEn.href = "/en/portfolio/thesliderz.html";
        linkFr.href = "/fr/portfolio/thesliderz.html";
        linkEnMobile.href = "/en/portfolio/thesliderz.html";
        linkFrMobile.href = "/fr/portfolio/thesliderz.html";
        //Text of the nav bar links
        $(linkHome).html("Accueil");
        $(linkPortfolio).html("Portfolio");
        $(linkStory).html("A propos");
        $(linkHomeMobile).html("Accueil");
        $(linkPortfolioMobile).html("Portfolio");
        $(linkStoryMobile).html("A propos");
        //navbar link on hover
        $(linkHome).addClass("on-hover-link");
        $(linkPortfolio).addClass("on-hover-link");
        $(linkStory).addClass("on-hover-link");
        //navbar link active - menu
        $(linkHome).removeClass("active-link");
        $(linkPortfolio).addClass("active-link");
        $(linkStory).removeClass("active-link");
        //navbar links - languages
        $(linkEn).removeClass("active-language");
        $(linkEnMobile).removeClass("active-language");
        $(linkFr).addClass("active-language");
        $(linkFrMobile).addClass("active-language");
      },
      afterEnter() {
        //Popup Site Mapping
        $("#site-mapping-btn-thesliderz-fr").click((e) => {
          $(".popup-site-mapping-container.thesliderz").show(300);
        });
        $("#popup-site-mapping-close-btn-thesliderz-fr").click((e) => {
          $(".popup-site-mapping-container.thesliderz").hide(300);
        });
        $(document).mouseup(function (e) {
          const popupSiteMapping = $(
            ".popup-site-mapping-container.thesliderz"
          );
          if (
            !popupSiteMapping.is(e.target) &&
            popupSiteMapping.has(e.target).length === 0
          ) {
            popupSiteMapping.hide(300);
          }
        });
      },
    },

    /*PROJECT PAGE - ORPHEE - ENGLISH*/
    {
      namespace: "projects-orphee-en",
      beforeEnter() {
        //Navbar Animation
        gsap.to(".link-container", { y: 0, stagger: 0.2 });
        //Navbar Style
        $(".main-head").addClass("bottom-shadow");
        $(".main-head-mobile").addClass("bottom-shadow");
        //navbar links
        logo.href = "/index.html";
        logoMobile.href = "/index.html";
        //templatesLink.href = "./index.html";
        linkHome.href = "/index.html";
        linkPortfolio.href = "/en/portfolio/index.html";
        linkStory.href = "/en/story/index.html";
        linkHomeMobile.href = "/index.html";
        linkPortfolioMobile.href = "/en/portfolio/index.html";
        linkStoryMobile.href = "/en/story/index.html";
        linkEn.href = "/en/portfolio/orphee.html";
        linkFr.href = "/fr/portfolio/orphee.html";
        linkEnMobile.href = "/en/portfolio/orphee.html";
        linkFrMobile.href = "/fr/portfolio/orphee.html";
        //Text of the nav bar links
        $(linkHome).html("Home");
        $(linkPortfolio).html("Portfolio");
        $(linkStory).html("Story");
        $(linkHomeMobile).html("Home");
        $(linkPortfolioMobile).html("Portfolio");
        $(linkStoryMobile).html("Story");
        //navbar link on hover
        $(linkHome).addClass("on-hover-link");
        $(linkPortfolio).addClass("on-hover-link");
        $(linkStory).addClass("on-hover-link");
        //navbar link active - menu
        $(linkHome).removeClass("active-link");
        $(linkPortfolio).addClass("active-link");
        $(linkStory).removeClass("active-link");
        //navbar links - languages
        $(linkEn).addClass("active-language");
        $(linkEnMobile).addClass("active-language");
        $(linkFr).removeClass("active-language");
        $(linkFrMobile).removeClass("active-language");
      },
      afterEnter() {
        //Popup Site Mapping
        $("#site-mapping-btn-orphee").click((e) => {
          $(".popup-site-mapping-container.orphee").show(300);
        });
        $("#popup-site-mapping-close-btn-orphee").click((e) => {
          $(".popup-site-mapping-container.orphee").hide(300);
        });
        $(document).mouseup(function (e) {
          const popupSiteMapping = $(".popup-site-mapping-container.orphee");
          if (
            !popupSiteMapping.is(e.target) &&
            popupSiteMapping.has(e.target).length === 0
          ) {
            popupSiteMapping.hide(300);
          }
        });
      },
    },

    /*PROJECT PAGE - ORPHEE - FRENCH*/
    {
      namespace: "projects-orphee-fr",
      beforeEnter() {
        //Navbar Animation
        gsap.to(".link-container", { y: 0, stagger: 0.2 });
        //Navbar Style
        $(".main-head").addClass("bottom-shadow");
        $(".main-head-mobile").addClass("bottom-shadow");
        //navbar links
        logo.href = "/fr/index.html";
        logoMobile.href = "/fr/index.html";
        //templatesLink.href = "./index.html";
        linkHome.href = "/fr/index.html";
        linkPortfolio.href = "/fr/portfolio/index.html";
        linkStory.href = "/fr/story/index.html";
        linkHomeMobile.href = "/fr/index.html";
        linkPortfolioMobile.href = "/fr/portfolio/index.html";
        linkStoryMobile.href = "/fr/story/index.html";
        linkEn.href = "/en/portfolio/orphee.html";
        linkFr.href = "/fr/portfolio/orphee.html";
        linkEnMobile.href = "/en/portfolio/orphee.html";
        linkFrMobile.href = "/fr/portfolio/orphee.html";
        //Text of the nav bar links
        $(linkHome).html("Accueil");
        $(linkPortfolio).html("Portfolio");
        $(linkStory).html("A propos");
        $(linkHomeMobile).html("Accueil");
        $(linkPortfolioMobile).html("Portfolio");
        $(linkStoryMobile).html("A propos");
        //navbar link on hover
        $(linkHome).addClass("on-hover-link");
        $(linkPortfolio).addClass("on-hover-link");
        $(linkStory).addClass("on-hover-link");
        //navbar link active - menu
        $(linkHome).removeClass("active-link");
        $(linkPortfolio).addClass("active-link");
        $(linkStory).removeClass("active-link");
        //navbar links - languages
        $(linkEn).removeClass("active-language");
        $(linkEnMobile).removeClass("active-language");
        $(linkFr).addClass("active-language");
        $(linkFrMobile).addClass("active-language");
      },
      afterEnter() {
        //Popup Site Mapping
        $("#site-mapping-btn-orphee-fr").click((e) => {
          $(".popup-site-mapping-container.orphee").show(300);
        });
        $("#popup-site-mapping-close-btn-orphee-fr").click((e) => {
          $(".popup-site-mapping-container.orphee").hide(300);
        });
        $(document).mouseup(function (e) {
          const popupSiteMapping = $(".popup-site-mapping-container.orphee");
          if (
            !popupSiteMapping.is(e.target) &&
            popupSiteMapping.has(e.target).length === 0
          ) {
            popupSiteMapping.hide(300);
          }
        });
      },
    },

    /*PROJECT PAGE - WONDERFOOD - ENGLISH*/
    {
      namespace: "projects-wonderfood-en",
      beforeEnter() {
        //Navbar Animation
        gsap.to(".link-container", { y: 0, stagger: 0.2 });
        //Navbar Style
        $(".main-head").addClass("bottom-shadow");
        $(".main-head-mobile").addClass("bottom-shadow");
        //navbar links
        logo.href = "/index.html";
        logoMobile.href = "/index.html";
        //templatesLink.href = "./index.html";
        linkHome.href = "/index.html";
        linkPortfolio.href = "/en/portfolio/index.html";
        linkStory.href = "/en/story/index.html";
        linkHomeMobile.href = "/index.html";
        linkPortfolioMobile.href = "/en/portfolio/index.html";
        linkStoryMobile.href = "/en/story/index.html";
        linkEn.href = "/en/portfolio/wonderfood.html";
        linkFr.href = "/fr/portfolio/wonderfood.html";
        linkEnMobile.href = "/en/portfolio/wonderfood.html";
        linkFrMobile.href = "/fr/portfolio/wonderfood.html";
        //Text of the nav bar links
        $(linkHome).html("Home");
        $(linkPortfolio).html("Portfolio");
        $(linkStory).html("Story");
        $(linkHomeMobile).html("Home");
        $(linkPortfolioMobile).html("Portfolio");
        $(linkStoryMobile).html("Story");
        //navbar link on hover
        $(linkHome).addClass("on-hover-link");
        $(linkPortfolio).addClass("on-hover-link");
        $(linkStory).addClass("on-hover-link");
        //navbar link active - menu
        $(linkHome).removeClass("active-link");
        $(linkPortfolio).addClass("active-link");
        $(linkStory).removeClass("active-link");
        //navbar links - languages
        $(linkEn).addClass("active-language");
        $(linkEnMobile).addClass("active-language");
        $(linkFr).removeClass("active-language");
        $(linkFrMobile).removeClass("active-language");
      },

      afterEnter() {
        //Popup Site Mapping
        $("#site-mapping-btn-wonderfood").click((e) => {
          $(".popup-site-mapping-container.wonderfood").show(300);
        });
        $("#popup-site-mapping-close-btn-wonderfood").click((e) => {
          $(".popup-site-mapping-container.wonderfood").hide(300);
        });
        $(document).mouseup(function (e) {
          const popupSiteMapping = $(
            ".popup-site-mapping-container.wonderfood"
          );
          if (
            !popupSiteMapping.is(e.target) &&
            popupSiteMapping.has(e.target).length === 0
          ) {
            popupSiteMapping.hide(300);
          }
        });
      },
    },

    /*PROJECT PAGE - WONDERFOOD - FRENCH*/
    {
      namespace: "projects-wonderfood-fr",
      beforeEnter() {
        //Navbar Animation
        gsap.to(".link-container", { y: 0, stagger: 0.2 });
        //Navbar Style
        $(".main-head").addClass("bottom-shadow");
        $(".main-head-mobile").addClass("bottom-shadow");
        //navbar links
        logo.href = "/fr/index.html";
        logoMobile.href = "/fr/index.html";
        //templatesLink.href = "./index.html";
        linkHome.href = "/fr/index.html";
        linkPortfolio.href = "/fr/portfolio/index.html";
        linkStory.href = "/fr/story/index.html";
        linkHomeMobile.href = "/fr/index.html";
        linkPortfolioMobile.href = "/fr/portfolio/index.html";
        linkStoryMobile.href = "/fr/story/index.html";
        linkEn.href = "/en/portfolio/wonderfood.html";
        linkFr.href = "/fr/portfolio/wonderfood.html";
        linkEnMobile.href = "/en/portfolio/wonderfood.html";
        linkFrMobile.href = "/fr/portfolio/wonderfood.html";
        //Text of the nav bar links
        $(linkHome).html("Accueil");
        $(linkPortfolio).html("Portfolio");
        $(linkStory).html("A propos");
        $(linkHomeMobile).html("Accueil");
        $(linkPortfolioMobile).html("Portfolio");
        $(linkStoryMobile).html("A propos");
        //navbar link on hover
        $(linkHome).addClass("on-hover-link");
        $(linkPortfolio).addClass("on-hover-link");
        $(linkStory).addClass("on-hover-link");
        //navbar link active - menu
        $(linkHome).removeClass("active-link");
        $(linkPortfolio).addClass("active-link");
        $(linkStory).removeClass("active-link");
        //navbar links - languages
        $(linkEn).removeClass("active-language");
        $(linkEnMobile).removeClass("active-language");
        $(linkFr).addClass("active-language");
        $(linkFrMobile).addClass("active-language");
      },

      afterEnter() {
        //Popup Site Mapping
        $("#site-mapping-btn-wonderfood-fr").click((e) => {
          $(".popup-site-mapping-container.wonderfood").show(300);
        });
        $("#popup-site-mapping-close-btn-wonderfood-fr").click((e) => {
          $(".popup-site-mapping-container.wonderfood").hide(300);
        });
        $(document).mouseup(function (e) {
          const popupSiteMapping = $(
            ".popup-site-mapping-container.wonderfood"
          );
          if (
            !popupSiteMapping.is(e.target) &&
            popupSiteMapping.has(e.target).length === 0
          ) {
            popupSiteMapping.hide(300);
          }
        });
      },
    },

    /*PROJECT PAGE - ARIANE - ENGLISH*/
    {
      namespace: "projects-ariane-en",
      beforeEnter() {
        //Navbar Animation
        gsap.to(".link-container", { y: 0, stagger: 0.2 });
        //Navbar Style
        $(".main-head").addClass("bottom-shadow");
        $(".main-head-mobile").addClass("bottom-shadow");
        //navbar links
        logo.href = "/index.html";
        logoMobile.href = "/index.html";
        //templatesLink.href = "./index.html";
        linkHome.href = "/index.html";
        linkPortfolio.href = "/en/portfolio/index.html";
        linkStory.href = "/en/story/index.html";
        linkHomeMobile.href = "/index.html";
        linkPortfolioMobile.href = "/en/portfolio/index.html";
        linkStoryMobile.href = "/en/story/index.html";
        linkEn.href = "/en/portfolio/ariane.html";
        linkFr.href = "/fr/portfolio/ariane.html";
        linkEnMobile.href = "/en/portfolio/ariane.html";
        linkFrMobile.href = "/fr/portfolio/ariane.html";
        //Text of the nav bar links
        $(linkHome).html("Home");
        $(linkPortfolio).html("Portfolio");
        $(linkStory).html("Story");
        $(linkHomeMobile).html("Home");
        $(linkPortfolioMobile).html("Portfolio");
        $(linkStoryMobile).html("Story");
        //navbar link on hover
        $(linkHome).addClass("on-hover-link");
        $(linkPortfolio).addClass("on-hover-link");
        $(linkStory).addClass("on-hover-link");
        //navbar link active - menu
        $(linkHome).removeClass("active-link");
        $(linkPortfolio).addClass("active-link");
        $(linkStory).removeClass("active-link");
        //navbar links - languages
        $(linkEn).addClass("active-language");
        $(linkEnMobile).addClass("active-language");
        $(linkFr).removeClass("active-language");
        $(linkFrMobile).removeClass("active-language");
      },
    },

    /*PROJECT PAGE - ARIANE - FRENCH*/
    {
      namespace: "projects-ariane-fr",
      beforeEnter() {
        //Navbar Animation
        gsap.to(".link-container", { y: 0, stagger: 0.2 });
        //Navbar Style
        $(".main-head").addClass("bottom-shadow");
        $(".main-head-mobile").addClass("bottom-shadow");
        //navbar links
        logo.href = "/fr/index.html";
        logoMobile.href = "/fr/index.html";
        //templatesLink.href = "./index.html";
        linkHome.href = "/fr/index.html";
        linkPortfolio.href = "/fr/portfolio/index.html";
        linkStory.href = "/fr/story/index.html";
        linkHomeMobile.href = "/fr/index.html";
        linkPortfolioMobile.href = "/fr/portfolio/index.html";
        linkStoryMobile.href = "/fr/story/index.html";
        linkEn.href = "/en/portfolio/ariane.html";
        linkFr.href = "/fr/portfolio/ariane.html";
        linkEnMobile.href = "/en/portfolio/ariane.html";
        linkFrMobile.href = "/fr/portfolio/ariane.html";
        //Text of the nav bar links
        $(linkHome).html("Accueil");
        $(linkPortfolio).html("Portfolio");
        $(linkStory).html("A propos");
        $(linkHomeMobile).html("Accueil");
        $(linkPortfolioMobile).html("Portfolio");
        $(linkStoryMobile).html("A propos");
        //navbar link on hover
        $(linkHome).addClass("on-hover-link");
        $(linkPortfolio).addClass("on-hover-link");
        $(linkStory).addClass("on-hover-link");
        //navbar link active - menu
        $(linkHome).removeClass("active-link");
        $(linkPortfolio).addClass("active-link");
        $(linkStory).removeClass("active-link");
        //navbar links - languages
        $(linkEn).removeClass("active-language");
        $(linkEnMobile).removeClass("active-language");
        $(linkFr).addClass("active-language");
        $(linkFrMobile).addClass("active-language");
      },
    },

    /*PROJECT PAGE - STORY - ENGLISH*/
    {
      namespace: "about-me-en",
      beforeEnter() {
        //Navbar Animation
        gsap.to(".link-container", { y: 0, stagger: 0.2 });
        //Navbar Style
        $(".main-head").addClass("bottom-shadow");
        $(".main-head-mobile").addClass("bottom-shadow");
        //navbar links
        logo.href = "/index.html";
        logoMobile.href = "/index.html";
        //templatesLink.href = "./index.html";
        linkHome.href = "/index.html";
        linkPortfolio.href = "/en/portfolio/index.html";
        linkStory.href = "/en/story/index.html";
        linkHomeMobile.href = "/index.html";
        linkPortfolioMobile.href = "/en/portfolio/index.html";
        linkStoryMobile.href = "/en/story/index.html";
        linkEn.href = "/en/story/index.html";
        linkFr.href = "/fr/story/index.html";
        linkEnMobile.href = "/en/story/index.html";
        linkFrMobile.href = "/fr/story/index.html";
        //Text of the nav bar links
        $(linkHome).html("Home");
        $(linkPortfolio).html("Portfolio");
        $(linkStory).html("Story");
        $(linkHomeMobile).html("Home");
        $(linkPortfolioMobile).html("Portfolio");
        $(linkStoryMobile).html("Story");
        //navbar link on hover
        $(linkHome).addClass("on-hover-link");
        $(linkPortfolio).addClass("on-hover-link");
        $(linkStory).addClass("on-hover-link");
        //navbar link active - menu
        $(linkHome).removeClass("active-link");
        $(linkPortfolio).removeClass("active-link");
        $(linkStory).addClass("active-link");
        //navbar links - languages
        $(linkEn).addClass("active-language");
        $(linkEnMobile).addClass("active-language");
        $(linkFr).removeClass("active-language");
        $(linkFrMobile).removeClass("active-language");
      },
      afterEnter() {
        //Link To client's review
        $("#link-customer-review-en").click(() => {
          window.location.href =
            "/en/portfolio/thesliderz.html#client-review-en";
        });
      },
    },

    /*PROJECT PAGE - STORY - FRENCH*/
    {
      namespace: "about-me-fr",
      beforeEnter() {
        //Navbar Animation
        gsap.to(".link-container", { y: 0, stagger: 0.2 });
        //Navbar Style
        $(".main-head").addClass("bottom-shadow");
        $(".main-head-mobile").addClass("bottom-shadow");
        //navbar links
        logo.href = "/fr/index.html";
        logoMobile.href = "/fr/index.html";
        //templatesLink.href = "./index.html";
        linkHome.href = "/fr/index.html";
        linkPortfolio.href = "/fr/portfolio/index.html";
        linkStory.href = "/fr/story/index.html";
        linkHomeMobile.href = "/fr/index.html";
        linkPortfolioMobile.href = "/fr/portfolio/index.html";
        linkStoryMobile.href = "/fr/story/index.html";
        linkEn.href = "/en/story/index.html";
        linkFr.href = "/fr/story/index.html";
        linkEnMobile.href = "/en/story/index.html";
        linkFrMobile.href = "/fr/story/index.html";
        //Text of the nav bar links
        $(linkHome).html("Accueil");
        $(linkPortfolio).html("Portfolio");
        $(linkStory).html("A propos");
        $(linkHomeMobile).html("Accueil");
        $(linkPortfolioMobile).html("Portfolio");
        $(linkStoryMobile).html("A propos");
        //navbar link on hover
        $(linkHome).addClass("on-hover-link");
        $(linkPortfolio).addClass("on-hover-link");
        $(linkStory).addClass("on-hover-link");
        //navbar link active - menu
        $(linkHome).removeClass("active-link");
        $(linkPortfolio).removeClass("active-link");
        $(linkStory).addClass("active-link");
        //navbar links - languages
        $(linkEn).removeClass("active-language");
        $(linkEnMobile).removeClass("active-language");
        $(linkFr).addClass("active-language");
        $(linkFrMobile).addClass("active-language");
      },
      afterEnter() {
        //Link To client's review
        $("#link-customer-review-fr").click(() => {
          document.location.href =
            "/fr/portfolio/thesliderz.html#client-review-fr";
        });
      },
    },
  ],
  transitions: [
    {
      leave({ current, next }) {
        let done = this.async();
        //Slider Animation
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.fromTo(
          current.container,
          0.5,
          { opacity: 1 },
          { opacity: 0, onComplete: done }
        );
      },
      enter({ current, next }) {
        let done = this.async();
        //Slider Animation
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.fromTo(
          next.container,
          0.5,
          { opacity: 0 },
          { opacity: 1, onComplete: done }
        );
      },
    },
  ],
});

//GENERAL BARBA HOOKS
//barba.hooks.beforeEnter(() => {});
//barba.hooks.afterEnter(() => {});

// Scroll to the top of the page while entering the page, because if it's not activated
// and that we let the scroll in the middle in the previous container, the next position of the next container will be the same
barba.hooks.enter(() => {
  window.scrollTo(0, 0);
});

// do something before the transition starts
barba.hooks.before(() => {
  document.querySelector("html").classList.add("is-transitioning");
});
// do something after the transition finishes
barba.hooks.after(() => {
  document.querySelector("html").classList.remove("is-transitioning");
});

//do something before DOM's ready
//barba.hooks.beforeLeave(()=>{})

/*
$(document).click(function (event) {
  var text = $(event.target);
  console.log(text);
});
*/

/* TO USE FOR THE MOBILE VERSION!
barba.hooks.afterEnter(() => {
  logo_tl_func()
  hamburger_display_button.onclick = () => {
      opened_nav_buttons.classList.toggle('open')
  };
});*/

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
/*
// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
*/
