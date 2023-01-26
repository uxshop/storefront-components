import { Component, h, Prop } from '@stencil/core'
import { currencyFormatter } from '../../assets/helpers/currencyFormatter'

@Component({
  tag: 'ux-showcase-item',
  styleUrl: 'ux-showcase-item.scss'
})
export class UxShowcaseItem {
  @Prop() dataHref: string
  @Prop() dataImage: string
  @Prop() dataName: string
  @Prop() dataPrice: number
  @Prop() dataPriceCompare?: number
  @Prop() dataParcels?: number
  @Prop() dataParcelPrice?: number

  render() {
    return (
      <div class="ux-showcase-item">
        <div class="image-container">
          <img src={this.dataImage} alt={this.dataName} class="img" />
          <a href={this.dataHref} class="btn">
            comprar
          </a>
        </div>
        {!!this.dataName && (
          <div class="card-infos">
            <p class="name">{this.dataName}</p>
            <div class="payment">
              {this.dataPrice && (
                <div class="prices">
                  {this.dataPriceCompare && <span class="price-compare">{currencyFormatter(this.dataPriceCompare)}</span>}
                  <span class="price"> &nbsp; {currencyFormatter(this.dataPrice)}</span>
                </div>
              )}
              {this.dataParcels && this.dataParcelPrice && (
                <p class="price-installments">
                  até {this.dataParcels}x de {currencyFormatter(this.dataParcelPrice)} sem juros
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}
