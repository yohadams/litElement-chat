import { LitElement, html, css } from 'lit-element';
import { style }  from './ch-login.style';
import { get, translate } from "lit-translate";
import { Router } from '@vaadin/router';
import { login } from '../../services/login';

export class ChLogin extends LitElement {
  constructor() {
    super();
    this.username = '';
    this.formLock = false;
  }

  static get properties() {
    return {
      username: { type: String },
      formLock: { type: Boolean },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    if (window.localStorage.getItem('username')) {
      Router.go('/chat');
    }
  }

  static get styles() {
    return css`${style}`;
  }

  setUsername(event) {
    this.username = event.target.value;
  }

  sendLogin() {
    this.formLock = true;
    login(this.username)
    .then((response) => {
      if (response.status === 'success') {
        console.log('redirect to a chat page');
        window.localStorage.setItem('username', this.username);
        this.formLock = false;
      } else {
        console.error(response.message);
        this.formLock = false;
      }
    })
    .catch(error => { 
      console.error(error);
      this.formLock = false;
    });
  }

  render() {
    return html`
      <div id="login-wrapper">
        <label for="username">Enter your username:</label>
        <input .disabled="${this.formLock}" type="text" name="username" @input="${this.setUsername}"/>
        <button .disabled="${this.formLock}" @click="${this.sendLogin}">Enter chat</button>
      </div>
    `;
  }
}

customElements.define('ch-login', ChLogin);
