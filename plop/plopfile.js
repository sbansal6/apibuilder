module.exports = ( plop ) => {

  plop.setGenerator( "model", {
  
     prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of your module?"
      }
    ],
    actions: [
        // Add a new model + tests boilerplate.
        {
          type: "add",
          path: "app/models/{{name}}.model.js",
          templateFile: "plop-templates/model.js"
        },
         {
          type: "add",
          path: "app/models/{{name}}.model.tests.js",
          templateFile: "plop-templates/model.test.js"
        },
    ]
    
  } );

};