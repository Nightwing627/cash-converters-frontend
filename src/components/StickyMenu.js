export default function StickyMenu(selector = '.cash-sticky') {
    document.addEventListener('scroll', () => {
        const elem = document.querySelector(selector);
        if (elem) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                elem.classList.add('sticky');
            } else {
                elem.classList.remove('sticky');
            }
        }
    })
}