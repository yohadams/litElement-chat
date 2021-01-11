import { LitElement, html, css } from 'lit-element';
import { registerTranslateConfig } from "lit-translate";
import { use } from "lit-translate";
import { Router } from '@vaadin/router';
import './pages';

registerTranslateConfig({
    loader: lang => fetch(`/translate/${lang}.json`).then(res => res.json())
});

class ChatApp extends LitElement {
    constructor(){
        super();
    }

    connectedCallback () {
        use("pl");
        super.connectedCallback();
      }

    firstUpdated() {
        const router = new Router(this.shadowRoot.querySelector('#router-outlet'));

        router.setRoutes([
            { path: '/', component: 'ch-login' },
            { path: '/chat', component: 'ch-main' },
        ]);

        
    }

    render() {
        return html`
        <div id="router-outlet"></div>
        `;
    }
}

customElements.define('chat-app', ChatApp);
