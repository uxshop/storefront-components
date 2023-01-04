import { Component, h, Prop, State, Watch } from '@stencil/core'
import { youtubeUrlFormatter } from '../../assets/helpers/youtubeUrlFormatter'
@Component({
  tag: 'ux-video',
  styleUrl: 'ux-video.scss'
})
export class UxVideo {
  @State() video: string
  @Prop() dataTitle: string
  @Prop() dataDescription: string
  @Prop() dataSrc: string

  componentWillLoad() {
    this.video = this.dataSrc ? youtubeUrlFormatter(this.dataSrc) : null
  }

  @Watch('dataSrc')
  watchPropHandler(newValue: string, oldValue: string) {
    this.video = newValue && newValue !== oldValue ? youtubeUrlFormatter(newValue) : this.video
  }

  render() {
    return (
      <section class="ux-video">
        <div class="content">
          <div class="infos">
            <h2 class="title">{this?.dataTitle}</h2>
            <p class="description">{this?.dataDescription}</p>
          </div>
          <div class="video-container">{this.video && <iframe src={this.video} width="100%" height="100%" allowFullScreen />}</div>
        </div>
      </section>
    )
  }
}
