export function youtubeUrlFormatter(url:string):string{
    const actualUrl = new URL(url)
    const validateUrl = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
    const baseUrl = 'https://www.youtube-nocookie.com/embed'

    if(validateUrl.test(actualUrl.href)){
        const searchParams = actualUrl.searchParams
        const pathName = actualUrl.pathname
        let id:string

        if(pathName.includes('embed')){
            const paths = pathName.split('/')  
            id = paths[paths.length - 1]
            return `${baseUrl}/${id}`
        }

        if(searchParams.get('v')){  
            id = searchParams.get('v')
            return `${baseUrl}/${id}`
        }

        id = pathName
        return `${baseUrl}${id}`
    }
}