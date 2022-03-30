const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
module.exports = (plop) => {
  clear();
  console.log(
    chalk.blue(
      figlet.textSync("RTBlocks", {
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
  plop.setHelper("splitCapitalize", (text) => {
    return text
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
  plop.setHelper("lowercase", (text) => text.toLowerCase());
  plop.setGenerator("React Tailwind Blocks CLI", {
    description: "Create a React Tailwind Blocks CLI",
    prompts: [
      {
        type: "list",
        name: "kind",
        message: "What you want to create?",
        choices: [
          {
            name: "Component",
            value: "component",
          },
          {
            name: "Docs",
            value: "docs",
          },
        ],
      },
      {
        type: "input",
        name: "type",
        message: "What is your doc section name?",
        when: (answers) => answers.kind === "docs",
      },
      {
        type: "input",
        name: "name",
        message: "What is your file name?",
      },
    ],
    actions: (data) => {
      let actions = [];
      if (data.kind === "component") {
        actions.push({
          type: "add",
          path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
          templateFile: "./templates/component/component.tsx.hbs",
        });
        actions.push({
          type: "add",
          path: "../src/components/{{pascalCase name}}/{{pascalCase name}}Styles.ts",
          templateFile: "./templates/component/styles.ts.hbs",
        });
        actions.push({
          type: "add",
          path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
          templateFile: "./templates/component/stories.tsx.hbs",
        });
        actions.push({
          type: "add",
          path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
          templateFile: "./templates/component/test.tsx.hbs",
        });
        actions.push({
          type: "add",
          path: "../src/components/{{pascalCase name}}/{{pascalCase name}}Props.ts",
          templateFile: "./templates/component/props.ts.hbs",
        });
        actions.push({
          type: "add",
          path: "../src/components/{{pascalCase name}}/index.ts",
          templateFile: "./templates/component/index.ts.hbs",
        });
      } else if (data.kind === "docs") {
        actions.push({
          type: "add",
          path: "../src/docs/{{lowercase type}}/{{pascalCase name}}.stories.mdx",
          templateFile: "./templates/docs/stories.mdx.hbs",
        });
      } else {
        throw new Error("Unknown kind in", data);
      }

      return actions;
    },
  });
};
