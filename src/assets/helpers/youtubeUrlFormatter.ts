function youtubeUrlValidator(url:string):boolean{
    const regexYoutubeUrl = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/

    return regexYoutubeUrl.test(url)
}

function youtubeIdUrl(url:string):string{
    const currentUrl = new URL(url)
    const searchParams = currentUrl.searchParams
    const pathName = currentUrl.pathname

    return searchParams.get('v') ?? pathName.substring(pathName.lastIndexOf('/') + 1)
}

export function youtubeUrlFormatter(url:string):string{
    if(!youtubeUrlValidator(url)) throw new Error('URL inválida. Insira uma URL que respeite os padrões do Youtube')

    const baseUrl = 'https://www.youtube-nocookie.com/embed'
    const id = youtubeIdUrl(url)

    return `${baseUrl}/${id}`
}