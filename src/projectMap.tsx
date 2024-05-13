//@ts-nocheck
import Arngren, {
  attributes as arngrenAttributes,
} from "./projects/arngren.md";
//@ts-nocheck
import AbTesting, {
  attributes as abTestingAttributes,
} from "./projects/ab-testing.md";
//@ts-nocheck
import Development, {
  attributes as developmentAttributes,
} from "./projects/development.md";
//@ts-nocheck
import IterativeDesign, {
  attributes as iterativeDesignAttributes,
} from "./projects/iterative-design.md";
//@ts-nocheck
import Cleatwiz, {
  attributes as cleatwizAttributes,
} from "./projects/cleatwiz.md";

/* TODO: Fix importing markdown so that `@ts-nocheck` is not necessary, allowing for better type inference 
@remarks
@see {@link https://github.com/pingdotgg/uploadthing/blob/main/vitest.config.ts|Resolve path aliases programmatically}
*/

const projectsMap = [
  {
    markdown: <Arngren />,
    attributes: arngrenAttributes,
  },
  {
    markdown: <AbTesting />,
    attributes: abTestingAttributes,
  },
  {
    markdown: <Development />,
    attributes: developmentAttributes,
  },
  {
    markdown: <IterativeDesign />,
    attributes: iterativeDesignAttributes,
  },
  // {
  //   markdown: <Cleatwiz />,
  //   attributes: cleatwizAttributes,
  // },
];

// export interface Project {
//   title: string;
//   description: string;
//   organization: string;
//   slug: string;
//   image: string;
//   // imagePreview: string;
//   // imageDesktop: string;
//   // imageMobile: string;
//   isAwardWinning?: boolean;
//   tag: string;
//   // Add more properties as needed
// }

// const projectsData: Project[] = [
//   {
//     title: 'Redesigning the Worst Website in the World',
//     organization: 'Arngren',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in metus vulputate eu. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.',
//     slug: 'project-1',
//     image: 'https://placehold.co/200',
//     isAwardWinning: true,
//     tag: "cs1300 responsive redesign"
//   },
//   {
//     title: 'Optimizing Medical Appointments',
//     organization: 'A/B Testing',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in metus vulputate eu. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.',
//     slug: 'project-2',
//     image: 'https://placehold.co/200',
//     tag: "cs1300 ab testing"
//   },
//   {
//     title: 'Simplifying Recipe Sites',
//     organization: 'Savory Stash',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in metus vulputate eu. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.',
//     slug: 'project-3',
//     image: 'https://placehold.co/200',
//     tag: "cs1300 development"
//   },
//   {
//     title: 'Innovating on A.I Documentation',
//     organization: 'DriverAI',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in metus vulputate eu. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.',
//     slug: 'project-4',
//     image: 'https://placehold.co/200',
//     tag: "cs1300 iterarive design"
//   },
//   // Add more project objects as needed
// ];

export default projectsMap;
