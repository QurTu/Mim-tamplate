export default class Services {

    
    constructor(font, header, text) {
        this.font = font;
        this.header = header;
        this.text = text;
     }

        render() { 
           let HTML = '';
            HTML = `<div class='servis'>
            <i class='${this.font}'> </i>
            <div class="line">
            <div class="top"></div>
            </div>
             <div class='head'> ${this.header} </div>
             <div class='text'> ${this.text}</div>
            </div>  ` ;
            return HTML;
        }
}
