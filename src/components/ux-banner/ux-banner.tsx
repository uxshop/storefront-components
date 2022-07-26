import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ux-banner',
  styleUrl: 'ux-banner.css',
})
export class UxBanner {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
