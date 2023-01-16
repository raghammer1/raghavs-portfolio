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
const skillsSec = document.querySelector('#skills');
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
