// components/ActivitySearch.js
import { useState } from 'react';
import { Search } from 'lucide-react';

const ActivitySearch = ({ onFetch }) => {
  const [activityKey, setActivityKey] = useState('');

  const handleSearch = () => {
    onFetch(`/api/activity/${activityKey}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center mb-4">
      <h3 className="text-lg font-bold mb-2">Find by Activity Key</h3>
      <div className="flex">
        <input
          type="text"
          value={activityKey}
          onChange={(e) => setActivityKey(e.target.value)}
          placeholder="Enter activity key"
          className="flex-grow p-2 border rounded-l"
        />
        <button 
          onClick={handleSearch}
          className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600 transition duration-300"
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default ActivitySearch;
