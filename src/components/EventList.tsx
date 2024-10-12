// components/EventList.tsx
import React from 'react';
import EventCard from './EventCard';
import { Event } from '../types';

interface EventListProps {
  events: Event[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const EventList: React.FC<EventListProps> = ({ events, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default EventList;