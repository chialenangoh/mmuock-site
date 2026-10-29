// Site constants and structured content carried over verbatim from the
// WordPress site (export of 2026-10-29) unless noted.

export const SITE = {
  name: "M'muock Fosimondi Community Ohio USA",
  legalName: "M'MUOCK FOSIMONDI COMMUNITY USA-OHIO CORP",
  tagline: 'Stronger Together',
  address: '2787 Marwood Court, Columbus, Ohio 43232',
  phoneDisplay: '+1 614-695-0486',
  phoneHref: 'tel:+16146950486',
  email: 'info@mmuockfosimondiohio.org',
  facebook: 'https://www.facebook.com/mmuockfosimondiohio',
  youtube: 'https://www.youtube.com/@muockfosimondiohiousa',
  stripeDonate: 'https://buy.stripe.com/4gM00i9j6c9U4ug5ufasg02',
  logo: '/images/Logo-icon-and-text-Mmuock-Fosimondi-Community-Ohio-USA.png',
  logoIcon: '/images/Logo-3-icon-Mmuock-Fosimindi-Community-Ohio.jpg',
}

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] }

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about-us',
    children: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Mission & Vision', href: '/mission-vision' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Membership', href: '/membership' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  { label: 'Our Activities', href: '/our-activities' },
  {
    label: 'Our Impact',
    href: '/our-impact',
    children: [
      { label: 'Our Impact', href: '/our-impact' },
      { label: 'Photo Gallery', href: '/photo-gallery' },
      { label: 'Video Gallery', href: '/video-gallery' },
    ],
  },
  { label: 'News & Stories', href: '/news-stories' },
  {
    label: 'Get Involved',
    href: '/get-involved',
    children: [
      { label: 'Get Involved', href: '/get-involved' },
      { label: 'Become a Member', href: '/membership' },
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Partner With Us', href: '/partners' },
      { label: 'Donate', href: '/donate' },
    ],
  },
]

export const MISSION =
  "Our mission is to empower and enrich the lives of individuals within the M'muock Fosimondi community through educational development, scientific empowerment, community outreach, cultural enrichment, and spiritual guidance. We aim to organize seminars, workshops, and webinars to foster networking, career orientation, and job placement, encourage and empower community members through scientific projects aimed at finding solutions to benefit humanity, engage in charitable activities such as community clean-ups, assisting the needy, and distributing food items to those in need, promote and preserve the rich cultural heritage of the M'muock community through various cultural activities and events, and connect individuals facing spiritual challenges with spiritual leaders and places of worship."

export const VISION =
  'Our vision is to foster a strong and supportive community where individuals thrive through knowledge, innovation, and cultural pride. We aspire to create a ripple effect of positivity, enriching lives locally and globally, while preserving our rich heritage and providing spiritual guidance and support.'

export const ACTIVITIES = [
  {
    title: 'Educational Development',
    image: '/images/Educational-Development.avif',
    text: "We support education in M'muock by sensitizing the population on the importance of education, building classrooms and other infrastructure, providing educational materials, giving scholarships, etc.",
  },
  {
    title: 'Promoting Science',
    image: '/images/Scientific-empoweerment.jpg',
    text: 'We encourage sciences among M\'muock people and beyond, by supporting individuals who engage in sciences. We equally provide special scholarships and support to science students. Moreover, we promote scientific innovation and development.',
  },
  {
    title: 'Community Outreach',
    image: '/images/Community-Outreach.jpg',
    text: 'We support one another in the community at all times during both happy and sad moments. We equally engage in charitable activities such as community clean-ups, assisting the needy, and distributing food items to those in need, fostering community spirit and solidarity.',
  },
  {
    title: 'Promotion of Culture',
    image: '/images/Mmuock-Fosimondi-Community-USA-2-27.jpg',
    text: "We engage in activities that promote and preserve the rich cultural heritage of the M'muock community through various cultural activities and events, celebrating traditions and enhancing cultural pride.",
  },
  {
    title: 'Fostering Unity',
    image: '/images/Many-hands-holding-each-other.jpeg',
    text: "We believe that we are stronger together. One of our main areas of focus is uniting and bringing together M'muock People across Ohio and beyond. We work together as one people for the common good.",
  },
  {
    title: 'Spiritual Guidance',
    image: '/images/Spiritual-Guidance.jpg',
    text: 'Connecting individuals facing spiritual challenges with spiritual leaders and places of worship, providing guidance and support in spiritual matters, nurturing spiritual well-being and community unity.',
  },
]

// Leadership team — names and roles verbatim from the WordPress Leadership page.
// Photos matched to the portraits uploaded for that page; members without a
// portrait on the old site are shown without one.
export const LEADERSHIP: { name: string; role: string; photo?: string }[] = [
  { name: 'Claude Nangoh', role: 'President', photo: '/images/Claude-Nangoh.jpg' },
  { name: 'Briant Fozao', role: 'Vice president' },
  { name: 'Njofie Betrant Nangatie', role: 'Secretary', photo: '/images/Njofie-Betrand.jpg' },
  { name: 'Charles Ntepah', role: 'Technical Adviser', photo: '/images/Charles-Ntepah.jpg' },
  { name: 'Jerister Ziamah', role: 'Technical Adviser', photo: '/images/Jerister.jpg' },
  { name: 'Tendongfor Thomas', role: 'Financial Secretary', photo: '/images/Tendongfor-Thomas.jpg' },
  { name: 'Nzometia Kelvin', role: 'Treasurer' },
  { name: 'Asa-ah Felix Tengim', role: 'Cultural leader', photo: '/images/Felix-Tengim.jpg' },
  { name: 'Vincent N Forchia', role: 'Ass Cultural Leader', photo: '/images/Vincent-N.-Forchia.jpg' },
  { name: 'Zaomoh Pascaline', role: 'Ass Cultural Leader', photo: '/images/Pascaline-Zaomoh.jpg' },
  { name: 'Longtse Juline  Nwopedem', role: 'Sport Coordinator' },
  { name: 'Ndemezeh Roy Forsia', role: 'social organiser', photo: '/images/Ndemezeh-forsia.jpg' },
  { name: 'Joseph Fozao', role: 'Ass organiser', photo: '/images/Joseph-Fozao.jpg' },
  { name: 'Forchia Bazil', role: 'Disciplinary Leader', photo: '/images/Bazil-2.jpg' },
]
