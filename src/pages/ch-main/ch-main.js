import { LitElement, html, css } from 'lit-element';
import { style }  from './ch-main.style';
import { get, translate } from "lit-translate";

export class ChMain extends LitElement {
  constructor() {
    super();
    this.username = window.localStorage.getItem('username');
    this.currentRoom = '';
  }

  static get properties() {
    return {
      currentRoom: { type: String },
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  static get styles() {
    return css`${style}`;
  }

  render() {
    return html`
      <div class="header-chat">aaa</div>
      <div class="header-rooms">aaa</div>
      <div class="header-users">aaa</div>

      <div id="rooms-wrapper"></div>
      <div id="chat-wrapper"></div>
      <div id="users-wrapper"></div>
    `;
  }
}

customElements.define('ch-main', ChMain);
