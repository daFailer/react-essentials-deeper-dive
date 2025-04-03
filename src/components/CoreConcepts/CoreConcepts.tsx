import CoreConceptItem from '../CoreConceptItem/CoreConceptItem';
import Section from '../Section';

import componentsImg from '../../assets/components.png';
import jsxImg from '../../assets/jsx-ui.png';
import configImg from '../../assets/config.png';
import stateImg from '../../assets/state-mgmt.png';

import './CoreConcepts.scss';

const coreConcepts = [
  {
    title: 'Components',
    imagePath: componentsImg,
    description: 'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    title: 'JSX',
    imagePath: jsxImg,
    description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    title: 'Props',
    imagePath: configImg,
    description: 'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    title: 'State',
    imagePath: stateImg,
    description: 'React-managed data which, when changed, cause the component to re-render & the UI to update.',
  },
];

export default function CoreConcepts(): JSX.Element {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {coreConcepts.map((item, index) => 
          <CoreConceptItem
            key={`${item.title}-${index}`}
            {...item}
          />
        )}
      </ul>
    </Section>
  );
}
