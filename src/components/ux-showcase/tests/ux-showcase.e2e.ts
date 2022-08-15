import { newE2EPage } from "@stencil/core/testing";

describe('ux-showcase', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<ux-showcase></ux-showcase>')

        const element = await page.find('ux-showcase')
        expect(element).toHaveClass('hydrated')
    })
})