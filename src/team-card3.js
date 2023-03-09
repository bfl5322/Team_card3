import {LitElement, html, css} from 'lit';

import "@lrnwebcomponents/meme-maker/meme-maker.js";

const Cyber = ("https://sportshub.cbsistatic.com/i/r/2022/06/10/139ab78f-d458-4a66-9179-0312585bfbfa/thumbnail/1200x675/f403faf31c079bf1f1206f8e8b96660e/tastumcbs.jpg");

export class TeamCard extends LitElement {
  static get properties() {
    return {
    name: {
      type: String,
      reflect: true
    },
    fname: { type: String},
      position: {
        type: String,
      },
      top: { type: String},
      gamet: { type: String},
      accentColor: {
        type: String,
        reflect: true,
        attribute: 'accent-color'
  },
  }
};

  static get styles() {
    return css`
    :host([accent-color="blue"]) .card {
      background-color: blue;
      color: white;
    }
    :host([accent-color="red"]) .card {
      background-color: red;
      color: white;
    }
    :host([accent-color="green"]) .card {
      background-color: green;
      color: white;
    }
    


.card{
  display: inline-block;
  margin: 20px;
  border : 6px solid green;
  outline: 6px solid yellow;
  padding: 20px 8px 20px 8px;
  width: 500px;
  text-align: center;
  background-color: green;
}
img{
  align-items: center;
  width: 100%;
  border: 10px solid yellow;
}
h4{
  text-align: center;
  font-size: 25px;
}


p{
  font-size: 12px;
  padding-bottom: 20px;
}

.clone{
  padding:20px, 20px;
}
/* If the screen size is bigger than 500 pixels ans smaller than 800 pixels it only shows the button*/
/* @media screen and (min-device-width: 500px) and (max-device-width: 800px) {
  .card{
    display: none;
  }
} */
/*resize the card into a portable size if the device is smaller than 500 px
*/
/* @media screen and (max-width: 500px) {
    .card{
        max-width:200px;
      padding: 8px 16px 16px 8px;
    }
} */

    `;
  }

  constructor() {
    super();
    this.accentColor = null;
    this.name = "Cyber Cyver";
    this.gameT = "NBA FINALS 2022 Warriors vs Celtics";
    this.score = "Game score";
    this.top = "HAHA";
  }

  toggleDetails() {
    this.showDetails.querySelector('.details').toggleAttribute('open');
  }
  
  render() {
    return html`

    
<div class="card">
    <div class="heading">
      <h4>${this.gameT}</h4>
      <meme-maker
        image-url="${Cyber}"
        top-text="${this.top}"
      >
     </meme-maker>

      
      <details class="details">
          <summary>${this.score}</summary>
          <div>
            <slot></slot>
          </div>
      </details>
    </div>
    </div>


    `;
  }
}
customElements.define('team-card3', TeamCard);



