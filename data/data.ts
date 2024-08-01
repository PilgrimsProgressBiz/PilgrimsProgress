import homeHeaderImage from '../public/images/headerImage.png'
import youtubeIcon from '../public/images/youtubeIcon.png'
import FacebookIcon from '../public/images/blog-detail-fb.png'
import LocationIcon from '../public/images/location-icon.png'
import PhoneIcon from '../public/images/phone-icon.png'
import MailIcon from '../public/images/mail-icon.png'
import TestimonialLeft from '../public/images/testimonial-left.svg'
import TestimonialRight from '../public/images/testimonial-right.svg'
import LinkdeinIcon from '../public/images/linkdein-icon.png'
import InstagramIcon from '../public/images/instagram-icon.png'

/*********          Header Menu Data            ********** */
export const pages = [
  {
    path: '/',
    text: 'Services',
  },
  {
    path: '/contact-us',
    text: 'Contact Us',
  },
  {
    path: '/',
    text: 'Meet the team',
  },
  {
    path: 'https://britishacademicguardians.com/',
    text: 'UK Guardianship'
  }
]




export const siteName = 'Pilgrims Progress'

/***********            Home Page Main Data             *********** */
export const homeData = {
  title: `${siteName}`,
  header: 'Transform Your Business With Us',
  headerImage: homeHeaderImage,
  heading: 'Welcome to Pilgrim\'s Progress',
  homeAim:
    'Pilgrims Progress is a company specialising in personal change enabling success, and resulting in achievement and balance',
  contactUsButtonText: 'Contact Us',
  videoButtonText: 'Watch Video',
  youtubeIcon: youtubeIcon,
  paragraphs: [
    {
      para: `Prixite is one online technology solutions provider company that is
            considered as a new breed of thinkers who is driven to create
            effective business solutions for its clients. We aspire to become
            our client’s first choice when it comes to being a world leader in
            the progress and advancement of businesses through digital
            platforms.`,
    },
    {
      para: `Our goal is to offer our clients complete customer satisfaction,
            growth, innovation, and a continuous path to evolve and grow within
            their industry. We aim to constantly bring innovative solutions to
            cater to our client’s requirements and expectations.`,
    },
    {
      para: `Our team of professionals is always on our client’s side offering
            them alluring and tailor-made solutions to the ever-changing
            landscape of their business industry to achieve innovative,
            scalable, customized, and cost-effective solutions to your business
            needs.`,
    },
  ],
}




/**********           Testimonials Data             ********** */
export const testimonialsData = {
  heading: 'Our Testimonials',
  leftImg: TestimonialLeft,
  rightImg: TestimonialRight,
}

// TODO: this section to be changed drastically.
/**********            Home Page Services Data          ********* */
export const servicesData = {
  servicesPageTitle: 'Services',
  servicesPageHeader: 'We are Offering the Amazing Services 🚀',
  servicesHeading: 'Our Services',
  servicesAim:
    '',
}

/**********             Meet The Team Data            *************/
export const meetTheTeamData = {
  title: 'Meet The Team',
  header: '',
  heading: '',
  aim: '',
  description: `Jonathan and Terri-Louise provide coaching and counselling services from their purpose built location on the banks of the river Tavy in tavistock dartmoor.`,
  visionTitle: 'Our Vision',
  visionAim: '',
  teamMembers: [
    {
      id: 1,
      title: 'FCIPD, Assoc of Coaching and Master NLP',
      name: 'Jonathan Pilgrim',
      image: '/images/employees/Jonathan_new.jpg',
      imageB: '/images/employees/Jonathan_new.jpg',
      description: `Jonathan is a highly experienced coach and trainer with a background in HR and Training. He has worked in a variety of sectors including retail, manufacturing, and the public sector. He has a passion for helping people to reach their full potential and has a reputation for being able to help people to make lasting change in their lives.`,
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      name: 'Terri-Louise Pilgrim',
      image: '/images/employees/Terri-Louise_new.jpg',
      imageB: '/images/employees/Terri-Louise_new.jpg',
      description: `Terri-Louise is a qualified counsellor and coach. She has a background in the NHS and has worked in a variety of settings including GP surgeries, schools, and colleges. She has a passion for helping people to overcome their difficulties and to reach their full potential.`,
    }
  ]
}


/*********          Contact Us Page Data            ************* */
export const contactUs = {
  title: `${siteName} - Contact Us`,
  heading: 'Contact Us & Start Build Amazing Products',
}

/**********             Careers Page Data           ************* */
export const careersData = {
  title: `${siteName} - Careers`,
  heading: 'JOIN US',
  buttonText: 'Search Jobs',
}

export const joinUsLinkIcons = [
  {
    icon: FacebookIcon,
    width: 13,
    height: 20,
    path: 'https://web.facebook.com/prixite/',
  },
  {
    icon: LinkdeinIcon,
    width: 24,
    height: 25,
    path: 'https://www.linkedin.com/company/prixite/mycompany/',
  },
]

/*********          Meet the Team Page Data            ************* */
export const categories: Array<string> = [
  'All'
]

export interface Employee {
  id: number
  name: string
  title: string
  image: string
  description: string
  moreInfo: string
  DevelopmentStack: Array<string>
  facebookLink?: string
  twitterLink?: string
  linkedInLink?: string
  category: string
}

/**************             Footer Data         ************ */
export const footerData = {
  copyright: `Pilgrims Progress © ${new Date().getFullYear()}. All Rights Reserved`,
  details: [
    {
      icon: LocationIcon,
      desc: '12 Mount Tavy Road, Tavistock, PL19 9JB',
    },
    {
      icon: PhoneIcon,
      desc: '+44 (0)7 970 691 773',
    },
    {
      icon: MailIcon,
      desc: 'admin@pilgrimsprogress.biz',
    },
  ],
  info: {
    title: 'More Information',
    contactUs: [
      {
        text: 'Meet The Team',
        path: '/',
      },
      {
        text: 'Contact us',
        path: '/contact-us',
      },
      {
        text: 'Services',
        path: '/',
      }
    ],
  },
  joinUs: {
    title: 'Join Us On',
    links: [
      {
        icon: FacebookIcon,
        width: 13,
        height: 20,
        path: 'https://web.facebook.com/prixite/',
      },
      {
        icon: LinkdeinIcon,
        width: 24,
        height: 25,
        path: 'https://www.linkedin.com/company/prixite/mycompany/',
      },
      {
        icon: InstagramIcon,
        width: 24,
        height: 25,
        path: 'https://www.instagram.com/prixitegram/',
      },
    ],
  },
}

export const contactForm = {
  success: 'Submitted',
  error: 'Not submitted. Please try again!',
}

export const productsList = {
  title: `${siteName} - Product`,
  header: 'Our Products',
  heading:
    'Our aim is to build secure and reliable products and fulfill our clients requirements.',
}
