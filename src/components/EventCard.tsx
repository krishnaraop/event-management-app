// components/EventCard.tsx
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onEdit, onDelete }) => {
  console.log('event', event)
  return (
    <Card>
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Venue :{event.venue}</p>
        <p>Date: {event?.date}</p>
        <p>Contact: {event.contact}</p>
        <p>Website: {event.website}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onEdit(event.id)} className="mr-2">Edit</Button>
        <Button onClick={() => onDelete(event.id)} variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;