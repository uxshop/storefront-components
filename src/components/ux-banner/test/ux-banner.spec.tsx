import { newSpecPage } from '@stencil/core/testing';
import { UxBanner } from '../ux-banner';

describe('ux-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UxBanner],
      html: `<ux-banner></ux-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <ux-banner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ux-banner>
    `);
  });
});
