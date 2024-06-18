import './App.css';
import View from './components/View';

const expandedFolders = ['/Folder 1', '/Folder 2'];

function App() {
  return (
    <div className="App">
      <View expandedFolders={expandedFolders}/>
    </div>
  );
}

export default App;
