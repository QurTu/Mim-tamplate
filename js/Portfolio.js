import data from './data.js';

export default class Portfolio { 
    
    constructor() {
        this.data =  data.portfolio;
        this.renderFilter("all");
        this.eventLisiner();
       
       
     }


     eventLisiner() { 
        const fillerArray = document.querySelectorAll('.type');
        for( let i =0 ; i < fillerArray.length ; i++){
            fillerArray[i].addEventListener('click', (e) => {    
                console.log(e.target.dataset.set); 
                this.renderFilter(e.target.dataset.set);
            })
        }
        
      }

       renderFilter(filter) {
        let HTML = '';
        document.querySelector('.galley-picture').innerHTML = HTML;
        for(let i = 0; i < this.data.length; i++) {
              if(this.data[i].category.includes(filter)) {
                HTML = `
                <div class="span${this.data[i].size}">
                <img src="${this.data[i].img}" alt="portfolio img">
                <div class="gallery-overlay">
                <div > 
                 <h3> ${this.data[i].name} </h3>
                <i class="gallery-down fa fa-chain-broken" ></i>
                <i class="gallery-zoom fa fa-search-plus" aria-hidden="true"></i>
               </div>
                </div>
                </div>`
            document.querySelector('.galley-picture').insertAdjacentHTML('beforeend' , HTML)
            }
               
           
        }


}

}


