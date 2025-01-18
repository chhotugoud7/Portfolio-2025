import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';


// import more skills 
import react_Icon from './react-icon.png';  
import nextjs_Icon from './nextjs-icon.png';  
import tailwind_Icon from './tailwind-icon.png';  
import javascript_Icon from './javascript-icon.png';  
import nodejs_Icon from './nodejs-icon.png';  
import express_Icon from './express-icon.png';  
import django_Icon from './django-icon.png';  
import pandit_project_image from './pandit-booking-image1.png';
import portfolio_2025_image from './portfolio_2025_image.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,

    // Updated skill and technology icons
    react_Icon,
    nextjs_Icon,
    tailwind_Icon,
    javascript_Icon,
    nodejs_Icon,
    express_Icon,
    django_Icon,
    pandit_project_image,
    portfolio_2025_image,

};



export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];



// skills objects

export const frontendSkillData = [
    { icon: assets.react_Icon, title: 'React.js' },
    { icon: assets.nextjs_Icon, title: 'Next.js' },
    { icon: assets.javascript_Icon, title: 'JavaScript' },
    { icon: assets.tailwind_Icon, title: 'Tailwind CSS' }
];

export const backendSkillData = [
    { icon: assets.nodejs_Icon, title: 'Node.js' },
    { icon: assets.express_Icon, title: 'Express.js' },
    { icon: assets.mongodb, title: 'MongoDB' },
    { icon: assets.django_Icon, title: 'Django' }
];

export const toolsSkillData = [
    { icon: assets.vscode, title: 'VS Code' },
    { icon: assets.git, title: 'Git' },
    { icon: assets.firebase, title: 'Firebase' },
    { icon: assets.figma, title: 'Figma' }
];


// projectData.js

export const projectData = [
    {
      title: 'Pandit Booking Website',
      description: 'A platform that allows users to book Pandits based on their availability, specialization, and pricing.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Razorpay'],
      imageUrl: assets.pandit_project_image, 
      githubLink: 'https://github.com/chhotugoud7/Pandit-Booking-Website',  
      liveLink: 'https://github.com/chhotugoud7/Pandit-Booking-Website',  
    },

    {
        title: 'Portfolio 2025',
        description:
          'A responsive and interactive portfolio showcasing skills, projects, and experience. Built with modern web technologies to highlight professionalism and creativity.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel Deployment'],
        imageUrl: assets.portfolio_2025_image, 
        githubLink: 'https://github.com/chhotugoud7/portfolio-2025', 
        liveLink: 'https://github.com/chhotugoud7/portfolio-2025', 
      },
  ];
  