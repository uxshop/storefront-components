import { newSpecPage } from "@stencil/core/testing" 
import { UxCarouselItem } from "../ux-carousel-item"


describe('ux-carouse-item', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UxCarouselItem],
            html: `<ux-carousel-item></ux-carousel-item>`,
        })
        expect(page.root).toBeTruthy()
    })
})