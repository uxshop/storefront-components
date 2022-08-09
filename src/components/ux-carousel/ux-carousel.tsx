import { Component, h, Prop } from "@stencil/core"
import { carouselSettngsType } from "./ux-carousel-type"
import Splide from '@splidejs/splide'
@Component({
    tag: 'ux-carousel',
    styleUrl: 'ux-carousel.scss',
})

export class UxCarousel {
    @Prop() rewind: carouselSettngsType
    @Prop() autoplay: carouselSettngsType
    @Prop() arrows: carouselSettngsType
    @Prop() pagination: carouselSettngsType

    componentDidRender() {
        new Splide('.splide', {
            rewind: eval(this.rewind),
            autoplay: eval(this.autoplay),
            arrows: eval(this.arrows),
            pagination: eval(this.pagination)
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