/* TODO: Make prompting more type-safe and more user-friendly
  @see {@link https://github.com/jondot/hygen/issues/35|Advanced Interactive Prompts for Hygen}
  @see {@link https://github.com/enquirer/enquirer/tree/master/examples|Interactive Prompts for Hygen}
*/
/* TODO: Add documentation for more user-friendly prompting
  @see {@link https://www.hygen.io/docs/generators#documenting-your-generators|Documenting Hygen generators}
*/
/* TODO: Let user know that the respective images for the project aren't in the assets folder
 */
module.exports = [
  /* TODO: If no title is supplied, use local LLM to generate a title?
   */
  /* TODO: Give hint using an example title?
   */
  {
    type: "input",
    name: "title",
    message: "What's the title of the project?",
  },
  /* TODO: Give hint using an example organization?
   */
  {
    type: "input",
    name: "organization",
    message: "For whom was this project for?",
  },
  /* TODO: Make sure description is sentence case for every sentence
   */
  /* TODO: Maybe add a sentence or character limit for description?
   */
  /* TODO: If no description is supplied, use local LLM to generate a description?
   */
  /* TODO: Give hint using an example organization?
   */
  {
    type: "input",
    name: "description",
    message: "What is an interesting description for the project?",
  },
  /* TODO: Make prompt only accept yes or no, and correctly transform it to a boolean
    @remarks
    @see {@link https://github.com/jondot/hygen/issues/35|Advanced Interactive Prompts for Hygen}
    @see {@link https://github.com/enquirer/enquirer/tree/master?tab=readme-ov-file#list-prompt|Enquirer confirm prompt}
  */
  {
    // type: 'confirm',
    type: "input",
    name: "awardWinning",
    message: "Was this project award-winning? (yes or no)",
  },
  /* TODO: Make prompt accept multiple tags
    @remarks
    @see {@link https://github.com/jondot/hygen/issues/35|Advanced Interactive Prompts for Hygen}
  */
  /* TODO: Give hint using an example tag or tags?
   */
  {
    /* TODO: Make prompt accept multiple tags using Enquirer
    @remarks
    @see {@link https://github.com/enquirer/enquirer/tree/master?tab=readme-ov-file#list-prompt|Enquirer list prompt}
    */
    // type: "question",
    type: "input",
    name: "tag",
    message: "What is the tag for the project?",
  },
];
