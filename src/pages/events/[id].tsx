// pages/events/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import EventForm from '../../components/EventForm';
import  supabase from '../../lib/supabase';
import { Event } from '../../types';

export default function EditEvent() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (id) {
      fetchEvent(Number(id));
    }
  }, [id]);

  async function fetchEvent(eventId: number) {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', eventId)
      .single();

    if (error) {
      console.error('Error fetching event:', error);
    } else {
      setEvent(data);
    }
  }

  const handleSubmit = async (data: Omit<Event, 'id'>) => {
    if (!id) return;

    const { error } = await supabase
      .from('events')
      .update(data)
      .eq('id', id);

    if (error) {
      console.error('Error updating event:', error);
    } else {
      router.push('/');
    }
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Event</h1>
      <EventForm event={event} onSubmit={handleSubmit} />
    </div>
  );
}