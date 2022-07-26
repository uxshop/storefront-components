import { newE2EPage } from '@stencil/core/testing';

describe('ux-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ux-banner></ux-banner>');

    const element = await page.find('ux-banner');
    expect(element).toHaveClass('hydrated');
  });
});
