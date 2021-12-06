  
import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'


export default class Calendar extends React.Component {
  render() {
    return (
      <FullCalendar
                        plugins={[ dayGridPlugin, interactionPlugin ]}
                        initialView="dayGridMonth"
                        weekends={false}
                        events={[
                            { title: 'Luis Rosales: Casamiento de cabina LH', start: '2021-08-23', end: '2021-08-28' },
                            { title: 'Lazaro Guzman: Casamiento de cabina RH', start: '2021-08-23', end: '2021-08-28' },
                            { title: 'Edwin Blanco: Apriete de tornillos de cabina e instalacion de bomba auxiliar', start: '2021-08-09', end: '2021-08-14' },
                            { title: 'Alejandro Medina: Programacion de radar en parte frontal', start: '2021-08-09', end: '2021-08-14' }
                        ]}
                        //dateClick={this.handleDateClick}
                        
                    />
    )
  }
}

