import React, { useEffect, useState } from 'react';
import './search.scss';

export const MySearchButton = () => {
  return <button className="search_btn">SEARCH</button>;
};

export const MySearchInput = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(localStorage.getItem('inputValue') as string);
  }, []);

  const workWithLS = (value: string) => {
    localStorage.setItem('inputValue', value);

    setInputValue(localStorage.getItem('inputValue') as string);
  };

  return (
    <input
      className="search_input"
      type="text"
      placeholder="?????"
      onInput={() => {
        workWithLS((event!.target as HTMLInputElement).value);
      }}
      value={inputValue}
    />
  );
};
