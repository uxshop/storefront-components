import { Component, h, Host, Prop } from '@stencil/core';
@Component({
  tag: 'ux-carousel-item',
  styleUrl: 'ux-carousel-item.scss'
})
export class UxCarouselItem {
  @Prop() dataTitle?: string;
  @Prop() dataDescription?: string;
  @Prop() dataButtonLabel?: string;
  @Prop() dataButtonHref?: string;
  @Prop() dataDesktopImage?: string;
  @Prop() dataMobileImage?: string;

  render() {
    return (
      <Host class="splide__slide">
        <div class="ux-carousel-item">
          <picture class="img-container">
            <source srcSet={this.dataMobileImage} media="(max-width: 768px)" />
            <source srcSet={this.dataDesktopImage} media="(min-width: 1024px)" />
            <img src={this.dataDesktopImage} alt={null} class="img" />
          </picture>

          <div class="infos">
            <h2 class="title">{this.dataTitle}</h2>
            <p class="description">{this.dataDescription}</p>
            <a href={this.dataButtonHref} class="button">
              {this.dataButtonLabel}
            </a>
          </div>
        </div>
      </Host>
    );
  }
}
