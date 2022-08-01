import { Component, h, Prop, State  } from '@stencil/core'
import { textImageType, sideType } from './ux-text-image-type';

@Component({
  tag: 'ux-text-image',
  styleUrl: 'ux-text-image.scss'
})

export class UxTextImage {
    @State() content: textImageType[]

    @Prop() contentList: string
    @Prop() side: sideType
    
    componentWillLoad() {
       this.content = eval(this.contentList)
    } 

    render() {
    return (
        <section class="ux-text-image">
            {this.content.map(element => {
                return(
                    <div class={`container ${this.side}`}>
                        <div class="image-container">
                            <img src={element?.image?.src} alt={element?.image?.alt} class="img" loading="lazy"/>
                        </div>

                        <div class="infos">
                            <h2 class="title">
                                {element?.title}
                            </h2>
                            <p class="description">
                                {element?.description}
                            </p>
                            <a href={element?.href} class="button">
                                {element?.buttonLabel}
                            </a>
                        </div>

                    </div>
                )
            })}
        </section>
    );
    }
}