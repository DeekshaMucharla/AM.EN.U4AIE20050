import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TrainDetail() {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrainDetail = async () => {
      try {
        const response = await axios.get(`http://20.244.56.144/train/trains/${trainNumber}`);
        setTrain(response.data);
      } catch (error) {
        console.error('Error fetching train detail:', error);
      }
    };

    fetchTrainDetail();
  }, [trainNumber]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{train.trainName}</h2>
      <p>Train Number: {train.trainNumber}</p>
      <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
      {/* Other train details */}
    </div>
  );
}

export default TrainDetail;
