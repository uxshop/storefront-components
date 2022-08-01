export interface textImageType {
    image: {
        src: string
        alt?: string
    }
    title: string
    description: string
    buttonLabel: string
    href: string
}

export type sideType = "left" | "right"