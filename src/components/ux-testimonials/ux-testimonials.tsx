import { Component, h, Prop, State} from "@stencil/core";
import { testimonialsType } from "./ux-testimonials-type";

@Component({
    tag: 'ux-testimonials',
    styleUrl: 'ux-testimonials.scss',
})

export class UxTestimonials{
    @State() testimonials: testimonialsType[]

    @Prop() title: string
    @Prop() description: string
    @Prop() testimonialsList: string

    componentWillLoad() {
        this.testimonials = eval(this.testimonialsList)
    }

    render(){
        return(
            <section class="ux-testimonials">
                <div class="infos">
                    <h2 class="title">{this?.title}</h2>
                    <p class="description">{this?.description}</p>
                </div>
                <div class="testimonials-container">
                    {this.testimonials.map(testimonial => {
                        return(
                            <div class="testimonial">
                                <img src="../../assets/icons/testimonials-icon.svg" alt={null} class="icon"/>
                                <p class="message">
                                    {testimonial?.message}
                                </p>

                                <div class="customer">
                                    <img src={testimonial.customer?.icon} alt={null} class="customer-icon"/>
                                    <h3 class="customer-name">
                                        {testimonial.customer?.name}
                                    </h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}