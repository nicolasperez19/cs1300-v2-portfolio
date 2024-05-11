/* TODO: Make prompting more type-safe and more user-friendly
  @see {@link https://github.com/jondot/hygen/issues/35|Advanced Interactive Prompts for Hygen}
  @see {@link https://github.com/enquirer/enquirer/tree/master/examples|Interactive Prompts for Hygen}
  @see {@link https://github.com/kfern/my-vue-monorepo/blob/e93424c94ede85090191165fedc42ca7e6f7ec86/packages/components/lib/inputs.utils.js| Advanced Interactive prompts in functional style}
*/
/* TODO: Add documentation for more user-friendly prompting
  @see {@link https://www.hygen.io/docs/generators#documenting-your-generators|Documenting Hygen generators}
*/

const getProjectInputs = async (inquirer, args) => {
  /* TODO: If no title is supplied, use local LLM to generate a title?
   */
  /* TODO: Let user know that the respective images for the project aren't in the assets folder
    @see {@link https://github.com/blakeembrey/change-case| Change case library documentation}
     */
  const { title } = await inquirer.prompt({
    type: "input",
    hint: "Streamlining Inventory Management: How a Custom ERP Solution Transformed XYZ Corporation's Supply Chain",
    name: "title",
    message: "What's the title of the project?",
  });

  const { organization } = await inquirer.prompt({
    type: "input",
    hint: "XYZ Corporation",
    name: "organization",
    message: "For whom was this project for?",
  });

  /* TODO: Make sure description is sentence case for every sentence
   */
  /* TODO: Maybe add a sentence or character limit for description?
   */
  /* TODO: If no description is supplied, use local LLM to generate a description?
   */
  const { description } = await inquirer.prompt({
    type: "input",
    hint: "This is a random description",
    name: "description",
    message: "What is an interesting description for the project?",
    result: (description) =>
      description == ""
        ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sapiente dolorum asperiores amet tenetur tempore maiores officia dolorem provident aliquam atque dolore quos modi, blanditiis doloribus qui architecto inventore dolor."
        : description,
  });

  const { awardWinning } = await inquirer.prompt({
    type: "confirm",
    name: "awardWinning",
    message: "Was this project award-winning? (yes or no)",
  });

  /* TODO: Make prompt accept multiple tags using Enquirer
        @remarks
        @see {@link https://github.com/enquirer/enquirer/tree/master?tab=readme-ov-file#list-prompt|Enquirer list prompt}
        */
  const { tag } = await inquirer.prompt({
    // type: "question",
    type: "input",
    hint: "cs1300 redesign",
    name: "tag",
    message: "What is the tag for the project?",
  });

  const results = {
    name: args.name,
    title,
    organization,
    description,
    awardWinning,
    tag,
  };

  return results;
};

module.exports = {
  prompt: async ({ inquirer, args }) => {
    return getProjectInputs(inquirer, args);
    // return getProjectInputs(inquirer, args).then((inputs) => {
    //   import("../../../src/utils/checkProjectImages.mjs").then((utils) =>
    //     utils.checkProjectImages(inputs.name),
    //   );
    // });
  },
};
