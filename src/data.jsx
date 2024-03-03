import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { CgCPlusPlus } from 'react-icons/cg'
import DrinkNest from './assets/DrinkNest.jpg'
import UnsplashOasis from './assets/UnsplashOasis.jpg'
import ECommerceImage from './assets/ECommerceImage.jpg'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#contact', text: 'contact' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'NodeJs',
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: 'Proficient in Node.js, with experience in building efficient server-side applications.',
  },
  {
    id: nanoid(),
    title: 'C & C++',
    icon: <CgCPlusPlus className="h-16 w-16 text-emerald-500" />,
    text: 'Proficient in C and C++ programming, with a focus on crafting efficient and reliable solutions for a variety of projects',
  },
  {
    id: nanoid(),
    title: 'Databases',
    icon: <FaDatabase className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in SQL and Non-SQL based databases such as MongoDB',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: ECommerceImage,
    url: 'https://e-commerceapi-2cg6.onrender.com/',
    github: 'https://github.com/Whitenoizzzz/E-Commerce-API',
    title: 'ECommerce API',
    text: 'Developed a comprehensive E-commerce API backend utilizing Node.js, featuring authentication, product management, cart functionality, order processing, and customer reviews.',
  },
  {
    id: nanoid(),
    img: UnsplashOasis,
    url: 'https://unsplashoasis.netlify.app/',
    github: 'https://github.com/Whitenoizzzz/Unspash-Oasis',
    title: 'Unsplash Oasis',
    text: 'Crafted a dynamic website leveraging React.js, React Query, and Context API to seamlessly integrate with the Unsplash API,to deliver free high-quality images with option to download',
  },
  {
    id: nanoid(),
    img: DrinkNest,
    url: 'https://drinknest.netlify.app/',
    github: 'https://github.com/Whitenoizzzz/MixMaster',
    title: 'DrinkNest',
    text: 'Developed an engaging beverage exploration platform using React, React Router, and React Query, allowing users to effortlessly search for drinks and discover their ingredients.',
  },
]
