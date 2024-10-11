// components/ActivityDisplay.js
const ActivityCard = ({ activity }) => (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <p className="text-xl mb-2">{activity.activity}</p>
      <p className="text-sm text-gray-600">Type: {activity.type}</p>
      <p className="text-sm text-gray-600">Participants: {activity.participants}</p>
      <p className="text-sm text-gray-600">Price: {activity.price === 0 ? 'Free' : `${'$'.repeat(Math.ceil(activity.price * 5))}`}</p>
      <p className="text-sm text-gray-600">Accessibility: {activity.accessibility}</p>
      {activity.link && (
        <a href={activity.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Learn More
        </a>
      )}
    </div>
  );
  
  const ActivityDisplay = ({ activities, loading, error }) => {
    if (loading) return <p>Loading activities...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (activities.length === 0) return <p>No activities found. Try adjusting your filters or generating a random activity!</p>;
  
    return (
      <>
        <h2 className="text-2xl font-bold mb-4">Activities:</h2>
        {activities.map(activity => (
          <ActivityCard key={activity.key} activity={activity} />
        ))}
      </>
    );
  };
  
  export default ActivityDisplay;
  