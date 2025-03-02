import {
  SlSelect
} from "./chunk.NHQMO34M.js";

// src/react/select/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var select_default = createComponent({
  tagName: "sl-select",
  elementClass: SlSelect,
  react: React,
  events: {
    onSlChange: "sl-change",
    onSlClear: "sl-clear",
    onSlInput: "sl-input",
    onSlFocus: "sl-focus",
    onSlBlur: "sl-blur",
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide"
  }
});

export {
  select_default
};
