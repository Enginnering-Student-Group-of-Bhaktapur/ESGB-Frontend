import React, {useState, useEffect} from 'react'
import axios from 'axios'

import LimelightMediaFormat from './LimelightMediaFormat';

function LimelightList() {
    const [limelightList, setLimelightList] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchLimelightData = async () => {
          try {
            const res = await axios.get("http://127.0.0.1:8000/api/limelight/");
            setLimelightList(res.data.results);
          } catch (err) {
            console.log("Error Fetching Data");
          }
        };
    
        fetchLimelightData();
      }, []);

    const displayLimelightMedia = () => {
        let result = [];

        limelightList.map((limelight) => {
            return result.push(<LimelightMediaFormat limelight = {limelight} />)
        })

        return result;
    }

    return (
        <React.Fragment>
            {displayLimelightMedia()}
        </React.Fragment>
    )
}

export default LimelightList
