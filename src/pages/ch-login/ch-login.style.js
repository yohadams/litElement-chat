import { css } from 'lit-element';
import 'material-design-icons/iconfont/material-icons.css';

export const style = css`
  :host {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: '. . .' ' . login .' '. . .';
    align-items: center;
    justify-items: center;
  }

  #login-wrapper {
    grid-area: login;
    height: 120px;
    width: 100%;
    border: 1px whitesmoke solid;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
    font-size: 2rem;
  }


`;