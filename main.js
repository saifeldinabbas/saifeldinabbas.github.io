/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 2000,
    delay: 200,
})

sr.reveal('.profile__border')
sr.reveal('.profile__name', {delay: 500})
sr.reveal('.profile__profession', {delay: 600})
sr.reveal('.profile__social', {delay: 700})
sr.reveal('.profile__info-group', {interval: 100, delay: 700})
sr.reveal('.profile__buttons', {delay: 800})
sr.reveal('.filters', {delay: 1000})
sr.reveal('.filters__content', {delay: 1200})
srb.reveal('.footer__copy', {delay: 1500})