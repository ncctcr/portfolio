import {IAccount, IView} from "./interfaces";

export const ICONS: {[key: string]: string} = {
  MUI: 'https://mui.com/static/logo.png',
  REACT: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
  HTML: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
  CSS: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
  JS: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  TS: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
  AXIOS: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/axios_logo_icon_168545.png',
  REDUX: 'https://www.svgrepo.com/show/303557/redux-logo.svg',
  CHARTJS: 'https://scicoding.com/content/images/2021/09/chartjs-logo-1.svg',
  I18N: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/i18n.png',
  GIT: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
  SETTINGS: 'https://cdn.iconscout.com/icon/free/png-512/free-apple-settings-1-493162.png?f=avif&w=256',
  CONTACTS: 'https://cdn.iconscout.com/icon/free/png-512/free-apple-mail-493152.png?f=avif&w=256',
  EDUCATION: 'https://cdn.iconscout.com/icon/free/png-512/free-apple-ibooks-493146.png?f=avif&w=256',
  SKILLS: 'https://cdn.iconscout.com/icon/free/png-512/free-apple-itunes-store-493149.png?f=avif&w=256',
  LICENSES_AND_CERTIFICATION: 'https://cdn.iconscout.com/icon/free/png-512/free-apple-reminders-493156.png?f=avif&w=256',
  EXPERIENCE: 'https://cdn.iconscout.com/icon/free/png-512/free-apple-messages-493150.png?f=avif&w=256',
  SOURCE: 'https://cdn.iconscout.com/icon/free/png-512/free-apple-healt-493148.png?f=avif&w=256',
  TELEGRAM: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png',
  KACAP: 'https://www.meme-arsenal.com/memes/e8e6fa9504bf46adfaaca70f120ff3a6.jpg'
}


export const ACCOUNT: IAccount = {
  name: 'Mykola Nesterchuk',
  position: 'Frontend Developer',
  avatar: 'https://sun9-35.userapi.com/impg/rzG38QhsnvkU2hRStbd4NVdjQKJ6RAnrvCPB1w/qe0wx8heN90.jpg?size=1755x1755&quality=95&sign=56897b54284f407ff8ad015a4cf03f79&type=album'
}

export const SIDEBAR = [
  {title: 'Skills', key: 'skills', icon: ICONS.SKILLS, br: true},
  {title: 'Experience', key: 'experience', icon: ICONS.EXPERIENCE, br: false},
  {title: 'Education', key: 'education', icon: ICONS.EDUCATION, br: false},
  {title: 'Licenses & certifications', key: 'licenses_and_certification', icon: ICONS.LICENSES_AND_CERTIFICATION, br: false},
  {title: 'Contacts', key: 'contacts', icon: ICONS.CONTACTS, br: true},
  {title: 'Theme', key: 'theme', icon: ICONS.SETTINGS, br: false},
  {title: 'Window', key: 'window', icon: ICONS.SETTINGS, br: false},
  {title: 'Language', key: 'language', icon: ICONS.SETTINGS, br: false},
]

export const VIEWS: IView[] = [
  {
    title: 'General',
    key: 'general',
    content: [],
    block_links: [
      {
        title: 'Technical',
        key: 'technical',
        links: [
          {
            title: 'Skills',
            key: 'skills',
          },
        ]
      },
      {
        title: 'Information',
        key: 'information',
        links: [
          {title: 'Experience', key: 'experience'},
          {title: 'Education', key: 'education'},
          {title: 'Licenses & certifications', key: 'licenses_and_certification'},
          {title: 'Contacts', key: 'contacts'},
        ]
      },
      {
        title: 'Settings',
        key: 'settings',
        links: [
          {title: 'Theme', key: 'theme'},
          {title: 'Window', key: 'window'},
          {title: 'Language', key: 'language'},
        ]
      }
    ]
  },
  {
    title: 'Skills',
    key: 'skills',
    content: [
      {
        title: 'Description',
        key: 'description',
        text: "Skills, in general, refer to a person's ability to perform specific tasks, actions, or activities effectively and efficiently. They encompass a wide range of competencies acquired through learning, training, and experience.",
      }
    ],
    block_links: [
      {
        title: 'Frameworks',
        key: 'frameworks',
        links: [
          {
            title: 'React',
            icon: ICONS.REACT,
            key: 'react',
          }
        ]
      },
      {
        title: 'Programming languages',
        key: 'programming_languages',
        links: [
          {
            title: 'HTML',
            icon: ICONS.HTML,
            key: 'html',
          },
          {
            title: 'CSS',
            icon: ICONS.CSS,
            key: 'css',
          },
          {
            title: 'JavaScript',
            icon: ICONS.JS,
            key: 'javascript',
          },
          {
            title: 'TypeScript',
            icon: ICONS.TS,
            key: 'typescript',
          },
        ]
      },
      {
        title: 'Libraries',
        key: 'libraries',
        links: [
          {
            title: 'Redux',
            icon: ICONS.REDUX,
            key: 'redux',
          },
          {
            title: 'MUI & Material UI',
            icon: ICONS.MUI,
            key: 'mui',
          },
          {
            title: 'Axios',
            icon: ICONS.AXIOS,
            key: 'axios',
          },
          {
            title: 'Chart.js',
            icon: ICONS.CHARTJS,
            key: 'chartjs',
          },
          {
            title: 'i18n',
            icon: ICONS.I18N,
            key: 'i18n',
          },
        ]
      },
      {
        title: 'Tools',
        key: 'tools',
        links: [
          {
            title: 'Git',
            icon: ICONS.GIT,
            key: 'git',
          }
        ]
      }
    ]
  },
  {
    title: 'React',
    key: 'react',
    content: [],
  },
  {
    title: 'HTML',
    key: 'html',
    content: [
      {
        title: 'Description',
        key: 'description',
        text: 'HTML - is the backbone of web development, and I have a deep understanding of its syntax, structure, and best practices.'
      },
      {
        title: 'Experience',
        key: "experience",
        innerHTML: `
            <p style="margin-top: 0">As a front-end developer with 4 years of experience, I have extensively worked with HTML to create and build user interfaces for various websites and web applications.</p>
            <p>Throughout my career, I have utilized HTML to create semantic and accessible web pages. I am proficient in using different HTML elements such as headings, paragraphs, lists, tables, forms, and more to organize content and present information in a clear and well-structured manner.<p/>
            <p>Working with HTML5, I have implemented the latest features and functionalities, including the integration of multimedia elements like audio and video, as well as the use of semantic tags to improve search engine optimization and enhance the overall user experience.<p/>
            <p>In my projects, I have collaborated closely with UI/UX designers and back-end developers to ensure seamless integration and functionality. I am well-versed in using HTML with CSS and JavaScript to implement responsive designs and create interactive and dynamic web pages.<p/>
            <p style="margin-bottom: 0">I also have experience in optimizing web pages for performance and speed, utilizing techniques such as minification and proper tag usage.<p/>
          `}
    ],
  },
  {
    title: 'CSS',
    key: 'css',
    content: [],
  },
  {
    title: 'JavaScript',
    key: 'javascript',
    content: [],
  },
  {
    title: 'TypeScript',
    key: 'typescript',
    content: [],
  },
  {
    title: 'Redux',
    key: 'redux',
    content: [],
  },
  {
    title: 'MUI & Material UI',
    key: 'mui',
    content: [],

  },
  {
    title: 'Axios',
    key: 'axios',
    content: [],
  },
  {
    title: 'Chart.js',
    key: 'chartjs',
    content: [],
  },
  {
    title: 'i18n',
    key: 'i18n',
    content: [],
  },
  {
    title: 'Theme',
    key: 'theme'
  },
  {
    title: 'Window',
    key: 'window'
  },
  {
    title: 'Language',
    key: 'language'
  },
  {title: 'Experience', key: 'experience'},
  {
    title: 'Education',
    key: 'education',
    content: [
      {
        title: 'Kherson State University',
        key: 'kherson_state_university',
        text: "Bachelor's degree, software engineer. 2016 - 2021"
      },
      {
        title: 'Nova Kakhovka Instrumental Engineering College',
        key: 'nova_kakhovka_instrumental_engineering_college',
        text: "Secondary (Complete) Education. Telecommunications and Radio Engineering. 2012 - 2016"
      },
    ]
  },
  {
    title: 'Licenses & certifications',
    key: 'licenses_and_certification',
    content: [
      {
        title: 'Description',
        key: 'description',
        innerHTML: `
        It may be important for someone to look at my certificates, but remember, the number of certificates doesn\'t define the skills and expertise of a developer. &#128517; 
        Practical experience, problem-solving abilities, and continuous learning are equally important factors contributing to one\'s proficiency as a developer.\n`
      },
      {
        title: 'Learning TypeScript',
        key: 'learning_typescript',
        innerHTML: `
          <img style="width: 100%; height: 100%" src="/certificates/learning-typescript.png"/>
        `
      },
      {
        title: 'React: Using TypeScript',
        key: 'react_using_typescript',
        innerHTML: `
          <img style="width: 100%; height: 100%" src="/certificates/react-using-typescript.png"/>
        `
      }
    ]
  },
  {
    title: 'Contacts',
    key: 'contacts',
    content: [
      {
        title: 'Description',
        key: 'description',
        text: 'If you have any interest in contacting me for any suggestions, or just browsing through my social media, or you\'re just browsing this tab, then I\'ll just leave my links here.'

      },
      {
        title: 'Social',
        key: 'social'

      },
    ]
  },
]

