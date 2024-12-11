export function backgroundImageSource(path: string, size: number) {
    if (size >= 1092) {
        document.body.style.backgroundImage = `url(/assets/${path}/background-${path}-desktop.jpg)`;
    } else if (size >= 676 && size < 1092) {
        document.body.style.backgroundImage = `url(/assets/${path}/background-${path}-tablet.jpg)`;
    } else {
        document.body.style.backgroundImage = `url(/assets/${path}/background-${path}-mobile.jpg)`;
    }
}
