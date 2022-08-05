import { newE2EPage } from "@stencil/core/testing";

describe('ux-testimonials', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<ux-testimonials></ux-testimonials>')

        const element = await page.find('ux-testimonials')
        expect(element).toHaveClass('hydrated')
    })
})