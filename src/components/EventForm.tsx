// components/EventForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Event } from '../types';

interface EventFormProps {
  event?: Event;
  onSubmit: (data: Omit<Event, 'id'>) => void;
}

const EventForm: React.FC<EventFormProps> = ({ event, onSubmit }) => {
  const { register, handleSubmit } = useForm<Omit<Event, 'id'>>({
    defaultValues: event,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input {...register('name')} placeholder="Event Name" required />
      <Textarea {...register('venue')} placeholder="Event Venue" required />
      <Input {...register('date')} type="date" required />
      <Input {...register('organizer')} placeholder="Event Organizer" required />
      <Input {...register('contact')} placeholder="Event Contact" required />
      <Input {...register('website')} placeholder="Event Website" />
      <Button type="submit">{event ? 'Update Event' : 'Create Event'}</Button>
    </form>
  );
};

export default EventForm;
