import useRouteElements from './useRouteElements';
import './index.css';

function App() {
  const routElements = useRouteElements();
  return <>{routElements}</>;
}

export default App;
