import data from './data.js';
import Services from './Services.js';
import Portfolio from './Portfolio.js';

// ----------------- SERVICES SECTION  ------------------------
 let services = data.services;
services.forEach(el => { 
let servis = new Services(el.font, el.header, el.text);
document.querySelector('.services-content').insertAdjacentHTML('beforeend', servis.render());
});
// --------------------------------------------------

new Portfolio();

// ----------------- PORTFOLIO SECTION  ------------------------

