import { newSpecPage } from '@stencil/core/testing';
import { UxBanners } from '../ux-banners';

describe('ux-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UxBanners],
      html: `<ux-banner></ux-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <ux-banners>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ux-banners>
    `);
  });
});
