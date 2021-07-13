import ocio from '../img/portImages/OcioRanchDiscoball.jpg';
import barber from '../img/portImages/BarberBookerScreen.png';
import password from '../img/portImages/Password_Feature_art.gif'
import rioslaw from '../img/portImages/RLR.Logo.jpeg';
import scheduler from '../img/portImages/WorkdaySchedulerScreenshot.png';
import blog from '../img/portImages/jsblog.jpg'


const portfolios = [
    {
        id: 1,
        category: 'CMS',
        link1: 'https://www.ocioranch.com',
        link2: 'https://www.ocioranch.com',
        icon1: 'Go',
        image: ocio,
        title: 'Ocio Ranch',
        note: '2020 - Photography, copywriting, content, styling and design within a Squarespace CMS.'
    },
    {
        id: 2,
        category: 'Bootstrap',
        link1: 'https://babar-shop.herokuapp.com/',
        link2: 'https://github.com/Afam-26/Barber-Scheduler',
        icon1: 'Go',
        image: barber,
        title: 'Barbershop Booker',
        note: '2021 - Worked with a group of 3 other developers to build a booking application marketed toward barbers, but scalable. My focus was in site design, UX, and marketing/presentation.'
    },
    {
        id: 3,
        category: 'Javascript',
        link1: 'https://noerios.github.io/PasswordGenerator/',
        link2: 'https://github.com/noerios/PasswordGenerator',
        icon1: 'Go',
        image: password,
        title: 'Password Generator',
        note: '2020 - Javascript-powered password generator, later refactored to include some Materialize styling.'
    },
    {
        id: 4,
        category: 'CMS',
        link1: 'https://www.rolandorioslaw.com',
        link2: 'https://www.rolandorioslaw.com',
        icon1: 'Go',
        image: rioslaw,
        title: 'Rolando Rios Law',
        note: '2012 - Photography, copywriting, content, styling and design within a Wix CMS.'
    },
    {
        id: 5,
        category: 'Database',
        link1: 'https://noerios.github.io/homework5/',
        link2: 'https://github.com/noerios/homework5',
        icon1: 'Go',
        image: scheduler,
        title: 'Workday Scheduler',
        note: '2020 - Photography, copywriting, content, styling and design within a Squarespace CMS.'
    },
    {
        id: 7,
        category: 'NextJS',
        link1: 'https://nextjsblog-sigma.vercel.app/',
        link2: 'https://github.com/noerios/nextjsblog',
        icon1: 'Go',
        image: blog,
        title: 'NextJS Blog',
        note: '2021 - Photography, copywriting, content, styling and design with NextJS and SASS.'
    },
]

export default portfolios;