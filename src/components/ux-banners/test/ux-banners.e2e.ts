import { newE2EPage } from '@stencil/core/testing';

describe('ux-banners', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ux-banners></ux-banners>');

    const element = await page.find('ux-banners');
    expect(element).toHaveClass('hydrated');
  });
});
