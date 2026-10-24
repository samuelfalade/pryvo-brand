// Scroll reveal. The hidden state only applies once html.js is set (inline in each <head>), so
// pages read fully without JavaScript. Everything in view shows at once; the rest as it scrolls in.
const els = [...document.querySelectorAll('.reveal')], show = el => el.classList.add('in');
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
els.forEach(el => el.getBoundingClientRect().top < innerHeight ? show(el) : io.observe(el));
setTimeout(() => els.forEach(show), 2500);
