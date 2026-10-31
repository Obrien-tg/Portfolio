// Project facts below were checked against each repository's README and files.
export type Project = {
  name: string;
  description: string;
  stack: string[];
  status: 'Live' | 'Source only';
  highlight: string;
  url: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    name: 'King Craft Arts',
    description:
      'A portfolio and custom-enquiry website for a South African bag brand, with a clear path for customers interested in made-to-order work.',
    stack: ['Astro', 'Tailwind CSS', 'TypeScript', 'Netlify Forms'],
    status: 'Live',
    highlight: 'Deliberately simple: a static gallery and enquiry form, with no checkout or database to maintain.',
    url: 'https://github.com/Obrien-tg/Kingcrafts-Arts',
    liveUrl: 'https://kingcraftsarts.netlify.app',
  },
  {
    name: 'PG Tutoring Hub',
    description:
      'A tutoring platform designed around teacher, student, and parent roles, with learning materials, assignments, progress tracking, and communication.',
    stack: ['Django', 'PostgreSQL', 'Channels (chat)', 'Docker'],
    status: 'Source only',
    highlight: 'My most complex build so far: multiple user roles, real-time chat, and deployment and security notes in the repo.',
    url: 'https://github.com/Obrien-tg/pg-tutoring-hub',
  },
  {
    name: 'Inteli Auto Services',
    description:
      'A service website for an auto-electrical business in Steelpoort, Limpopo, built to give a local service provider a clearer online presence.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Docker'],
    status: 'Source only',
    highlight: 'A small, fast, no-framework site: a good example of what a local business actually needs.',
    url: 'https://github.com/Obrien-tg/-inteli-auto-services-',
  },
  {
    name: 'The Cathedral / Lumi',
    description:
      'Two Android apps built on one shared engine, exploring formation, discipline, and daily structure: The Cathedral for adults, and Lumi for Grade 7 learners.',
    stack: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Hilt', 'Room'],
    status: 'Source only',
    highlight: 'One shared core powering two differently themed apps, with no streak-shaming by design.',
    url: 'https://github.com/Obrien-tg/The-Cathedral',
  },
];

// DRAFT prices: starting points based on typical South African small-business
// rates. Change these to whatever you are comfortable charging before you publish.
export const services = [
  {
    title: 'Build',
    from: 'From R1,500 (one page) · R3,500 (multi-page)',
    forWho: 'Small businesses, creatives and community projects that need a first website or tool.',
    description:
      'Starting with an idea? I help shape it into a website, app, or digital tool: clarify what it needs to do, keep the first version focused, and build something people can actually use.',
    includes: ['A short discovery chat', 'Design and build, mobile-first', 'Contact form and basic SEO', 'Deployment and a handover walkthrough'],
  },
  {
    title: 'Renovate',
    from: 'From R2,500',
    forWho: 'Anyone whose current site feels dated, confusing, or hard to update.',
    description:
      'I rethink the structure and presentation of your existing site while keeping the parts that still work.',
    includes: ['A review of what is working and what is not', 'Clearer pages and navigation', 'Mobile and speed fixes', 'Content you can update yourself'],
  },
  {
    title: 'Maintain',
    from: 'From R350 / month',
    forWho: 'Site owners who want someone looking after the small stuff.',
    description:
      'Updates, small fixes, content changes, and practical improvements to keep your site useful. The exact support depends on your setup.',
    includes: ['Content and text edits', 'Updates and backups', 'Small fixes and improvements', 'A reply within two working days'],
  },
  {
    title: 'Grow',
    from: 'Quoted per project',
    forWho: 'Businesses ready to make it easier for the right people to find and understand them.',
    description:
      'Clearer pages, a more useful customer journey, and a site that evolves as your business changes.',
    includes: ['Messaging and page-structure review', 'Search basics (titles, descriptions, sitemap)', 'Simple enquiry tracking set-up', 'A short improvement roadmap'],
  },
];

export const faqs = [
  {
    q: 'How much will it cost?',
    a: 'Each service shows a starting price. After we talk, I give you a fixed quote in writing before any work begins, so there are no surprises.',
  },
  {
    q: 'How long does a website take?',
    a: 'A simple one-page site can take about a week once I have your content. A multi-page site usually takes two to four weeks, depending on how quickly we can agree on content and feedback.',
  },
  {
    q: 'Do I pay upfront?',
    a: 'I ask for a deposit to start (typically half) and the balance when you are happy with the finished work.',
  },
  {
    q: 'Who owns the site?',
    a: 'You do. I hand over everything at the end, including the code, so you are never locked in.',
  },
  {
    q: 'I am not technical. Is that a problem?',
    a: 'Not at all. You do not need a perfect brief or the right words. Tell me what you are trying to do and we will work out the rest.',
  },
  {
    q: 'What if I am not sure I need a website?',
    a: 'That is a fair question and I will answer it honestly. If something simpler will serve you better, I will say so.',
  },
];
