import {
  component_styles_default
} from "./chunk.3I6BK3KY.js";
import {
  i
} from "./chunk.CBCVEM3I.js";

// src/components/tree/tree.styles.ts
var tree_styles_default = i`
  ${component_styles_default}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;

export {
  tree_styles_default
};
