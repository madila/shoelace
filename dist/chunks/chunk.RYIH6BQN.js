import {
  component_styles_default
} from "./chunk.3I6BK3KY.js";
import {
  i
} from "./chunk.CBCVEM3I.js";

// src/components/menu/menu.styles.ts
var menu_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;

export {
  menu_styles_default
};
