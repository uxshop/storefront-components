/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface UxBanner {
    }
}
declare global {
    interface HTMLUxBannerElement extends Components.UxBanner, HTMLStencilElement {
    }
    var HTMLUxBannerElement: {
        prototype: HTMLUxBannerElement;
        new (): HTMLUxBannerElement;
    };
    interface HTMLElementTagNameMap {
        "ux-banner": HTMLUxBannerElement;
    }
}
declare namespace LocalJSX {
    interface UxBanner {
    }
    interface IntrinsicElements {
        "ux-banner": UxBanner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ux-banner": LocalJSX.UxBanner & JSXBase.HTMLAttributes<HTMLUxBannerElement>;
        }
    }
}
