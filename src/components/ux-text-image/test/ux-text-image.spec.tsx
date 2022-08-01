import { h } from "@stencil/core"
import { newSpecPage } from "@stencil/core/testing" 
import { UxTextImage } from "../ux-text-image"

describe('ux-text-image', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UxTextImage],
            html: `<ux-text-image></ux-text-image>`,
            template: () => (<ux-text-image content-list="[]" side={"left" || "right"}></ux-text-image>)
        })
        expect(page.root).toBeTruthy()
    })
})