import {Component, h, Prop, State} from '@stencil/core'
import { youtubeUrlFormatter } from '../../assets/helpers/youtubeUrlFormatter'
@Component({
    tag: 'ux-video',
    styleUrl: 'ux-video.scss'
})

export class UxVideo {
    @State() video : string

    @Prop() title: string
    @Prop() description: string
    @Prop() src: string

    componentWillLoad(){
        this.video = youtubeUrlFormatter(this.src)
    }

    render(){
        return(
            <section class="ux-video">
                <div class="content">
                    <div class="infos">
                        <h2 class="title">{this?.title}</h2>
                        <p class="description">{this?.description}</p>
                    </div>
                    <div class="video-container">
                        <iframe 
                            src={this.video} 
                            width="100%"
                            height="100%"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
            </section> 
        )
    }
}