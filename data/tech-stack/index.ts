import AndroidStudioIcon from '@/public/images/icons/android.svg';
import AngularIcon from '@/public/images/icons/angular.svg';
import DotnetIcon from '@/public/images/icons/dotnet.svg';
import GoogleAnalyticsIcon from '@/public/images/icons/google-analytics.svg';
import GradleIcon from '@/public/images/icons/gradle.svg';
import JavaIcon from '@/public/images/icons/java.svg';
import JavaScriptIcon from '@/public/images/icons/javascript.svg';
import JolibrainIcon from '@/public/images/icons/jolibrain.svg';
import KotlinIcon from '@/public/images/icons/kotlin.svg';
import NodejsIcon from '@/public/images/icons/nodejs.svg';
import ReactIcon from '@/public/images/icons/react.svg';
import ScalaIcon from '@/public/images/icons/scala.svg';
import SwiftIcon from '@/public/images/icons/swift.svg';
import TestingIcon from '@/public/images/icons/testing.svg';
import TypeScriptIcon from '@/public/images/icons/typescript.svg';
import WebpackIcon from '@/public/images/icons/webpack.svg';

const techStack = [
  {
    id: 1,
    stackName: 'Frontend',
    stacks: [
      {
        id: 1,
        name: 'React',
        icon: ReactIcon,
      },
      {
        id: 2,
        name: 'JavaScript',
        icon: JavaScriptIcon,
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: TypeScriptIcon,
      },
    ],
  },
  {
    id: 2,
    stackName: 'Backend',
    stacks: [
      {
        id: 1,
        name: 'Java',
        icon: JavaIcon,
      },
      {
        id: 2,
        name: 'Scala',
        icon: ScalaIcon,
      },
      {
        id: 3,
        name: 'Kotlin',
        icon: KotlinIcon,
      },
      {
        id: 4,
        name: 'Node.js',
        icon: NodejsIcon,
      },
    ],
  },
  {
    id: 3,
    stackName: 'Mobile',
    stacks: [
      {
        id: 1,
        name: 'SwiftUI (IOS)',
        icon: SwiftIcon,
      },
    ],
  },
  {
    id: 4,
    stackName: 'AR & Visualization',
    stacks: [
      {
        id: 1,
        name: 'Jolibrain',
        icon: JolibrainIcon,
      },
    ],
  },
  {
    id: 5,
    stackName: 'QA & Automation',
    stacks: [
      {
        id: 1,
        name: 'Automated testing frameworks',
        icon: TestingIcon,
      },
    ],
  },
  {
    id: 6,
    stackName: 'DevOps & Tools',

    stacks: [
      {
        id: 1,
        name: 'Gradle',
        icon: GradleIcon,
      },
      {
        id: 2,
        name: 'Webpack',
        icon: WebpackIcon,
      },
      {
        id: 3,
        name: 'Android Studio',
        icon: AndroidStudioIcon,
      },
      {
        id: 4,
        name: 'Angular',
        icon: AngularIcon,
      },
      {
        id: 5,
        name: '.NET',
        icon: DotnetIcon,
      },
      {
        id: 6,
        name: 'Google Analytics',
        icon: GoogleAnalyticsIcon,
      },
    ],
  },
];

export { techStack };
