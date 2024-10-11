// components/ActivityFilter.js
import { useState } from 'react';

const ActivityFilter = ({ onFetch }) => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [participants, setParticipants] = useState('');

  const filters = ['education', 'recreational', 'social', 'charity', 'cooking', 'relaxation', 'busywork'];

  const handleFilterClick = (filter) => {
    setActiveFilter(prevFilter => prevFilter === filter ? null : filter);
  };

  const handleFetchRandom = () => {
    onFetch('/api/random');
  };

  const handleFetchFiltered = () => {
    let url = '/api/filter?';
    if (activeFilter) url += `type=${activeFilter}&`;
    if (participants) url += `participants=${participants}`;
    onFetch(url);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {filters.map(filter => (
          <button 
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`px-4 py-2 rounded-full ${activeFilter === filter ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
      <input
        type="number"
        value={participants}
        onChange={(e) => setParticipants(e.target.value)}
        placeholder="Number of participants"
        className="w-full p-2 border rounded mb-4"
      />
      <button 
        onClick={handleFetchRandom}
        className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300 mr-2"
      >
        Random Activity
      </button>
      <button 
        onClick={handleFetchFiltered}
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
      >
        Filter Activities
      </button>
    </div>
  );
};

export default ActivityFilter;
