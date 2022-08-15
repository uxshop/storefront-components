import { Component, h } from "@stencil/core";
@Component({
    tag: 'ux-showcase',
    styleUrl: 'ux-showcase.scss'
})

export class UxShowcase {
    render() {
        return (
            <section class="ux-showcase">
                <slot></slot>
            </section>
        )
    }
}