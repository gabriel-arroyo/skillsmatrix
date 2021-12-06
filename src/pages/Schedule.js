//import React from 'react'
//import FullCalendar from '@fullcalendar/react' // must go before plugins
//import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
//import interactionPlugin from '@fullcalendar/interaction'
import CalendarCard from 'components/Calendar';

export default function Dashboard() {
    return (
        <>
            <div className="bg-black pt-14 pb-28 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                        
                    </div>
                </div>
            </div>

            {/* <div className="container">
                <div className="grid grid-cols-1 px-4 mb-16">
                    <FullCalendar
                        plugins={[ dayGridPlugin, interactionPlugin ]}
                        initialView="dayGridMonth"
                        weekends={false}
                        events={[
                            { title: 'Luis Rosales: Casamiento de cabina LH', start: '2021-08-23', end: '2021-08-28' },
                            { title: 'Lazaro Guzman: Casamiento de cabina RH', start: '2021-08-23', end: '2021-08-28' }
                        ]}
                        //dateClick={this.handleDateClick}
                        
                    />
                    <CalendarCard/>
                </div>
            </div> */}
            <div className="px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 md:grid-cols-5 xl:grid-cols-5">
                        <div className="md:col-start-1 md:col-end-4 xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <CalendarCard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
      
    )

//   handleDateClick = (arg) => { // bind with an arrow function
//     alert(arg.dateStr)
//   }
}