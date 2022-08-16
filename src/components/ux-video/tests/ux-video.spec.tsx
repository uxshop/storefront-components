import { newSpecPage } from "@stencil/core/testing" 
import { UxVideo } from "../ux-video"

describe('ux-video', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UxVideo],
            html: `<ux-video></ux-video>`
        })
        expect(page.root).toBeTruthy()
    })
})