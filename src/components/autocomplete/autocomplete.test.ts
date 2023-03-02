import { expect, fixture, html } from '@open-wc/testing';

describe('<sl-autocomplete>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sl-autocomplete></sl-autocomplete> `);

    expect(el).to.exist;
  });
});
