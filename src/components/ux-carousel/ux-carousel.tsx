import { Component, h, Prop, State } from '@stencil/core';
import Splide from '@splidejs/splide';
import { CarouselItem } from '../ux-carousel-item/ux-carousel-item-type';
@Component({
  tag: 'ux-carousel',
  styleUrl: 'ux-carousel.scss'
})
export class UxCarousel {
  @Prop() dataRewind: boolean;
  @Prop() dataAutoplay: boolean;
  @Prop() dataArrows: boolean;
  @Prop() dataPagination: boolean;

  @State() items: CarouselItem[];
  @Prop() dataItems: string;

  componentWillLoad() {
    this.items = JSON.parse(this.dataItems);
  }

  componentDidRender() {
    new Splide('.splide', {
      rewind: this?.dataRewind,
      autoplay: this?.dataAutoplay,
      arrows: this?.dataArrows,
      pagination: this?.dataPagination,
      breakpoints: {
        768: {
          arrows: false
        }
      }
    }).mount();
  }

  render() {
    return (
      <section class="ux-carousel splide">
        <div class="splide__track">
          <div class="splide__list">
            {this.items.map(item => (
              <ux-carousel-item
                dataTitle={item.dataTitle}
                dataDescription={item.dataDescription}
                dataButtonLabel={item.dataButtonLabel}
                dataButtonHref={item.dataButtonHref}
                dataDesktopImage={item.dataDesktopImage}
                dataMobileImage={item.dataMobileImage}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
