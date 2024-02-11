import './userdetails.css';
import { useLocation } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import BusinessIcon from '@mui/icons-material/Business';
import LinkIcon from '@mui/icons-material/Link';
import XIcon from '@mui/icons-material/X';
import GroupIcon from '@mui/icons-material/Group';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Userdetails = () => {

    const location = useLocation();
    const data = location.state;

    return (
        <>
            <div className="main_section">
                <div className="container">
                    <div className="pad_section"><b>UserDetails</b></div>
                    <div id="card">
                        <img id="avatar" src={data.avatar_url} alt="avatar" />
                        <div id="info">
                            <p id="name">{data.name}</p>
                            <p id="activity">{data.login}</p>
                            <div id="stats">
                                <p className="stats-text">
                                    <span><BusinessIcon/></span>
                                    {data.company}
                                </p>
                                <p className="stats-text">
                                    <span><PlaceIcon/></span>
                                    {data.location}
                                </p>

                                <p className="stats-text">
                                    <span><LinkIcon/></span>
                                    {data.blog}
                                </p>
                            </div>
                            <div id="stats">
                                <p className="stats-text">
                                    
                                    <span><XIcon/></span>
                                    {data.twitter_username}
                                </p>
                                <p className="stats-text">
                                    <span><GroupIcon/> {data.following}</span>
                                    following
                                </p>
                                <p className="stats-text">
                                    <span><FiberManualRecordIcon/> {data.followers}</span>
                                    followers
                                </p>
                            </div>
                            <a id="btn" href={`https://github.com/${data.login}`}>Follow</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userdetails;


