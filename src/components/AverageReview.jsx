import React from 'react';
import useAverage from '../Hook/useAverage';
import { StarsReview } from './StarsReview';

export const AverageReview = ({ id }) => {
  const { data, loading, error } = useAverage(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <StarsReview review={data.average}/>
    </div>
  );
};


