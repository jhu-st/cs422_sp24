module.exports = {
  title: 'Home',
  tagline: 'EN.601.422/622: Software Testing and Debugging',
  url: 'https://jhu-st.github.io',
  baseUrl: '/cs422_sp23/',
  favicon: 'img/logo1.png',
  organizationName: 'jhu-st', // Usually your GitHub org/user name.
  projectName: 'cs422_sp23', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    announcementBar: {
      id: 'announcement', // Any value that will identify this message.
      content:
        // '<a target="_blank" href="https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b9fa4890-edbc-48ab-b892-ac3901364a70">Lecture 5</a> posted! Also, <a href="/cs421_f20/docs/hw/hw2">Homework 2</a> is out! (due 9/24 11pm)',
        'Project Proposal due 4/3. HW5 posted! (Due 4/7)',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: '',
        src: 'img/logo1.png',
      },
      items: [
        {
          to: 'syllabus',
          activeBasePath: 'docs',
          label: 'Syllabus',
          position: 'left',
        },
        {
          to: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTzQmapu5Tc7z4dveL7LjkpfXJkq47Yqu5t8D3cjBGUDg7DC5yx0s9N15Nw6NXnC5FGN4JHEVbJOZJy/pubhtml',
          activeBasePath: 'docs',
          label: 'Tentative Schedule',
          position: 'left',
        },
        {
          to: 'lectures',
          activeBasePath: 'docs',
          label: 'Lectures',
          position: 'left',
        },
        {
          to: 'docs/rd/usab/intro',
          label: 'Readings',
          position: 'left',
        },
        {
          label: 'Exercises',
          position: 'left',
          items: [
            {
              label: 'Exercise 1', 
              to: 'docs/ex/ex1'         
            },
            {
              label: 'Exercise 2', 
              to: 'docs/ex/ex2'         
            },
            {
              label: 'Exercise 3', 
              to: 'docs/ex/ex3'         
            },
            {
              label: 'Exercise 4', 
              to: 'docs/ex/ex4'         
            },
            {
              label: 'Exercise 5', 
              to: 'docs/ex/ex5'         
            },
            {
              label: 'Exercise 6', 
              to: 'docs/ex/ex6'         
            },
            {
              label: 'Exercise 7', 
              to: 'docs/ex/ex7'         
            },
            {
              label: 'Exercise 8', 
              to: 'docs/ex/ex8'         
            },
            {
              label: 'Exercise 9', 
              to: 'docs/ex/ex9'         
            },
            {
              label: 'Exercise 10', 
              to: 'docs/ex/ex10'         
            },
            {
              label: 'Exercise 11', 
              to: 'docs/ex/ex11'         
            },
            {
              label: 'Exercise 12', 
              to: 'docs/ex/ex12'         
            }
            
          ]
        },       
        {
          label: 'Homework',
          position: 'left',
          items: [
            {
              label: 'Homework 0', 
              to: 'docs/hw/hw0'         
            },
            {
              label: 'Homework 1', 
              to: 'docs/hw/hw1'         
            },
            {
              label: 'Homework 2', 
              to: 'docs/hw/hw2'         
            },
            {
              label: 'Homework 3', 
              to: 'docs/hw/hw3'         
            },
            {
              label: 'Homework 4', 
              to: 'docs/hw/hw4'         
            },
            {
              label: 'Homework 5', 
              to: 'docs/hw/hw5'         
            }
          ],
        },
        {
          to: '#',
          label: 'Project',
          position: 'left',
          items: [
            {
              label: 'Project Outline', 
              to: 'docs/project'         
            }
          ]
        },
        {
          label: 'Comprehensive Test',
          position: 'left',
          items: [
            {
              label: 'Comprehensive Test Details', 
              to: 'docs/test'         
            },
            {
              label: 'Practice Questions', 
              to: 'https://docs.google.com/document/d/1GaPo5IYd_H5KFTcAZwlbCkOiGrIMmveJULBOpSb-rx8/edit?usp=sharing'         
            },
            {
              label: 'Practice Test Solutions', 
              to: 'https://docs.google.com/document/d/1iLz9HgvKmcJe3FNT7oSqA3A85okoIThIuaredqkQ8Ns/'         
            }
            
          ]
        }
      ],
    },
    footer: {
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
