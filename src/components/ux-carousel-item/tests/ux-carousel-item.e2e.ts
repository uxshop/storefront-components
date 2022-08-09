import { newE2EPage } from "@stencil/core/testing";

describe('ux-carousel-item', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<ux-carousel-item></ux-carousel-item>')

        const element = await page.find('ux-carousel-item')
        expect(element).toHaveClass('hydrated')
    })
})