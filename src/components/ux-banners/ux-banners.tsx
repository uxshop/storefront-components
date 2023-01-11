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
                <a key={`${new Date().getTime()}-ux-banner`} class="link" href={image?.href}>
                  <picture>
                    <source srcSet={image?.srcMobile} media="(max-width: 1024px)" />
                    <source srcSet={image?.srcDesktop} media="(min-width: 1024px)" />
                    <img class="img" src={image?.srcDesktop || image?.srcMobile} alt={image?.alt} />
                  </picture>
                </a>
              )
          )}
      </section>
    )
  }
}
