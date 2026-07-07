import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

const calendarr = new
Calendar(document.querySelector('#calendar'), {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
})

calendarr.render();
