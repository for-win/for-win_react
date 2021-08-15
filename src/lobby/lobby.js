import './css/frame.css';
import SideBar from './components/SideBar';
import ListBar from './components/ListBar';
import Contents from './components/Contents';

function lobby() {
    return (
        <div className="container">
            <div className="box">
                <SideBar/>
                <ListBar/>
                <Contents/>
            </div>
        </div>
    );
}

// https://codingbroker.tistory.com/6

export default lobby;