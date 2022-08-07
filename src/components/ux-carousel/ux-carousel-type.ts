export interface carouselContentType{
    image?:{
        desktopSrc?: string
        mobileSrc?: string
        alt?: string
    }
    title?: string
    description?: string
    button?:{
        label?: string
        href?: string
    }
}

export interface carouselSettingsType{
    rewind?: boolean
    autoplay?: boolean
    arrows?: boolean
    pagination?: boolean
}

export type textAlignType = "left" | "right" | "center"