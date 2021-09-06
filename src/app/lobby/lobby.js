import '../templates/frame.css';
import SideBar from './components/SideBar';
import ListBar from './components/ListBar';
import Contents from './components/Contents';
import { IconContext } from 'react-icons';

function lobby({match}) {
    return (
        <div className="container">
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="box">
                    <SideBar/>
                    <ListBar/>
                    <Contents gameType={match.params.gametype}>
                    </Contents>
                </div>
            </IconContext.Provider>
        </div>
    );
}

// https://codingbroker.tistory.com/6

export default lobby;