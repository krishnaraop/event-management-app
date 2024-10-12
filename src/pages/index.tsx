// pages/index.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EventList from '../components/EventList';
import { Button } from "@/components/ui/button";
import  supabase  from '../lib/supabase';
import {Event}  from '../types';

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const router = useRouter();

  async function fetchEvents() {  
    const { data, error } = await supabase
      .from('events')
      .select('*')
      // .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching events:', error);
    } else {
      setEvents(data || []);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, []);
  const handleEdit = (id: number) => {
    router.push(`/events/${id}`);
  };

  const handleDelete = async (id: number) => {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting event:', error);
    } else {
      fetchEvents();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <Button variant={"outline"} onClick={() => router.push('/events/create')} className="mb-4">Create New Event</Button>
      <EventList events={events} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}