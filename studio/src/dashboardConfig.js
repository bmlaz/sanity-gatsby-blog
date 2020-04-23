export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ea160dce8e85a5f1a8e25fc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ur28jjwg',
                  apiId: '8d347420-5ef1-489e-b91a-d05cc926a961'
                },
                {
                  buildHookId: '5ea160dc6f21567e0be68895',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-czx5hv7p',
                  apiId: '57bcd3de-b129-4824-9d63-2b10f1314bdd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bmlaz/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-czx5hv7p.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
