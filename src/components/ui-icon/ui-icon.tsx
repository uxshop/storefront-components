import { Component, h, Host, Prop, State, Watch } from '@stencil/core'
import icons from '../../assets/icons/icons.json'
import { iconEnum } from './iconEnum'

@Component({
  tag: 'ui-icon'
})
export class UiIcon {
  @State() width: string
  @State() height: string
  @State() viewBox: string
  @State() svgFill: string
  @State() xmlns: string
  @State() path: string
  @State() color: string

  @Prop() dataColor?: string
  @Prop() dataIconName: iconEnum

  componentWillLoad() {
    const { width, height, viewBox, fill, xmlns } = icons[this.dataIconName].svg
    const { d, fill: svgColor } = icons[this.dataIconName].path

    this.width = width
    this.height = height
    this.viewBox = viewBox
    this.svgFill = fill
    this.xmlns = xmlns
    this.path = d
    this.color = this.dataColor || svgColor
  }

  @Watch('dataColor')
  watchColorHandler(newColor: string) {
    this.color = newColor
  }

  render() {
    return (
      <Host>
        <svg width={this.width} height={this.height} viewBox={this.viewBox} fill={this.svgFill} xmlns={this.xmlns}>
          <path d={this.path} fill={this.color} />
        </svg>
      </Host>
    )
  }
}
