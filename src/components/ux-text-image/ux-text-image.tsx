import { Component, h, Prop  } from '@stencil/core'
import { sideType } from './ux-text-image-type';

@Component({
  tag: 'ux-text-image',
  styleUrl: 'ux-text-image.scss'
})

export class UxTextImage {
    @Prop() dataImage: string
    @Prop() dataTitle: string
    @Prop() dataDescription: string
    @Prop() dataButtonHref: string
    @Prop() dataButtonLabel: string
    @Prop() side: sideType
    
    render() {
    return (
        <section class="ux-text-image">
            <div class={`container ${this.side}`}>
                <div class="image-container">
                    <img src={this.dataImage} alt={null} class="img" loading="lazy"/>
                </div>

                <div class="infos">
                    <h2 class="title">
                        {this.dataTitle}
                    </h2>
                    <p class="description">
                        {this.dataDescription}
                    </p>
                    <a href={this.dataButtonHref} class="button">
                        {this.dataButtonLabel}
                    </a>
                </div>
            </div>
        </section>
    );
    }
}