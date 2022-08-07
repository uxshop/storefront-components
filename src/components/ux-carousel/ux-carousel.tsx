import { Component, h, Prop, State } from "@stencil/core"
import { carouselContentType, carouselSettingsType, textAlignType } from "./ux-carousel-type"
import Splide from '@splidejs/splide'

@Component({
    tag: 'ux-carousel',
    styleUrl: 'ux-carousel.scss',
})

export class UxCarousel {
    @State() carouselList: carouselContentType[]
    @State() carouselSettings: carouselSettingsType

    @Prop() contentList: string
    @Prop() settings: string
    @Prop() textAlign: textAlignType
    
    componentWillLoad() {
        this.carouselList = eval(this.contentList)
        this.carouselSettings = JSON.parse(this.settings)
    }

    componentDidRender() {
        new Splide('.splide', {...this.carouselSettings}).mount();
    }

    render() {
        return (
            <section class="ux-carousel splide">
                <div class="splide__track">
                    <div class="splide__list">
                        {this.carouselList.map(slide => {
                            return(
                                <div class="splide__slide">
                                    <picture class="img-container">
                                        <source srcSet={slide.image?.mobileSrc} media="(max-width: 768px)"/>
                                        <source srcSet={slide.image?.desktopSrc} media="(min-width: 1024px)"/>
                                        <img src={slide.image?.desktopSrc} alt={slide.image?.alt} class="img"/>
                                    </picture>

                                    <div class={`infos ${this.textAlign}`}>
                                        <h2 class="title">{slide?.title}</h2>
                                        <p class="description">{slide?.description}</p>
                                        <a href={slide?.button?.href} class="button">
                                            {slide?.button?.label}
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}