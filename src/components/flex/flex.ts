import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import ShoelaceElement from '../../internal/shoelace-element';
import { watch } from '../../internal/watch';
import styles from './flex.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @since 2.0
 * @status experimental
 *
 * @dependency sl-example
 *
 * @event sl-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('sl-flex')
export default class SlFlex extends ShoelaceElement {
  static styles: CSSResultGroup = styles;

  /** An example property. */
  @property() direction = 'row';
  @property() align = 'flex-start';
  @property() justify = 'flex-start';

  @watch('row')
  doSomething() {
    // Example event
    this.emit('sl-layout');
  }

  render() {
    return html` <div class="flex-container"><slot></slot></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sl-flex': SlFlex;
  }
}
