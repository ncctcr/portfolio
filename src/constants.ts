import {IAccount, IView} from "./interfaces";
import learningTypescript from "./assets/images/learning-typescript.png"
import reactUsingTypescript from "./assets/images/react-using-typescript.png"
import covidChallengeHackathon from "./assets/images/covid-challenge-hackathon.png"

export const TABLET_WIDTH = 900

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
  // {title: 'Window', key: 'window', icon: ICONS.SETTINGS, br: false},
  // {title: 'Language', key: 'language', icon: ICONS.SETTINGS, br: false},
]

const noDataContent = {
  title: 'Message',
  key: 'Message',
  text: 'This block isn\'t ready yet.'
}

const GENERAL: IView = {
    title: 'General',
    key: 'general',
    content: [
      {
        title: 'Message',
        key: 'Message',
        innerHTML: `
          <p style="margin-top: 0">Hello there!</p>
          <p style="margin-bottom: 0">
            I am a frontend developer who specializes in ReactJS. I
            have a total of 4 years of experience working with web applications and
            possess deep skills in creating modern web applications and user
            interface components using ReactJS and related technologies. I can
            easily develop and customize components with consideration for best
            practices and ensure high performance, scalability, and accessibility of
            web applications. Proponent of semantically correct pages. I am also proficient in using Redux to manage
            application state and TypeScript to provide type safety and simplify
            development.
          </p>
        `
      }
    ],
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
          // {title: 'Window', key: 'window'},
          // {title: 'Language', key: 'language'},
        ]
      }
    ]
  }

const SKILLS: IView = {
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
}

const REACT: IView = {
  title: 'React',
  key: 'react',
  content: [
    {
      title: 'Description',
      key: 'description',
      text: 'React - is a JavaScript library that helps developers build user interfaces for web applications. It simplifies the process of creating interactive and dynamic UIs by breaking down the interface into reusable components.'
    },
    {
      title: 'Experience',
      key: "experience",
      innerHTML: `
            <p style="margin-top: 0">As a frontend developer with 4 years of experience, I have a strong proficiency in React along with a solid understanding of Redux, Hooks, and functional programming paradigms.</p>
            <p>Throughout my career, I have leveraged these technologies to create dynamic and interactive user interfaces for various web applications.<p/>
            <p> I am adept at utilizing React's component-based architecture to create reusable and maintainable code, promoting scalability and efficiency in development workflows.<p/>
            <p>Moreover, my familiarity with Redux enables me to effectively manage application state and orchestrate data flow, ensuring a predictable and stable user experience.<p/>
            <p>I have implemented Redux middleware and combined it with React to manage asynchronous actions and side effects seamlessly.<p/>
            <p>In addition, my expertise extends to utilizing React Hooks to manage component state and lifecycle in a functional and concise manner.<p/>
            <p> Leveraging the power of functional programming concepts in JavaScript, I strive to write clean, declarative, and composable code, enhancing readability and maintainability across projects.<p/>
            <p style="margin-bottom: 0">Overall, my extensive experience with React, Redux, Hooks, and functional programming has equipped me with the skills and knowledge necessary to tackle complex frontend challenges and deliver high-quality solutions that meet both user requirements and business objectives.<p/>
          `
    }
  ],
}

const HTML: IView = {
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
          `
      }
    ],
}

const CSS: IView = {
  title: 'CSS',
  key: 'css',
  content: [
    {
      title: 'Description',
      key: 'description',
      text: 'CSS - is a programming language that is used to design web pages. It defines how each element of a web page looks like: its color, size, layout, and other styles.'
    },
    {
      title: 'Experience',
      key: 'experience',
      innerHTML: `
          <p style="margin-top: 0">My expertise encompasses crafting visually appealing and user-friendly web interfaces through precise styling and layout techniques.</p> 
          <p>I'm adept at leveraging CSS to customize the appearance of web elements, ensuring consistency across different browsers and devices.</p> 
          <p>Additionally, I have a strong command of CSS frameworks and preprocessors, enabling me to streamline development processes and maintain clean, scalable code.</p>
          <p>My proficiency in CSS extends to implementing responsive design principles, optimizing performance, and troubleshooting styling issues effectively.</p>
          <p style="margin-bottom: 0">Overall, my years of experience have honed my skills in utilizing CSS to create engaging and functional web experiences.</p>
        `
    }
  ],
}

const JAVASCRIPT: IView = {
  title: 'JavaScript',
  key: 'javascript',
  content: [
    {
      title: 'Description',
      key: 'description',
      text: 'JavaScript - is a programming language used to make web pages interactive. It allows you to do things like show pop-up messages, validate forms, create animations, and dynamically update content on a webpage without needing to reload the entire page.'
    },
    {
      title: 'Experience',
      key: 'experience',
      innerHTML: `
          <p style="margin-top: 0"> My experience involves developing interactive and dynamic web applications, leveraging JavaScript to enhance user experiences and add functionality to websites.</p> 
          <p>I'm proficient in using JavaScript library such as React.js to create robust and scalable front-end solutions.</p> 
          <p>Additionally, I have expertise in vanilla JavaScript, allowing me to implement custom features and solve complex problems efficiently.</p>
          <p>I'm well-versed in asynchronous programming, utilizing promises, async/await, and AJAX to manage data fetching and processing seamlessly.</p>
          <p style="margin-bottom: 0">My experience also includes optimizing JavaScript code for performance and accessibility, ensuring smooth and responsive interactions across various browsers and devices.</p>
        `
    }
  ],
}

const TYPESCRIPT: IView = {
  title: 'TypeScript',
  key: 'typescript',
  content: [
    {
      title: 'Description',
      key: 'description',
      text: 'TypeScript - is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.'
    },
    {
      title: 'Experience',
      key: 'experience',
      innerHTML: `
          <p style="margin-top: 0">Over the course of my career, I've gained significant experience with TypeScript.</p> 
          <p>TypeScript is a superset of JavaScript that adds static typing to the language, which enhances code robustness and maintainability.</p> 
          <p>My proficiency with TypeScript involves leveraging its features such as type annotations, interfaces, and generics to catch errors during development and improve code clarity.</p>
          <p>I have successfully utilized TypeScript in various front-end and back-end projects, enabling me to write cleaner, more predictable code and facilitate collaboration within development teams.</p>
          <p style="margin-bottom: 0">Additionally, TypeScript's support for modern JavaScript features and tooling integration has empowered me to build scalable and maintainable applications with confidence.</p>
        `
    }
  ],
}

const REDUX: IView = {
  title: 'Redux',
  key: 'redux',
  content: [noDataContent],
}

const MUI: IView = {
  title: 'MUI & Material UI',
  key: 'mui',
  content: [noDataContent],

}

const AXIOS: IView = {
  title: 'Axios',
  key: 'axios',
  content: [noDataContent],
}

const CHARTJS: IView = {
  title: 'Chart.js',
  key: 'chartjs',
  content: [noDataContent],
}

const I18N: IView = {
  title: 'i18n',
  key: 'i18n',
  content: [noDataContent],
}

const THEME: IView = {
  title: 'Theme',
  key: 'theme'
}

const WINDOW: IView = {
  title: 'Window',
  key: 'window'
}

const LANGUAGE: IView = {
  title: 'Language',
  key: 'language'
}

const EXPERIENCE: IView = {
  title: 'Experience',
  key: 'experience',
  content: [
    {
      title: 'Description',
      key: 'description',
      text: 'This view describes the experience of working in different companies'
    },
    {
      title: 'May 2022 - Present',
      key: 'May 2022 - Present',
      innerHTML: `
        <b>Frontend Developer</b>
        <span>(Handiscover)</span>
        <ul>
          <li>Consistently met my short and long-term targets.</li>
          <li>Proactively participated in meetings and helped create new practices.</li>
          <li>Pitched ideas on how to improve performance and efficiency.</li>
          <li>Helped management to identify workflow issues and find solutions.</li>
          <li>Development of several related projects where the first project is an admin panel and the second project is a client-side application.</li>
          <li>Development of pages/modules based on Figma mockups.</li>
          <li>Development of adaptive pages/modules.</li>
          <li>Implementation of new features into old code, refactoring, debugging, and bug fixing.</li>
          <li>Use/customization of the MaterialUI library for future pages.</li>
        </ul>
      `
    },
    {
      title: 'January 2022 - May 2022',
      key: 'January 2022 - May 2022',
      innerHTML: `
        <b>Frontend Developer</b>
        <span>(EPAM Systems)</span>
        <ul>
          <li>Сode debugging/refactoring to improve readability and efficiency.</li>
          <li>Developing new features and redesigning existing features to improve user experience.</li>
          <li>Writing quality tests and actively participating in the code review process.</li>
          <li>Applied agile development principles to ensure effective teamwork and timely delivery of results.</li>
          <li>Used Git and Redux version control system to effectively manage the state of the application</li>
        </ul>
      `
    },
    {
      title: 'April 2021 - December 2021',
      key: 'April 2021 - December 2021',
      innerHTML: `
        <b>Frontend Developer</b>
        <span>(Forex Tester Software)</span>
        <ul>
          <li>Implemented an online chat assistant for websites using an iframe.</li>
          <li>Development of pages/modules based on Figma mockups.</li>
          <li>Development of adaptive pages/modules.</li>
          <li>Сode reviews</li>
          <li>Implementation of new features into old code, refactoring, and debugging.</li>
        </ul>
      `
    },
    {
      title: 'May 2019 - March 2021',
      key: 'May 2019 - March 2021',
      innerHTML: `
        <b>Frontend & Backend Developer</b>
        <span>(BeHealthy.AI)</span>
        <ul>
            <li>Developed a questionnaire page with dynamically pulling up new next questions from the BE side.</li>
            <li>Development of pages/modules based on Figma mockups.</li>
            <li>Development of adaptive pages/modules.</li>
            <li>Implementation of new features into old code, refactoring, and debugging.</li>
            <li>Development of endpoints on Django, development of components on VueJS.</li>
            <li>Сode reviews</li>
            <li>Writing tests</li>
        </ul>
      `
    },
  ]
}

const EDUCATION: IView = {
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
  ],
}

const LICENCES_AND_CERTIFICATIONS: IView = {
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
          <img style="width: 100%; height: 100%" src="${learningTypescript}"/>
        `
    },
    {
      title: 'React: Using TypeScript',
      key: 'react_using_typescript',
      innerHTML: `
          <img style="width: 100%; height: 100%" src="${reactUsingTypescript}"/>
        `
    },
    {
      title: 'Covid Challenge Hackathon',
      key: 'Covid Challenge Hackathon',
      innerHTML: `
          <img style="width: 100%; height: 100%" src="${covidChallengeHackathon}"/>
        `
    },
  ]
}

const CONTACTS: IView = {
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
        key: 'social',
        text: 'No have at the moment'
      },
    ]
}

const GIT: IView = {
  title: 'Git',
  key: 'git',
  content: [noDataContent]
}

export const VIEWS: IView[] = [
  GENERAL,
  SKILLS,
  REACT,
  HTML,
  CSS,
  JAVASCRIPT,
  TYPESCRIPT,
  REDUX,
  MUI,
  AXIOS,
  CHARTJS,
  I18N,
  THEME,
  WINDOW,
  LANGUAGE,
  EXPERIENCE,
  EDUCATION,
  LICENCES_AND_CERTIFICATIONS,
  CONTACTS,
  GIT
]

