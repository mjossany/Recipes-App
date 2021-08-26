import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

const FoodDetails = ({ match: { params: id } }) => {
  const [meal, setMeal] = useState(0);
  useEffect(() => {
    const fecthDetails = () => {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id.id}`)
        .then((response) => response.json())
        .then((response) => setMeal(response.meals[0]));
    };
    fecthDetails();
  }, [id.id]);
  if (!meal) return <Spinner animation="border" />;
  // const { strMeal, strMealThumb, strCategory } = meal;
  return (
    <div />
  );
};

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FoodDetails;
