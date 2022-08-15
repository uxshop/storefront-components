import { Component, h, Prop, State } from '@stencil/core'
import { imagesBanner } from './ux-banners-type'

@Component({
  tag: 'ux-banners',
  styleUrl: 'ux-banners.scss'
})
export class UxBanners {
  @State() list: imagesBanner[]
  @Prop() dataImages: string

  componentWillLoad() {
    this.list = JSON.parse(this.dataImages)
  }

  render() {
    return (
      <section class="ux-banners">
        {this.list.map(image => (
          <a class="link" href={null}>
            <picture>
              <source srcSet={image?.srcMobile} media="(max-width: 1024px)"/>
              <source srcSet={image?.srcDesktop} media="(min-width: 1024px)"/>
              <img class="img" src={image?.srcDesktop} alt={image?.alt} />
            </picture>
          </a>
        ))}
      </section>
    );
  }
}