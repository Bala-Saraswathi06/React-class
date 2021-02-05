import Jsx from './component/Jsx'
import PropsComponent from './component/PropsComponent'
import PropsClass from './component/PropsClass'
import State from './component/State'
import Setstate from './component/Setstate'
import EventHandling from './component/EventHandling'
import FormHandling from './component/FormHandling'
import './AppStyling.css'

function App() {
  return (
    <div className="App">
       {/* <Jsx /> */}
       {/* <PropsComponent name="bala" food="fish"></PropsComponent>
       <PropsComponent  name="Jeni" food="chicken"></PropsComponent>
       <PropsComponent name="Blessy" food="mutton"></PropsComponent>
       <PropsClass name="bala" />
       <PropsClass name="jeni" />
       <PropsClass name="blessy" /> */}
       {/* <State /> */}
       {/* <Setstate /> */}
       {/* <EventHandling /> */}
       <FormHandling />
    </div>
  );
}

export default App;
