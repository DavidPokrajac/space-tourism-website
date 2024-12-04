export function imageSize() {
    if (window.innerWidth <= 676) {
        return 150;
    } else if (window.innerWidth > 676 && window.innerWidth <= 1092) {
        return 300;
    } else if (window.innerWidth > 1092) {
        return 480;
    }
}
