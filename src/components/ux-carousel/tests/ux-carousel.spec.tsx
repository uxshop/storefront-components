import { newSpecPage } from "@stencil/core/testing" 
import { UxCarousel } from '../ux-carousel'

describe('ux-carousel', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UxCarousel],
            html: `<ux-carousel></ux-carousel>`,
        })
        expect(page.root).toBeTruthy()
    })
})