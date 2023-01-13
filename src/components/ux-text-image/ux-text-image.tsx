import { Component, h, Prop } from '@stencil/core'
import { sideType } from './ux-text-image-type'

@Component({
  tag: 'ux-text-image',
  styleUrl: 'ux-text-image.scss'
})
export class UxTextImage {
  @Prop() dataTitle: string
  @Prop() dataSubtitle: string
  @Prop() dataDescription: string
  @Prop() dataImage: string
  @Prop() dataButtonHref?: string
  @Prop() dataButtonLabel: string
  @Prop() dataPosition?: sideType

  render() {
    return (
      <section class="ux-text-image">
        <div class={`container${this.dataPosition ? ` ${this.dataPosition}` : ' left'}`}>
          <div class="image-container">
            <img src={this.dataImage} alt={this.dataTitle} class="img" loading="lazy" />
          </div>
          <div class="infos">
            <h2 class="title">{this.dataTitle}</h2>
            <p class="description">
              <b>{this.dataSubtitle}</b>
              {this.dataDescription}
            </p>
            {this.dataButtonLabel && (
              <a target="_blank" rel="noreferrer noopener" href={this.dataButtonHref} class="button">
                {this.dataButtonLabel}
              </a>
            )}
          </div>
        </div>
      </section>
    )
  }
}
