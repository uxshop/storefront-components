import { newSpecPage } from "@stencil/core/testing" 
import { UxShowcaseItem } from "../ux-showcase-item"


describe('ux-showcase-item', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UxShowcaseItem],
            html: `<ux-showcase-item></ux-showcase-item>`,
        })
        expect(page.root).toBeTruthy()
    })
})