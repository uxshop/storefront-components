import { newE2EPage } from "@stencil/core/testing";

describe('ux-text-image', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<ux-text-image></ux-text-image>')

        const element = await page.find('ux-text-image')
        expect(element).toHaveClass('hydrated')
    })
})