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