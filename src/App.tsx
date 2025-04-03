import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import Examples from './components/Examples/Examples';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <CoreConcept />
        <Examples />
      </main>
    </>
  );
}

export default App;
