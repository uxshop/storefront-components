import { newE2EPage } from "@stencil/core/testing";

describe('ux-video', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<ux-video></ux-video>')

        const element = await page.find('ux-video')
        expect(element).toHaveClass('hydrated')
    })
})