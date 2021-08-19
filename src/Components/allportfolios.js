import ocio from '../img/portImages/OcioRanchDiscoball.jpg';
import barber from '../img/portImages/BarberBookerScreen.png';
import password from '../img/portImages/Password_Feature_art.gif'
import rioslaw from '../img/portImages/rlrlaw.jpg';
import scheduler from '../img/portImages/WorkdaySchedulerScreenshot.png';
import blog from '../img/portImages/jsblog.jpg'


const portfolios = [
    {
        id: 1,
        category: 'ReactJS',
        link1: 'https://thawing-inlet-75700.herokuapp.com/',
        link2: 'https://github.com/noerios/byenoe-blog',
        icon1: 'Go',
        image: blog,
        title: 'ByeNoe Blog',
        note: '2021 - MERN Stack application that uses MongoDB to house a database of content that can be sorted by category and presented to the user. All content, copywriting, and photography was pulled from my 2016 trip around the world with Remote Year. The application is fully responsive.'
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
        category: 'ReactJS',
        link1: 'https://rlr-mockup.herokuapp.com/',
        link2: 'https://github.com/noerios/rlrLaw_site',
        icon1: 'Go',
        image: rioslaw,
        title: 'Rolando Rios Law',
        note: '2021 - Work in progress new build of the Rolando Rios Law site using ReactJS and implementing features such as scrolling nav, user interactions, and responsive design.'
    },
    {
        id: 5,
        category: 'Database',
        link1: 'https://noerios.github.io/homework5/',
        link2: 'https://github.com/noerios/homework5',
        icon1: 'Go',
        image: scheduler,
        title: 'Workday Scheduler',
        note: '2020 - A simple workday scheduler that uses MomentJS to determine what time of day it is currently, and serves the user highlighted time-fields in which to store notes. The application will change colors throughout the day depending on what time it is.'
    },
    {
        id: 6,
        category: 'CMS',
        link1: 'https://www.ocioranch.com',
        link2: 'https://www.ocioranch.com',
        icon1: 'Go',
        image: ocio,
        title: 'Ocio Ranch',
        note: '2020 - Photography, copywriting, content, styling and design within a Squarespace CMS.'
    },
]

export default portfolios;