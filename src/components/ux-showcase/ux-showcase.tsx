import { Component, h, Prop, State } from '@stencil/core';
import { ShowcaseItem } from '../ux-showcase-item/ux-showcase-item-type';

@Component({
  tag: 'ux-showcase',
  styleUrl: 'ux-showcase.scss'
})
export class UxShowcase {
  @State() products: ShowcaseItem[];
  @Prop() dataImages: string;

  componentWillLoad() {
    this.products = JSON.parse(this.dataImages);
  }

  render() {
    return (
      <section class="ux-showcase">
        {this.products.map(product => (
          <ux-showcase-item
            dataHref={product.dataHref}
            dataImage={product.dataImage}
            dataName={product.dataName}
            dataPrice={product.dataPrice}
            dataPriceCompare={product.dataPriceCompare}
            dataParcels={product.dataParcels}
            dataParcelPrice={product.dataParcelPrice}
            dataHasInterest={product.dataHasInterest}
          />
        ))}
      </section>
    );
  }
}
