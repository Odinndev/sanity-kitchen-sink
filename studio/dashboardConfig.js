export default {
  widgets: [
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
                  buildHookId: '5f8b6eb4de1d9885bf1f6476',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6nzwokkh',
                  apiId: 'dc101abc-4a3b-483b-bc0e-4b55f045c156'
                },
                {
                  buildHookId: '5f8b6eb483cc57eb291c87ae',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ag931bos',
                  apiId: '7eaa112e-d318-43c6-9124-dedb253662de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/odinnmk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ag931bos.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
