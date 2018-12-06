import React from 'react';

export default class Greeting extends React.Component {
  constructor(){
    super();
    // console.log('loading');
    console.warn('uu', document.querySelector('body').querySelector('my-component'));
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `<h1>Hello, whatever</h1>`;
  }
}
