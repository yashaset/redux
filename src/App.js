import './App.css';
import { useSelector } from 'react-redux';

const App = () => {
  const account = useSelector((state) => {
    return state.account;
  });
  console.log(account);

  return <div className='App'></div>;
};

export default App;
