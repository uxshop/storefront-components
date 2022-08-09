import { Component, h, Host, Prop } from "@stencil/core";
import { currencyFormatter } from "../../assets/helpers/currencyFormatter";

@Component({
    tag: 'ux-showcase-item',
    styleUrl: 'ux-showcase-item.scss'
})

export class UxShowcaseItem{
    @Prop() href: string
    @Prop() imageSrc: string
    @Prop() name: string
    @Prop() price: number
    @Prop() priceCompare?: number
    @Prop() parcels?: number
    @Prop() parcelPrice?: number
    @Prop() hasInterest?: boolean


    render(){
        return(
            <Host class="splide__slide">
                <a href={this.href}>
                    <div class="ux-showcase-item">
                        <div class="image-container">
                            <img src={this.imageSrc} alt={this.name} class="img"/>
                            <a href={this.href} class="btn">comprar</a>
                        </div>
                        <div class="card-infos">
                            <h2 class="name">{this.name}</h2>
                            <div class="payment">
                                <div class="prices">
                                    <span class="price-compare">{currencyFormatter(this.priceCompare)}</span>
                                    <span class="price">{currencyFormatter(this.price)}</span>
                                </div>
                                    {this.parcels && (
                                        <span class="price-installments">
                                            até {this.parcels}x de {currencyFormatter(this.parcelPrice)}
                                            {this.hasInterest ? ' com' : ' sem'} juros
                                        </span>
                                    )}
                            </div>
                        </div>
                    </div>
                </a>
            </Host>
        )
    }
}