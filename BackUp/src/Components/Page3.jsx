import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './page3.css'
function Page() {
  const events = [
  {
    title: "2nd Saturday Jazz at the Fountain",
    startDate: "Sat Jul 12 2025",
    endDate: "Sat Dec 13 2025",
    address: "1015 Museum Cir, Jacksonville",
    image: "https://picsum.photos/300/200?random=1"
  },
  {
    title: "Ortega Village Market",
    startDate: "Sun Jul 13 2025",
    endDate: "Sun Dec 28 2025",
    address: "4216 Baltic St, Jacksonville",
    image: "https://picsum.photos/300/200?random=2"
  },
  {
    title: "Family Night at The Underground",
    startDate: "Fri Aug 22 2025",
    endDate: "Fri Aug 22 2025",
    address: "1352 Main St N, Jacksonville",
    image: "https://picsum.photos/300/200?random=3"
  },
  {
    title: "Shri Siddhi Vinayaka Garbhagriha Devalaya",
    startDate: "Fri Aug 22 2025",
    endDate: "Sun Aug 24 2025",
    address: "4968 Greenland Rd, Jacksonville",
    image: "https://picsum.photos/300/200?random=4"
  },
  {
    title: "TAJA Charming Night",
    startDate: "Sat Aug 23 2025",
    endDate: "Sat Aug 23 2025",
    address: "7235 Bentley Rd, Jacksonville",
    image: "https://picsum.photos/300/200?random=5"
  },
  {
    title: "5K Run",
    startDate: "Sat Aug 23 2025",
    endDate: "Sat Aug 23 2025",
    address: "3931 Baymeadows Rd, Jacksonville",
    image: "https://picsum.photos/300/200?random=6"
  }
];

  return (
    <div>
      <div className="container mt-4">
        <div className="row g-2">
          {
            events.map((event,index)=>(
              <div key={index} className="col-xxl-4 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card">
                  <img src={event.image} className='card-img-top' alt={event.title}></img>
                  <div className='card-body'>
                    <h5 className="card-title">{event.title}</h5>
                    <p>{event.startDate} - {event.endDate}</p>
                    <p className='card-text'>Address : {event.address}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Page