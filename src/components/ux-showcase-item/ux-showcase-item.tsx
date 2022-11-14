import { Component, h, Prop } from '@stencil/core';
import { currencyFormatter } from '../../assets/helpers/currencyFormatter';

@Component({
  tag: 'ux-showcase-item',
  styleUrl: 'ux-showcase-item.scss'
})
export class UxShowcaseItem {
  @Prop() dataHref: string;
  @Prop() dataImage: string;
  @Prop() dataName: string;
  @Prop() dataPrice: number;
  @Prop() dataPriceCompare?: number;
  @Prop() dataParcels?: number;
  @Prop() dataParcelPrice?: number;
  @Prop() dataHasInterest?: boolean;

  render() {
    return (
      <div class="ux-showcase-item">
        <a href={this.dataHref}>
          <div class="image-container">
            <img src={this.dataImage} alt={this.dataName} class="img" />
            <a href={this.dataHref} class="btn">
              comprar
            </a>
          </div>
          <div class="card-infos">
            <p class="name">{this.dataName}</p>
            <div class="payment">
              <div class="prices">
                <span class="price-compare">{currencyFormatter(this.dataPriceCompare)}</span>
                <span class="price">{currencyFormatter(this.dataPrice)}</span>
              </div>
              {this.dataParcels && (
                <span class="price-installments">
                  até {this.dataParcels}x de {currencyFormatter(this.dataParcelPrice)}
                  {this.dataHasInterest ? ' com' : ' sem'} juros
                </span>
              )}
            </div>
          </div>
        </a>
      </div>
    );
  }
}
