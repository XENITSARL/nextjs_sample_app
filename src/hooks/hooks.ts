// import cash from "../assets/logo/cash.png"
// import om from "../assets/logo/om.jpeg"
// import wave from "../assets/logo/wave.png"
// import card from "../assets/logo/card.png"

export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export const generateVariantName = (variant: string) => {
    let name = ""
    switch (variant) {
        case "fr":
            name = "Français"
            break;
        case "en":
            name = "Anglais"
            break;
        case "ar":
            name = "Arabe"
            break;
        case "tr":
            name = "Translitération"
            break;
    }
    return name
}

export const formatMillis = (duration: number) => {
    let milliseconds = JSON.stringify(((duration % 1000)))
    let seconds = JSON.stringify(Math.floor((duration / 1000) % 60))
    let minutes = JSON.stringify(Math.floor((duration / (1000 * 60)) % 60))

    minutes = (JSON.parse(minutes) < 10) ? "0" + minutes : minutes;
    seconds = (JSON.parse(seconds) < 10) ? "0" + seconds : seconds;
    milliseconds = (JSON.parse(milliseconds) < 10) ? "0" + seconds : seconds;

    return minutes + ":" + seconds + ":" + milliseconds;
}

export const toMilliseconds = (h, m, s) => ((h * 60 * 60 + m * 60 + s) * 1000);

export const fromMillis = (duration: number) => {
    let milliseconds = ((duration % 1000))
    let seconds = Math.floor((duration / 1000) % 60)
    let minutes = Math.floor((duration / (1000 * 60)) % 60)

    return { milliseconds, minutes, seconds }
}

// export const imageResolver = () => {
//     return { cash, wave, om, card }
// }

export const ValidateEmail = (mail: string) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) return true
    else return false
}