import { newE2EPage } from "@stencil/core/testing";

describe('ux-showcase-item', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<ux-showcase-item></ux-showcase-item>')

        const element = await page.find('ux-showcase-item')
        expect(element).toHaveClass('hydrated')
    })
})