import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TrainList() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('http://20.244.56.144/train/trains');
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {trains.map(train => (
          <li key={train.trainNumber}>
            <a href={`/train/${train.trainNumber}`}>{train.trainName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainList;
