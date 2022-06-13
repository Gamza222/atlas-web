import React, {useEffect} from 'react'
import HeaderDashboard from '../headerDashboard/HeaderDashboard'
import './LayoutDashboard.scss'



export default function LayoutDashboard({children, name}) {
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

  slider[3].addEventListener("wheel", (evt) => {
    evt.preventDefault();
    slider[3].scrollLeft += evt.deltaY;
});

  });

 

  
  return (
    <div className='layout'>
      <HeaderDashboard name={name}/>
        {children}
    </div>
  )
}
