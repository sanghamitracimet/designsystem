import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import { format } from 'date-fns';

type Event = {
  date: Date;
  title: string;
  description: string;
};

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [eventTitle, setEventTitle] = useState<string>('');
  const [eventDescription, setEventDescription] = useState<string>('');
  const [eventBeingEdited, setEventBeingEdited] = useState<Event | null>(null);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const event = getEventForDate(date);
    if (event) {
      setEventBeingEdited(event);
      setEventTitle(event.title);
      setEventDescription(event.description);
    } else {
      setEventBeingEdited(null);
      setEventTitle('');
      setEventDescription('');
    }
    setIsModalOpen(true);
  };

  const handleSaveEvent = () => {
    if (!eventTitle || !eventDescription) {
      alert('Please provide both event title and description');
      return;
    }

    const newEvent: Event = {
      date: selectedDate,
      title: eventTitle,
      description: eventDescription,
    };

    if (eventBeingEdited) {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          format(event.date, 'yyyy-MM-dd') === format(eventBeingEdited.date, 'yyyy-MM-dd')
            ? newEvent
            : event
        )
      );
    } else {
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }

    setIsModalOpen(false);
    setEventTitle('');
    setEventDescription('');
    setEventBeingEdited(null);
  };

  const handleDeleteEvent = () => {
    if (eventBeingEdited) {
      setEvents((prevEvents) =>
        prevEvents.filter(
          (event) => format(event.date, 'yyyy-MM-dd') !== format(eventBeingEdited.date, 'yyyy-MM-dd')
        )
      );
      setIsModalOpen(false);
      setEventTitle('');
      setEventDescription('');
      setEventBeingEdited(null);
    }
  };

  const getEventForDate = (date: Date) => {
    return events.find((event) => format(event.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));
  };

  const getEventsForDate = (date: Date) => {
    return events.filter((event) => format(event.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));
  };

  return (
    <div className="flex p-8 w-full shadow-md justify-center">
      <Calendar
        onClickDay={handleDateClick}
        value={selectedDate}
        tileClassName={({ date }) => {
          const isSelectedDate = format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
          const hasEvent = getEventsForDate(date).length > 0;

          if (isSelectedDate) {
            return 'flex-1 border-2 border-gray bg-blue text-white';
          }

          if (hasEvent) {
            return 'flex-1 border-2 border-gray bg-blue';
          }

          return 'flex-1 border-2 border-gray';
        }}
        tileContent={({ date }) => {
          const eventsForDate = getEventsForDate(date);
          if (eventsForDate.length > 0) {
            return (
              <div className="text-xs text-center text-black">
                {eventsForDate.map((event, index) => (
                  <div
                    key={index}
                    className="overflow-hidden text-ellipsis whitespace-nowrap"
                    style={{ lineHeight: '1.2' }}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            );
          }
          return null;
        }}
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add/Edit Event"
        className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <h2 className="text-xl font-bold mb-4 text-black">
          {eventBeingEdited ? `Edit Event for ${format(selectedDate, 'MMMM dd, yyyy')}` : `Add Event for ${format(selectedDate, 'MMMM dd, yyyy')}`}
        </h2>

        <div className="mb-4">
          <label className="block text-black mb-2">Event Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-lightGray rounded-md"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            placeholder="Enter event title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-black mb-2">Event Description</label>
          <textarea
            className="w-full px-4 py-2 border border-lightGray rounded-md"
            rows={4}
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            placeholder="Enter event description"
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-6 py-2 bg-lightGray text-white rounded-md hover:bg-lightGray"
          >
            Close
          </button>
          {eventBeingEdited ? (
            <button
              onClick={handleDeleteEvent}
              className="px-6 py-2 bg-red text-white rounded-md hover:bg-red">
              Delete Event
            </button>
          ) : null}
          <button
            onClick={handleSaveEvent}
            className="px-6 py-2 bg-blue text-white rounded-md hover:bg-blue"
          >
            Save Event
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CalendarComponent;
