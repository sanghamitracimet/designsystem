import React, { useState } from 'react';
import moment from 'moment';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const localizer = momentLocalizer(moment);

type Event = {
  id: number;
  title: string;
  start: Date;
  end: Date;
};

const CalendarComponent: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [nextEventId, setNextEventId] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const handleAddOrUpdateEvent = () => {
    if (!newEvent.title || !newEvent.start || !newEvent.end) {
      alert('Please fill in all fields including date and time');
      return;
    }

    const startDate = new Date(newEvent.start);
    const endDate = new Date(newEvent.end);

    if (startDate >= endDate) {
      alert('End time must be later than start time');
      return;
    }

    const eventObj = {
      title: newEvent.title,
      start: startDate,
      end: endDate,
      id: editingEvent ? editingEvent.id : nextEventId,
    };

    if (editingEvent) {
      if (
        eventObj.title === editingEvent.title &&
        eventObj.start.getTime() === editingEvent.start.getTime() &&
        eventObj.end.getTime() === editingEvent.end.getTime()
      ) {
        setShowModal(false);
        return;
      }

      setEvents(events.map((event) => (event.id === editingEvent.id ? eventObj : event)));
      setEditingEvent(null);
    } else {
      setEvents([...events, eventObj]);
      setNextEventId(nextEventId + 1);
    }

    setShowModal(false);
    setNewEvent({
      title: '',
      start: '',
      end: '',
    });
  };

  const handleDateClick = ({ start }: { start: Date }) => {
    if (!showModal) {
      setNewEvent({
        title: '',
        start: '',
        end: '',
      });
      setShowModal(true);
      setEditingEvent(null);
    }
  };

  const handleEventClick = (event: Event) => {
    setEditingEvent(event);
    setNewEvent({
      title: event.title,
      start: event.start.toISOString(),
      end: event.end.toISOString(),
    });
    setShowModal(true);
  };

  const handleDeleteEvent = (eventId: number) => {
    setEvents(events.filter((event) => event.id !== eventId));
    setShowModal(false);
  };

  const isSaveButtonDisabled = !newEvent.title || !newEvent.start || !newEvent.end;


  return (
    <div className="w-full p-4 shadow-md border-2 border-lightGray">
      <div className="h-[65vh] w-full">
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleDateClick}
          selectable={true}
          onSelectEvent={handleEventClick}
          className="h-[60vh] w-full"
          components={{
            toolbar: ({ label, onNavigate, onView }) => (
              <div className="flex flex-row justify-between items-center p-2 bg-lightGray">
                <div className="flex flex-wrap gap-2 sm:block">
                  <button
                    className="text-sm bg-blue text-white p-1 rounded-md  hover:bg-blue hover:text-white"
                    onClick={() => onView('month')}
                  >
                    Month
                  </button>
                  <button
                    className="text-sm p-1 bg-blue text-white rounded-md  hover:bg-blue hover:text-white"
                    onClick={() => onView('agenda')}
                  >
                    Agenda
                  </button>
                </div>

                <div className="text-sm font-semibold text-black mb-2 md:mb-0">{label}</div>


                <div className="flex flex-wrap justify-end gap-1 mb-2 md:mb-0">
                  <button
                    className="text-sm p-1 bg-blue text-white rounded-md  hover:bg-blue hover:text-white"
                    onClick={() => onNavigate('TODAY')}
                  >
                    Today
                  </button>
                  <div className='flex gap-1'>
                    <div className='p-1 bg-blue text-white rounded text-center hover:bg-blue'>
                      <GrPrevious className="w-4 h-4 text-white font-bold" onClick={() => onNavigate('PREV')} />
                    </div>
                    <div className='p-1 bg-blue text-white rounded text-center hover:bg-blue'>
                      <GrNext className="w-4 h-4 text-white font-bold" onClick={() => onNavigate('NEXT')} />
                    </div>
                  </div>
                </div>
              </div>
            ),
          }}
          formats={{
            dayHeaderFormat: 'ddd DD',
          }}
        />


      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              {editingEvent ? 'Edit Event' : 'Add Event'}
            </h2>
            <div className="mb-4">
              <input
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleInputChange}
                placeholder="Event Title"
                className="border rounded outline-none p-2 w-full mb-2"
              />
              <input
                type="datetime-local"
                required
                name="start"
                value={editingEvent ? moment(editingEvent.start).format('YYYY-MM-DDTHH:mm') : newEvent.start}
                onChange={handleInputChange}
                className="border rounded outline-none p-2 w-full mb-2"
              />
              <input
                type="datetime-local"
                required
                name="end"
                value={editingEvent ? moment(editingEvent.end).format('YYYY-MM-DDTHH:mm') : newEvent.end}
                onChange={handleInputChange}
                className="border rounded outline-none p-2 w-full"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleAddOrUpdateEvent}
                className={`bg-blue text-white p-2 rounded w-1/2 mr-2 ${isSaveButtonDisabled ? 'bg-gray' : ''}`}
                disabled={isSaveButtonDisabled}
              >
                {editingEvent ? 'Update Event' : 'Add Event'}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray text-white p-2 rounded w-1/2"
              >
                Cancel
              </button>
            </div>
            {editingEvent && (
              <button
                onClick={() => handleDeleteEvent(editingEvent.id)}
                className="bg-red text-white p-2 rounded mt-4 w-full"
              >
                Delete Event
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;