import Splide from '@splidejs/splide'
import { Component, h, Prop, State, Watch } from '@stencil/core'
import { CarouselItem } from '../ux-carousel-item/ux-carousel-item-type'
@Component({
  tag: 'ux-carousel',
  styleUrl: 'ux-carousel.scss'
})
export class UxCarousel {
  @Prop() dataItems: string
  @Prop() dataRewind?: boolean = false
  @Prop() dataAutoplay?: boolean = false
  @Prop() dataArrows?: boolean = false
  @Prop() dataPagination?: boolean = false

  @State() items: CarouselItem[]

  componentWillLoad() {
    this.items = JSON.parse(this.dataItems)
  }

  @Watch('dataItems')
  watchPropHandler(newValue: string) {
    this.items = JSON.parse(newValue)
  }

  componentDidRender() {
    new Splide('.splide', {
      rewind: Boolean(this?.dataRewind),
      autoplay: Boolean(this?.dataAutoplay),
      arrows: Boolean(this?.dataArrows),
      pagination: Boolean(this?.dataPagination),
      breakpoints: {
        768: {
          arrows: false
        }
      }
    }).mount()
  }

  render() {
    return (
      <section class="ux-carousel splide">
        <div class="splide__track">
          <ul class="splide__list">
            {this.items.map(item => (
              <li class="splide__slide" key={`${new Date().getTime()}-ux-carousel-item`}>
                <ux-carousel-item
                  dataTitle={item.dataTitle}
                  dataDescription={item.dataDescription}
                  dataButtonLabel={item.dataButtonLabel}
                  dataButtonHref={item.dataButtonHref}
                  dataDesktopImage={item.dataDesktopImage}
                  dataMobileImage={item.dataMobileImage}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
}
