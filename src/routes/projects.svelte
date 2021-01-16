<script>
  import Header from '../components/Header.svelte';
  import Company from '../components/Company.svelte';
  import Footer from '../components/Footer.svelte';

  import type CompanyType from '../../typings/Components/Company';

  const companies: CompanyType[] = [
    {
      name: 'artwishlist',
      columns: {
        start: 2,
        span: 10,
      },
      carousel: [
        {
          type: 'logo',
          width: '1/3',
        },
        {
          type: 'video',
        },
        {
          type: 'image',
          name: 'Database',
        },
        {
          type: 'image',
          name: 'Glass',
        },
      ],
      employerText: 'Artwishlist unifies the art market by facilitating dealers, advisors & collectors matchmaking through its Introductions Platform. It relies on the Provenance Database which contains details for over 10 million artworks which can be researched online or through Glass, Artwishlist\'s chat bot image recognition service.',
      roleText: 'Working as a CTO in a small-scale startup means wearing many hats. Apart from managing the tech team & shaping the product roadmap alongside the stakeholders, part of the job was to delve deep into back/front-end, scripting & devops, using a wide range of tools, languages & frameworks. Taking critical decisions at hand resulted in a failsafe tech system design based on a microservices architecture.',
      tools: ['Ruby', 'Rails', 'Sass', 'Angular', 'Docker', 'Kubernetes', 'Github', 'Elasticsearch', 'Redis', 'Postgresql']
    },
    {
      name: 'myTomorrows',
      columns: {
        start: 6,
        span: 7,
        '2xl': {
          start: 7,
          span: 6,
        },
      },
      carousel: [
        {
          type: 'logo',
          width: '1/2',
        },
        {
          type: 'image',
        },
        {
          type: 'image',
          name: 'Contact',
        },
      ],
      employerText: 'myTomorrows has a mission to provide every patient with earlier and better access to all possible treatment options in development, while enabling pharmaceutical companies to partner with patients in order to facilitate clinical research.',
      roleText: 'In the role of Full Stack Engineer & Consultant I identified issues, provided recommendations and implemented solutions in-time while also analysed potential bottlenecks and threats in order to create a future-proof platform',
      tools: ['AWS', 'Matomo', 'Djangocms', 'Django', 'Python', 'Angular', 'Typescript']
    },
    {
      name: 'mobiquity',
      columns: {
        start: 1,
        span: 9,
        '2xl': {
          start: 1,
          span: 8,
        },
      },
      carousel: [
        {
          type: 'logo',
          width: '1/3',
        },
        {
          type: 'image',
          name: 'BPI',
        },
        {
          type: 'image',
          name: 'ABC',
        },
      ],
      employerText: `Mobiquity is a global digital consultancy which blends strategy, creativity & engineering in order to guide the world’s leading brands understand & apply with technology in meaningful way.
      Notable clients are Bayer, Nestle, LeasePlan, Amazon, kpn, BPI, Philips, Rabobank, Novartis.`,
      roleText: 'As a Front-End Lead I took initiatives to improve the organisation\'s workflow. Participated in interviews & guided junior front-enders to develop their skills. Worked in international, agile & multidisciplinary teams towards providing tailored high quality digital solutions.',
      tools: ['AWS', 'Gatsby', 'React', 'Angular', 'Backbase', 'Typescript', 'Javascript', 'Sass', 'Bootstrap']
    },
    {
      name: 'peoplePerHour',
      columns: {
        start: 6,
        span: 7,
        '2xl': {
          start: 6,
          span: 6,
        },
      },
      carousel: [
        {
          type: 'logo',
          width: '1/2',
        },
        {
          type: 'image',
        },
      ],
      employerText: 'PeoplePerHour is the UK’s leading marketplace for people to become financially & professionally independent through freelancing.',
      roleText: 'As a Back-end Engineer debugging, maintenance and creating new features in PHP and MySQL were my duties for the PeoplePerHour platform.',
      tools: ['Yii2', 'PHP', 'Javascript', 'CSS3', 'HTML5']
    },
    {
      name: 'epu',
      nameC: 'EPU',
      columns: {
        start: 1,
        span: 9,
        '2xl': {
          start: 2,
          span: 8,
        },
      },
      carousel: [
        {
          type: 'logo',
          width: '1/4',
          format: 'png',
          border: true,
        },
        {
          type: 'image',
          name: 'NTUA-Cloudteams',
        },
        {
          type: 'image',
          name: 'NTUA-OPENi-ICT',
        },
        {
          type: 'image',
          name: 'NTUA-Optimus',
        },
        // {
        //   type: 'image',
        //   name: 'NTUA',
        // },
      ],
      employerText: 'EPU is a scientific unit which carries out R&D services on a wide range of complex business, societal & technical issues. EPU-NTUA provisions the training of under/post-graduate engineers, runs extensive research & facilitates the authoring of scientific papers. It has partnered with major Greek, European & international organisations.',
      roleText: 'In the position of Researcher & Engineer I started a PhD & published papers regarding the API interconnectivity through a specification. Worked for the public sector in Greece & EU programmes alongside European universities & large companies, under tight deadlines.',
      tools: ['Docker', 'Mysql', 'Django', 'Python', 'Yii2', 'PHP', 'Javascript', 'MaterialDS', 'Bootstrap']
    },
  ]
</script>

<style>
  /* Smooth scrolling ONLY IF user doesn't have a preference due to motion sensitivities */
  @media screen and (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: smooth;
    }
  }
</style>

<svelte:head>
  <title>romdim B.V. | Projects</title>
  <meta name="description" content="">
</svelte:head>

<div class="md:px-5 lg:px-0 w-screen max-w-screen-3xl m-auto font-mono">
  <div id="top" class="absolute top-0"></div>
  <Header />

  <section>
    <div class="grid grid-cols-12">
      {#each companies as company}
        <Company {company} />
      {/each}
    </div>
  </section>

  <Footer page="projects"/>
</div>
