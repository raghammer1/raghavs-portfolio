'use strict';

const nav = document.querySelector('.main-nav');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

console.log(nav, header, navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) header.classList.add('sticky-header');
  else nav.classList.remove('sticky-header');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
/////////////// //////////////////////////////////
// Creating smooth scrolling

const homebtn = document.querySelector('.home');
const aboutbtn = document.querySelector('.about');
const expbtn = document.querySelector('.experience');
const skillbtn = document.querySelector('.skills');
const projbtn = document.querySelector('.projects');
const homeSection = document.querySelector('#hi');
const featureSec = document.querySelector('#about-me');
const expSec = document.querySelector('#experience');
const skillsSec = document.querySelector('#section--2');
const projectSec = document.querySelector('#projects');

homebtn.addEventListener('click', function (e) {
  const s1coords = homeSection.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

aboutbtn.addEventListener('click', function (e) {
  const s1coords = featureSec.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

expbtn.addEventListener('click', function (e) {
  const s1coords = expSec.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

skillbtn.addEventListener('click', function (e) {
  const s1coords = skillsSec.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

projbtn.addEventListener('click', function (e) {
  const s1coords = projectSec.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

/////////////// //////////////////////////////////
//SKILLS//SKILLS//
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  tabsContent.forEach((c) => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
/////////////// //////////////////////////////////
//REVEALING SECTION//REVEALINGSECTIONS
// const allSections = document.querySelectorAll('.section-new');
// const revealSection = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove('section--hidden');
//   observer.unobserve(entry.target);
// };
// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.1,
//   behavior: 'smooth',
// });
// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add('section--hidden');
// });

/////////////// //////////////////////////////////
//lazy loading images //
const imageTargets = document.querySelectorAll('img[data-src]');

// imageTargets.forEach.classList.add('lazy-img');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imageTargets.forEach((img) => imageObserver.observe(img));
