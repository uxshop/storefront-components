import { Component, h, Prop } from "@stencil/core"
import Splide from '@splidejs/splide'
@Component({
    tag: 'ux-carousel',
    styleUrl: 'ux-carousel.scss',
})

export class UxCarousel {
    @Prop() rewind: boolean
    @Prop() autoplay: boolean
    @Prop() arrows: boolean
    @Prop() pagination: boolean

    componentDidRender() {
        new Splide('.splide', {
            rewind: this?.rewind,
            autoplay: this?.autoplay,
            arrows: this?.arrows,
            pagination: this?.pagination
        }).mount();
    }

    render() {
        return (
            <section class="ux-carousel splide">
                <div class="splide__track">
                    <div class="splide__list">
                        <slot></slot>
                    </div>
                </div>
            </section>
        )
    }
}