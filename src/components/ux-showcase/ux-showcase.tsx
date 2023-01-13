import { Component, h, Prop, State, Watch } from '@stencil/core'
import { iconEnum } from '../ui-icon/ui-icon-enum'
import { ShowcaseItem } from '../ux-showcase-item/ux-showcase-item-type'

@Component({
  tag: 'ux-showcase',
  styleUrl: 'ux-showcase.scss'
})
export class UxShowcase {
  @State() products: ShowcaseItem[]
  @State() productsToShow: ShowcaseItem[]
  @State() indexControl: number = 0

  @Prop() dataProducts: string
  @Prop() dataTitle: string
  @Prop() dataItemLimit: number = 4

  componentWillLoad() {
    this.products = JSON.parse(this.dataProducts)
  }

  @Watch('dataProducts')
  watchPropHandler(newValue: string) {
    const productList = JSON.parse(newValue)
    this.products = productList
    this.productsToShow = productList.slice(this.indexControl, this.dataItemLimit)
  }

  @Watch('dataItemLimit')
  watchDataItemLimitHandler(newValue: number) {
    this.productsToShow = this.products.slice(this.indexControl, newValue)
  }

  @Watch('indexControl')
  watchIndexControlHandler(newValue: number) {
    if (newValue + this.dataItemLimit >= this.products.length) {
      this.productsToShow = this.products.slice(newValue)
    } else {
      this.productsToShow = this.products.slice(newValue, newValue + this.dataItemLimit)
    }
  }

  next() {
    if (this.indexControl + this.dataItemLimit < this.products.length) this.indexControl = this.indexControl + 1
  }

  preview() {
    if (this.indexControl) this.indexControl = this.indexControl - 1
  }

  render() {
    return (
      <section class="ux-showcase">
        <div class="infos">
          <h2 class="title">{this?.dataTitle}</h2>
        </div>

        <div class="showcase-container">
          <button class="control" onClick={() => this.preview()}>
            <ui-icon class="icon" dataIconName={iconEnum.arrowLeft} dataColor="#5DB3D8" />
          </button>

          <div class="itens-container">
            {!!this.productsToShow &&
              this.productsToShow.map(product => (
                <ux-showcase-item
                  key={`${new Date().getTime()}-ux-showcase-item`}
                  dataHref={product.dataHref}
                  dataImage={product.dataImage}
                  dataName={product.dataName}
                  dataPrice={product.dataPrice}
                  dataPriceCompare={product.dataPriceCompare}
                  dataParcels={product.dataParcels}
                  dataParcelPrice={product.dataParcelPrice}
                />
              ))}
          </div>

          <button class="control" onClick={() => this.next()}>
            <ui-icon class="icon" dataIconName={iconEnum.arrowRight} dataColor="#5DB3D8" />
          </button>
        </div>
      </section>
    )
  }
}
