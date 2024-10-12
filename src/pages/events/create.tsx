// pages/events/create.tsx
import { useRouter } from 'next/router';
import EventForm from '../../components/EventForm';
import  supabase  from '../../lib/supabase';
import { Event } from '../../types';

export default function CreateEvent() {
  const router = useRouter();

  const handleSubmit = async (data: Omit<Event, 'id'>) => {
    const { error } = await supabase
      .from('events')
      .insert(data);

    if (error) {
      console.error('Error creating event:', error);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Event</h1>
      <EventForm onSubmit={handleSubmit} />
    </div>
  );
}