import { h } from "@stencil/core"
import { newSpecPage } from "@stencil/core/testing" 
import { UxTestimonials } from "../ux-testimonials"

describe('ux-testimonials', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UxTestimonials],
            html: `<ux-testimonials></ux-testimonials>`,
            template: () => (<ux-testimonials title="" description="" testimonials-list="[]"></ux-testimonials>)
        })
        expect(page.root).toBeTruthy()
    })
})