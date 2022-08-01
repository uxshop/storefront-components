import {Component, h, Prop, State} from '@stencil/core'
import { uxVideoType } from './ux-video-type'

@Component({
    tag: 'ux-video',
    styleUrl: 'ux-video.scss'
})

export class UxVideo {
    @State() content : uxVideoType[]
    @State() video : string

    @Prop() contentList: string
    @Prop() src: string

    formatVideoUrl(url:string){
        return this.video = url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')
    }

    componentWillLoad(){
        this.content = eval(this.contentList)
        this.formatVideoUrl(this.src)
    }

    render(){
        return(
            <section class="ux-video">
                {this.content.map(element => {
                    return(
                        <div class="content">
                            <div class="infos">
                                <h2 class="title">{element?.title}</h2>
                                <p class="description">{element?.description}</p>
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
                    )
                })}
            </section>
        )
    }
}