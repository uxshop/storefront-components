export function youtubeUrlFormatter(url:string):string{
    const actualUrl = new URL(url)
    const validateUrl = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/
    const baseUrl = 'https://www.youtube-nocookie.com/embed/'

    if(validateUrl.test(actualUrl.href)){
        const href = actualUrl.href.replace('watch?v=', '')
        
        const urlParams = href.split('/')
        const id = urlParams[urlParams.length - 1]
        return `${baseUrl}${id}`
    }
}