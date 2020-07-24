import React from 'react';
import { usePosition } from 'use-position';

export const getLocation = () => {
  const watch = true;
  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch);

  return ({
    latitude,
    longitude,
    timestamp,
    accuracy,
    error
  });
};