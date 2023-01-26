import { Component, h, Prop, State, Watch } from '@stencil/core'
import { iconEnum } from '../ui-icon/ui-icon-enum'
import { ShowcaseItem } from '../ux-showcase-item/ux-showcase-item-type'

@Component({
  tag: 'ux-showcase',
  styleUrl: 'ux-showcase.scss'
})
export class UxShowcase {
  @State() products: ShowcaseItem[]

  @Prop() dataProducts: string
  @Prop() dataTitle: string
  @Prop() dataItemLimit: number = 2

  handleActiveProducts(productsList: ShowcaseItem[], limit: number): ShowcaseItem[] {
    return productsList.map((product, index) => {
      product.active = index < limit
      return product
    })
  }

  componentWillLoad() {
    this.products = this.handleActiveProducts(JSON.parse(this.dataProducts), this.dataItemLimit)
  }

  @Watch('dataProducts')
  watchDataProductsHandler(newValue: string) {
    this.products = this.handleActiveProducts(JSON.parse(newValue), this.dataItemLimit)
  }

  @Watch('dataItemLimit')
  watchDataItemLimitHandler(newValue: number) {
    this.products = this.handleActiveProducts(this.products, newValue)
  }

  next() {
    const firstActive = this.products.findIndex(item => item.active)
    const listProducts = this.products

    if (firstActive + this.dataItemLimit >= this.products.length) return // TODO: Colocar feedback no btn com desable next ou algo assim
    listProducts[firstActive].active = false
    listProducts[firstActive + this.dataItemLimit].active = true
    this.products = [...listProducts]
  }

  preview() {
    const firstActive = this.products.findIndex(item => item.active)
    const listProducts = this.products

    if (firstActive - 1 < 0) return // TODO: Colocar feedback no btn com desable next ou algo assim
    listProducts[firstActive - 1].active = true
    listProducts[firstActive + this.dataItemLimit - 1].active = false
    this.products = [...listProducts]
  }

  render() {
    return (
      <section class="ux-showcase">
        <div class="infos">
          <h2 class="title">{this?.dataTitle}</h2>
        </div>
        {!!this.products?.length && (
          <div class="showcase-container">
            <button class="control" onClick={() => this.preview()}>
              <ui-icon class="icon" dataIconName={iconEnum.arrowLeft} dataColor="#5DB3D8" />
            </button>

            <ul class="items-container">
              {!!this.products?.length &&
                this.products.map(product => (
                  <li key={`${new Date().getTime()}-ux-showcase-item`} class={product.active ? 'item' : 'inactive'}>
                    <ux-showcase-item
                      dataHref={product.dataHref}
                      dataImage={product.dataImage}
                      dataName={product.dataName}
                      dataPrice={product.dataPrice}
                      dataPriceCompare={product.dataPriceCompare}
                      dataParcels={product.dataParcels}
                      dataParcelPrice={product.dataParcelPrice}
                    />
                  </li>
                ))}
            </ul>

            <button class="control" onClick={() => this.next()}>
              <ui-icon class="icon" dataIconName={iconEnum.arrowRight} dataColor="#5DB3D8" />
            </button>
          </div>
        )}
      </section>
    )
  }
}
