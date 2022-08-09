import { Component, h, Prop } from "@stencil/core";
import { showcaseSettingsType } from "./ux-showcase-type";
import { Splide } from "@splidejs/splide";

@Component({
    tag: 'ux-showcase',
    styleUrl: 'ux-showcase.scss'
})

export class UxShowcase {

    @Prop() rewind: showcaseSettingsType
    @Prop() autoplay: showcaseSettingsType

    componentDidRender(){
        new Splide('.splide', {
            rewind: eval(this.rewind),
            autoplay: eval(this.autoplay),
            pagination: false,
            perMove: 1,
            perPage: 4,
            breakpoints: {
                768: {
                    perPage: 2,
                },
            }
        }).mount()
    }

    render() {
        return (
            <section class="ux-showcase splide">
                <div class="splide__track">
                    <div class="splide__list">
                        <slot></slot>
                    </div>
                </div>
            </section>
        )
    }
}