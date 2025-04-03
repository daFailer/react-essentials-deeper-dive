import { Fragment } from 'react';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import Examples from './components/Examples/Examples';

function App(): JSX.Element {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcept />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
