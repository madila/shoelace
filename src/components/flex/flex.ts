import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { watch } from '../../internal/watch';
import ShoelaceElement from '../../internal/shoelace-element';
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
  @property() gap = null;
  @property() wrap = null;
  @property() alignItems = 'flex-start';
  @property() justify = 'flex-start';

  @watch('row')
  directionChanged() {
    this.emit('sl-layout-direction-changed');
  }

  render() {
    return html` <div part="base" class="flex-container"><slot></slot></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sl-flex': SlFlex;
  }
}
