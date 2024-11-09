"use strict";
//-------------- ref section ---------------------
let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
//-------------- exp section ---------------------
let exp_section = document.getElementById('experience');
let exp_btn = document.getElementById('exp_btn');
exp_btn?.addEventListener('click', () => {
    exp_section.classList.toggle('hide');
});
//-------------- print section ---------------------
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
//-------------- language expertise section ---------------------
let lang_section = document.getElementById('language');
let lang_btn = document.getElementById('lang_btn');
lang_btn?.addEventListener('click', () => {
    lang_section?.classList.toggle('hide');
});
//-------------- contact section ---------------------
let contact_section = document.getElementById('contact');
let contact_btn = document.getElementById('contact_btn');
contact_btn?.addEventListener('click', () => {
    contact_section?.classList.toggle('hide');
});
//-------------- education section ---------------------
let edu_section = document.getElementById('education');
let edu_btn = document.getElementById('edu_btn');
edu_btn?.addEventListener('click', () => {
    edu_section?.classList.toggle('hide');
});
//-------------- expertise section ---------------------
let expertise_section = document.getElementById('expertise');
let expertise_btn = document.getElementById('expertise_btn');
expertise_btn?.addEventListener('click', () => {
    expertise_section?.classList.toggle('hide');
});
