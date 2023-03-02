import '../dropdown/dropdown';
import '../menu-item/menu-item';
import '../menu/menu';
import { LitElement } from 'lit';
import type { CSSResultGroup } from 'lit';
import type SlDropdown from '../dropdown/dropdown';
import type SlMenu from '../menu/menu';
import type SlMenuItem from '../menu-item/menu-item';
export default class SlAutocomplete extends LitElement {
    static styles: CSSResultGroup;
    menu: SlMenu;
    dropdown: SlDropdown;
    defaultSlot: HTMLSlotElement;
    private readonly hasSlotController;
    private value;
    private hasFocus;
    emptyText: string;
    loading: boolean;
    loadingText: string;
    autofilter: boolean;
    highlight: boolean;
    threshold: number;
    handleSlInput(event: CustomEvent): void;
    handleKeydown(event: KeyboardEvent): void;
    handleSlFocus(): void;
    handleSlAfterHide(): void;
    show(): void;
    hide(): void;
    reset(): void;
    get options(): SlMenuItem[];
    get visibleOptions(): SlMenuItem[];
    get hasResults(): boolean;
    get shouldDisplayLoadingText(): string | boolean;
    get shouldDisplayEmptyText(): string | boolean;
    get shouldDisplayAutoComplete(): string | boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-autocomplete': SlAutocomplete;
    }
}
