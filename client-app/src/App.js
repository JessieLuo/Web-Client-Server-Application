import './App.css';
import Describe from './Describe';
import NewTask from './NewTask';
import SetTask from './SetTask';
import Suggest from './Suggest';
function App() {
    return (
        <div>
            <NewTask />
            <Describe />
            <SetTask />
            <Suggest />
        </div>
    );
}

export default App;
