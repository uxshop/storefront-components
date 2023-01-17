import { Component, h, Host, Prop } from '@stencil/core'
@Component({
  tag: 'ux-carousel-item',
  styleUrl: 'ux-carousel-item.scss'
})
export class UxCarouselItem {
  @Prop() dataButtonLabel: string
  @Prop() dataButtonHref: string
  @Prop() dataTitle: string
  @Prop() dataDescription: string
  @Prop() dataDesktopImage: string
  @Prop() dataMobileImage: string
  @Prop() dataImageAlt: string
  @Prop() dataButtonColor: string
  @Prop() dataFontColor: string
  @Prop() dataFontButtonColor: string
  @Prop() dataShouldCenterInfos: boolean

  render() {
    return (
      <Host class="splide__slide__container">
        <div class="ux-carousel-item">
          <picture class="img-container">
            <source srcSet={this.dataMobileImage} media="(max-width: 768px)" />
            <source srcSet={this.dataDesktopImage} media="(min-width: 1024px)" />
            <img src={this.dataDesktopImage} alt={this.dataImageAlt} class="img" />
          </picture>

          <div style={{ color: this.dataFontColor }} class={`infos ${this.dataShouldCenterInfos ? 'center' : ''}`}>
            {this.dataTitle && <h2 class="title">{this.dataTitle}</h2>}
            {this.dataDescription && <p class="description">{this.dataDescription}</p>}
            {this.dataButtonLabel && (
              <a href={this.dataButtonHref} class="button" style={{ color: this.dataFontButtonColor, backgroundColor: this.dataButtonColor }}>
                {this.dataButtonLabel}
              </a>
            )}
          </div>
        </div>
      </Host>
    )
  }
}
