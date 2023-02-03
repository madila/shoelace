import {
  visually_hidden_styles_default
} from "./chunk.SW2K4CTZ.js";
import {
  ShoelaceElement,
  e
} from "./chunk.2TGDKYZZ.js";
import {
  y
} from "./chunk.CBCVEM3I.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/visually-hidden/visually-hidden.ts
var SlVisuallyHidden = class extends ShoelaceElement {
  render() {
    return y` <slot></slot> `;
  }
};
SlVisuallyHidden.styles = visually_hidden_styles_default;
SlVisuallyHidden = __decorateClass([
  e("sl-visually-hidden")
], SlVisuallyHidden);

export {
  SlVisuallyHidden
};
