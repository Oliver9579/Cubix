/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {css, html, LitElement} from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class PodiumComponent extends LitElement {
  static get styles() {
    return css`
        :host {
            display: block;
            border: solid 1px rgba(0, 0, 0, 0.5);;
            max-width: 400px;
            border-radius: 10px;
            font-family: 'Roboto', sans-serif;
            color: rgba(0, 0, 0, 0.5);
            margin-bottom: 20px;
        }

        .title {
            background-color: rgba(211, 211, 211, 0.7);
            padding: 20px;
            border-radius: 10px 10px 0px 0px;
            text-align: center;
            margin: 0;
        }

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        
        li {
            padding: 14px 12px;
            border-top: solid 1px rgba(0, 0, 0, 0.5);
        }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <p class="title">Podium</p>
      </div>
      <ul>
        <li>
          <slot name="first"></slot>
        </li>
        <li>
          <slot name="second"></slot>
        </li>
        <li>
          <slot name="third"></slot>
        </li>
      </ul>
    `;
  }
}

window.customElements.define('podium-component', PodiumComponent);
