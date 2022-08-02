import {Component, h, Prop, State} from '@stencil/core'
@Component({
    tag: 'ux-video',
    styleUrl: 'ux-video.scss'
})

export class UxVideo {
    @State() video : string

    @Prop() title: string
    @Prop() description: string
    @Prop() src: string

    formatVideoUrl(url:string){
        return this.video = url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')
    }

    componentWillLoad(){
        this.formatVideoUrl(this.src)
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