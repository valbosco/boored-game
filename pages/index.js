// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import ActivityFilter from '../components/ActivityFilter';
import ActivityDisplay from '../components/ActivityDisplay';
import ActivitySearch from '../components/ActivitySearch';

export default function Home() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchActivities = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch activities');
      const data = await response.json();
      setActivities(Array.isArray(data) ? data : [data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <Head>
        <title>Boored App</title>
        <meta name="description" content="Find activities to cure your boredom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-800">🌑 BOORED</h1>
      </header>
      
      <main className="w-full max-w-4xl mt-8 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <ActivityFilter onFetch={fetchActivities} />
          <ActivitySearch onFetch={fetchActivities} />
        </div>
        
        <div className="w-full md:w-1/2 md:pl-8">
          <ActivityDisplay activities={activities} loading={loading} error={error} />
        </div>
      </main>
    </div>
  );
}
