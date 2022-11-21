import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */

  :host {
    display: flex;
    --gap: 0;
    --column-gap: var(--gap);
    --row-gap: var(--gap);
  }

  :host .flex-container {
    display: flex;
    flex: 1;
    gap: var(--gap);
    column-gap: var(--column-gap);
    row-gap: var(--row-gap);
  }

  :host([direction="column"]) .flex-container {
    flex-direction: column;
    flex: 1;
  }

  :host([gap]) {
    --gap: 1rem;
  }

  :host([justify="center"]) .flex-container {
    justify-content: center;
  }

  :host([justify="space-between"]) .flex-container {
    justify-content: space-between;
  }

  :host([justify="space-around"]) .flex-container {
    justify-content: space-around;
  }

  :host([align-items="space-evenly"]) .flex-container {
    justify-content: space-evenly;
  }

    :host([align-items="center"]) .flex-container {
      align-items: center;
    }

    :host([align-items="start"]) .flex-container {
      align-items: flex-start;
    }

    :host([align-items="end"]) .flex-container {
      align-items: flex-end;
    }

    :host([align-items="baseline"]) .flex-container {
      align-items: baseline;
    }

  /* If the selector was .flex-gap > *, it wouldn't override when components have a margin 0 specified by a single
   * class selector, specificity is equal. Both are one class. Neither > nor * contribute to specificity.
   * We need to make it more specific, so we raise it by 1 class.
   */
  :host([gap]) .flex-container > * {
    /* apply half of the gap to each side of every item */
    margin: calc(var(--row-gap) / 2) calc(var(--column-gap) / 2);
  }
`;
