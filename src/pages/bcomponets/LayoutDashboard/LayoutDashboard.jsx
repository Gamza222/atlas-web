import React, {useEffect, useState} from 'react'
import HeaderDashboard from '../headerDashboard/HeaderDashboard'
import './LayoutDashboard.scss'
import Calendar from '../../../dashboardImages/Calendar.svg';

export const totalSubsidy = 112;
const calValues = [2021, 2022];

export default function LayoutDashboard({children, name, pic, add}) {
  const [calOpen, setCalOpen] = useState(false);
  const [calValue, setCalValue] = useState(calValues[0])

  useEffect(() => {
    const slider = document.querySelectorAll('.box-content');
    console.log(slider)
    let mouseDown = false;
    let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.forEach(slider => {
  slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
    });  
})
  // Add the event listeners
  slider.forEach(slider => {
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleft', stopDragging, false);
    slider.addEventListener('mouseright', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
  })

  if(slider[3]) {
    slider[3].addEventListener("wheel", (evt) => {
      evt.preventDefault();
      slider[3].scrollLeft += evt.deltaY;
  })
  }


  });

 

  
  return (
    <div className='layout'>
      <HeaderDashboard name={name}/>
      {add ? add : ''}
      <div className='header-subtitle'>
        <div>
          <h2>{name}</h2>
          {
            pic ? <img src={pic} alt="" /> : ''
          }
        </div>
        <button className='buttonDb' onClick={() => setCalOpen(!calOpen)}>
          <div>
            <img src={Calendar} alt="" />
            <p>{`Jan 01, ${calValue} — Dec 31, ${calValue}`}</p>
          </div>
          {
            calOpen ? 
            <div>
              {
                calValues.map(value => {
                  return <button className='buttonDb' onClick={() => setCalValue(value)}>{`Jan 01, ${value} — Dec 31, ${value}`}</button>
                })
              }
            </div>
            : ''
          }
        </button>
      </div>
        {children}
    </div>
  )
}
