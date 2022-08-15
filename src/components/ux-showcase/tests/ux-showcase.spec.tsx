import { newSpecPage } from "@stencil/core/testing" 
import { UxShowcase } from "../ux-showcase"

describe('ux-showcase', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UxShowcase],
            html: `<ux-showcase></ux-showcase>`,
        })
        expect(page.root).toBeTruthy()
    })
})