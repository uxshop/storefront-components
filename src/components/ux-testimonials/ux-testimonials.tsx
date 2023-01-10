import { Component, h, Prop, State, Watch } from '@stencil/core'
import { testimonialsType } from './ux-testimonials-type'
import icon from '../../assets/icons/testimonials-icon.svg'

@Component({
  tag: 'ux-testimonials',
  styleUrl: 'ux-testimonials.scss'
})
export class UxTestimonials {
  @State() testimonials: testimonialsType[]

  @Prop() dataTitle: string
  @Prop() dataDescription: string
  @Prop() dataTestimonials: string

  componentWillLoad() {
    this.testimonials = JSON.parse(this.dataTestimonials)
  }

  @Watch('dataTestimonials')
  watchPropHandler(newValue: string) {
    this.testimonials = JSON.parse(newValue)
  }

  render() {
    return (
      <section class="ux-testimonials">
        <div class="infos">
          <h2 class="title">{this?.dataTitle}</h2>
          <p class="description">{this?.dataDescription}</p>
        </div>
        <div class="testimonials-container">
          {this.testimonials &&
            this.testimonials.map(
              testimonial =>
                testimonial.message && (
                  <div class="testimonial">
                    <img src={icon} alt={null} class="icon" />
                    <p class="message">{testimonial?.message}</p>

                    <div class="customer">
                      <img src={testimonial?.icon} alt={null} class="customer-icon" />
                      <h3 class="customer-name">{testimonial?.name}</h3>
                    </div>
                  </div>
                )
            )}
        </div>
      </section>
    )
  }
}
