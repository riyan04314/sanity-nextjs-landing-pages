export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e48cf1598450788dba4ad03',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-v5mmg51m',
                  apiId: '05877423-0325-41a1-a071-04e9731076a9'
                },
                {
                  buildHookId: '5e48cf15d96359e1082aab6b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vj19v7be',
                  apiId: '76cb80c9-3cb6-49ac-b895-ee79b472e64e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/riyan04314/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vj19v7be.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
