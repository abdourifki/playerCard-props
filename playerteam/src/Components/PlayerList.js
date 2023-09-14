import Players from './Players';
import Playercard from './Playercard';
import './PlayerList.css'

const PlayerList = () => {
    return (
        <div>
            <h1>The Golden Players</h1>
            <div className="d1">
                {Players.map((player,index) => (
                    <Playercard
                    {...player}
                    />
                    
                    
                    ))}
            </div>
        </div>
    );
};

export default PlayerList;