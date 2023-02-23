import {LitElement, html} from 'lit';

export class MyElement extends LitElement {
  static properties() {
    return {
    version: {
      type: String,
      reflect: true
    }
  }
  }

  static get styles() {
    return css`
    
img{
  width: 400px;
  border: 10px solid yellow;
}

.card{
  margin-left:96px;
  margin-top:56px;
  border: 12px solid yellow;
  padding: 20px 40px 40px 20px;
  width: 400px;
  background-color:white
}

h4{
  text-align: center;
  font-size: 25px;
}

.description{
  text-align: center;
  color: yellow;
}
p{
  font-size: 12px;
  padding-bottom: 20px;
}
button{
  width: 200px;
  height:50px;
  color: yellow;
  background-color: grey;
  margin: 100px;
}
.btn{
  margin: 8px;
  border: 2px dashed yellow;
  padding: 8px;
  width: 200px;
}

.show {
  visibility:hidden
}
.clone{
  padding:20px, 20px;
}
/* If the screen size is bigger than 500 pixels ans smaller than 800 pixels it only shows the button*/
@media screen and (min-device-width: 500px) and (max-device-width: 800px) {
  .card{
    display: none;
  }
}
/*resize the card into a portable size if the device is smaller than 500 px
*/
@media screen and (max-width: 500px) {
    .card{
        max-width:200px;
      padding: 8px 16px 16px 8px;
    }
}

    `;
  }

  constructor() {
    super();
    this.name = "Cyber Chad";
    this.gameT = "NBA FINALS 2022 Warriors vs Celtics"
    this.score = "Game score"
  }

  render() {
    return html`

    
<div class="card">
  <style>
    button:hover {
      background-color: blue;
    }

    button:focus {
      background-color: blue;
    }
  </style>
 <img src="https://sportshub.cbsistatic.com/i/r/2022/06/10/139ab78f-d458-4a66-9179-0312585bfbfa/thumbnail/1200x675/f403faf31c079bf1f1206f8e8b96660e/tastumcbs.jpg">
    <div class="heading">
      <h4><b>${this.gamet}</b></h4>
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
customElements.define('my-element', MyElement);
