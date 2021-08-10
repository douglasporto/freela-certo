module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
      {
        type: 'input',
        name: 'path',
        message: 'What path?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase path}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/ComponentIndex.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase path}}/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase path}}/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
