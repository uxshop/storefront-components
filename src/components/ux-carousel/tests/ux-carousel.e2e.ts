import { newE2EPage } from "@stencil/core/testing";

describe('ux-carousel', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<ux-carousel></ux-carousel>')

        const element = await page.find('ux-carousel')
        expect(element).toHaveClass('hydrated')
    })
})