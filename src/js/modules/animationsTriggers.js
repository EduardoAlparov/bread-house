import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const triggers = document.querySelectorAll('.js-animation-trigger');
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;
    let startPercent;

    isMobile ? (startPercent = 0) : (startPercent = 0);

    triggers.forEach((trigger) => {
        ScrollTrigger.create({
            trigger: trigger,
            start: `top center-=${startPercent}%`,
            once: true,
            markers: false,
            onToggle: () => {
                trigger.classList.remove('js-animation-trigger');
            },
        });
    })
}
