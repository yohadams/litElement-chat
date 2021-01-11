import { css } from 'lit-element';
import 'material-design-icons/iconfont/material-icons.css';

export const style = css`
  :host {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: .4fr 1fr .5fr;
    grid-auto-rows: 1fr;
    grid-template-areas: 'header-rooms header-chat header-users' 'rooms chat users' 'rooms form users';
    grid-template-rows: 45px 1fr 60px;
    align-items: center;
    justify-items: center;
  }

  #rooms-wrapper {
    grid-area: rooms;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 45px;
    grid-auto-columns: 1fr;
  }

  .header-rooms {
    grid-area: 'header-rooms';
    box-shadow: 0 5px 5px -5px black;
  }

  #chat-wrapper {
    grid-area: chat;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 45px 1fr 60px;
    grid-auto-columns: 1fr;
  }

  .header-chat {
    grid-area: 'header-chat';
    box-shadow: 0 5px 5px -5px black;
  }

  .chat {
    grid-area: chat;
  }

  .form-wrapper {
    grid-area: form;
  }

  #users-wrapper {
    grid-area: users;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 45px;
    grid-auto-columns: 1fr;
  }

  .header-users {
    grid-area: 'header-users';
    box-shadow: 0 5px 5px -5px black;
  }

`;