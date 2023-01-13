import { Component, h, Host, Prop } from '@stencil/core'
@Component({
  tag: 'ux-carousel-item',
  styleUrl: 'ux-carousel-item.scss'
})
export class UxCarouselItem {
  @Prop() dataButtonLabel: string
  @Prop() dataButtonHref: string
  @Prop() dataTitle?: string
  @Prop() dataDescription?: string
  @Prop() dataDesktopImage?: string
  @Prop() dataMobileImage?: string
  @Prop() dataImageAlt?: string

  render() {
    return (
      <Host>
        <div class="ux-carousel-item">
          <picture class="img-container">
            <source srcSet={this.dataMobileImage} media="(max-width: 768px)" />
            <source srcSet={this.dataDesktopImage} media="(min-width: 1024px)" />
            <img src={this.dataDesktopImage} alt={this.dataImageAlt} class="img" />
          </picture>

          <div class="infos">
            {this.dataTitle && <h2 class="title">{this.dataTitle}</h2>}
            {this.dataDescription && <p class="description">{this.dataDescription}</p>}
            {this.dataButtonLabel && (
              <a href={this.dataButtonHref} class="button">
                {this.dataButtonLabel}
              </a>
            )}
          </div>
        </div>
      </Host>
    )
  }
}
