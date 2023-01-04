import { Component, h, Prop } from '@stencil/core'
import { sideType } from './ux-text-image-type'

@Component({
  tag: 'ux-text-image',
  styleUrl: 'ux-text-image.scss'
})
export class UxTextImage {
  @Prop() dataImage?: string
  @Prop() dataTitle?: string
  @Prop() dataDescription?: string
  @Prop() dataButtonHref?: string
  @Prop() dataButtonLabel?: string
  @Prop() dataSide?: sideType

  render() {
    return (
      <section class="ux-text-image">
        <div class={`container${this.dataSide ? ` ${this.dataSide}` : ' left'}`}>
          <div class="image-container">
            <img src={this.dataImage} alt={this.dataTitle} class="img" loading="lazy" />
          </div>
          <div class="infos">
            <h2 class="title">{this.dataTitle}</h2>
            <p class="description">{this.dataDescription}</p>
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
