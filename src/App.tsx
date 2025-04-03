import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import Examples from './components/Examples/Examples';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <main>
        <CoreConcept />
        <Examples />
      </main>
    </div>
  );
}

export default App;
