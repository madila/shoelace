import {
  menu_label_styles_default
} from "./chunk.HEV4VL3P.js";
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

// src/components/menu-label/menu-label.ts
var SlMenuLabel = class extends ShoelaceElement {
  render() {
    return y` <slot part="base" class="menu-label"></slot> `;
  }
};
SlMenuLabel.styles = menu_label_styles_default;
SlMenuLabel = __decorateClass([
  e("sl-menu-label")
], SlMenuLabel);

export {
  SlMenuLabel
};
