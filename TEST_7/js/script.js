import { createNavbar } from '/TEST_7/components/navbar.js';
import { createHomePage } from '/components/home.js';
import { createSignupPage } from '/js/signup.js';
import { createLoginPage } from '/js/login.js';
import { createAddPlacePage } from '/js/addPlace.js';

const navbar = document.getElementById('navbar');
const content = document.getElementById('content');

const pageCreators = {
    home: createHomePage,
    signup: createSignupPage,
    login: createLoginPage,
    addplace: createAddPlacePage,
};

const loadPage=(page) =>{
    const createPage = pageCreators[page] || createHomePage;
    createPage(content);
}

window.addEventListener('load', () => {
    createNavbar(navbar, loadPage);
    loadPage('home');
});
