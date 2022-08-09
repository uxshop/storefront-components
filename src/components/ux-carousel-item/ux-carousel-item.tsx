import { Component, h, Host, Prop } from "@stencil/core";
import { textAlignType } from "./ux-carousel-item-type";

@Component({
    tag: 'ux-carousel-item',
    styleUrl: 'ux-carousel-item.scss'
})

export class UxCarouselItem {

    @Prop() textAlign?: textAlignType
    @Prop() bannerTitle?: string
    @Prop() description?: string
    @Prop() buttonLabel?: string
    @Prop() buttonHref?: string
    @Prop() desktopSrc?: string
    @Prop() mobileSrc?: string
    @Prop() alt?: string

    render() {
        return (
            <Host class="splide__slide">
                <div class="ux-carousel-item">
                    <picture class="img-container">
                        <source srcSet={this?.mobileSrc} media="(max-width: 768px)" />
                        <source srcSet={this?.desktopSrc} media="(min-width: 1024px)" />
                        <img src={this?.desktopSrc} alt={this?.alt} class="img" />
                    </picture>

                    <div class={`infos ${this?.textAlign}`}>
                        <h2 class="title">{this?.bannerTitle}</h2>
                        <p class="description">{this?.description}</p>
                        <a href={this?.buttonHref} class="button">
                            {this?.buttonLabel}
                        </a>
                    </div>
                </div>
            </Host>
        )
    }
}