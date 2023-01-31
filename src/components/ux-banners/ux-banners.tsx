import { Component, h, Prop, State, Watch } from '@stencil/core'
import { BannerImages } from './ux-banners-type'

@Component({
  tag: 'ux-banners',
  styleUrl: 'ux-banners.scss'
})
export class UxBanners {
  @State() images: BannerImages[]
  @Prop() dataImages: string

  componentWillLoad() {
    this.images = JSON.parse(this.dataImages)
  }

  @Watch('dataImages')
  watchPropHandler(newValue: string) {
    this.images = JSON.parse(newValue)
  }

  render() {
    return (
      <section class="ux-banners">
        {this.images &&
          this.images.map(
            image =>
              (image.srcDesktop || image.srcMobile) && (
                <a key={`${new Date().getTime()}-ux-banner`} class="ux-banners-link" href={image?.href}>
                  <picture>
                    <source srcSet={image?.srcMobile} media="(max-width: 768px)" />
                    <source srcSet={image?.srcDesktop} media="(min-width: 769px)" />
                    <img class="ux-banners-link-img" src={image?.srcDesktop || image?.srcMobile} />
                  </picture>
                </a>
              )
          )}
      </section>
    )
  }
}
