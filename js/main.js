import services from './data.js';
import Services from './Services.js';

// ----------------- SERVICES SECTION  ------------------------
services.forEach(el => { 
let servis = new Services(el.font, el.header, el.text);
document.querySelector('.services-content').insertAdjacentHTML('beforeend', servis.render());
});
// --------------------------------------------------

