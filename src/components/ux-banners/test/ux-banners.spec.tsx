import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { UxBanners } from '../ux-banners';

describe('ux-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UxBanners],
      html: `<ux-banners></ux-banners>`,
      template: () => ( <ux-banners images-list="[]"></ux-banners>)
    });
    expect(page.root).toBeTruthy()
  });
});
