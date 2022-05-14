import React, { useState } from 'react'
import * as classes from './Careers.module.scss'
import careers from '../../../images/careers.png'

export default function Careers() {
  const [open, setOpen] = useState(0);
  const [cv, setCV] = useState('');
  const [letter, setLetter] = useState('');
  const [cv2, setCV2] = useState('');
  const [letter2, setLetter2] = useState('');

  return (
    <section id="careers" className={classes.careers}>
        <div className={classes.careers__container}>
            <img src={careers} alt="" />
            <div className={classes.careers__container__forms}>
                <h1>Current Roles</h1>
                <div className={classes.careers__form}>
                    <button onClick={() => setOpen(1)}><h3><span />Software Engineering Intern</h3></button>
                </div>
                {/* 1 FORM*/}
                <form className={`${classes.careers__form__content} ${open == 1 ? classes.isMenu : ''}`}>
                  <h2>Apply for a job</h2>
                  <div>
                    <label htmlFor="role">Role<span>*</span></label>
                    <input type="text" id="role" name="role" placeholder='Sofrware Engineer' required/>
                  </div>

                  <div>
                    <label htmlFor="name">First Name<span>*</span></label>
                    <input type="text" id="name" name="name" placeholder='Jonh' required/>
                  </div>

                  <div>
                    <label htmlFor="lastName">Last Name<span>*</span></label>
                    <input type="text" id="lastName" name="lastName" placeholder='Smith' required/>
                  </div>

                  <div>
                    <label htmlFor="email">Email<span>*</span></label>
                    <input type="text" id="email" name="email" placeholder='example@example.com' required/>
                  </div>

                  <div>
                    <label htmlFor="phone">Phone<span>*</span></label>
                    <input type="text" id="phone" name="phone" placeholder='012345678910' required/>
                  </div>

                  <div className={classes.cv}>
                    <p>Resume CV<span>*</span></p>
                    <label htmlFor="cv">Attach</label>
                    <input type="file" id="cv" name="cv" hidden onChange={(event) => setCV(event.target.value)} required/>
                    <span>{cv}</span>
                  </div>

                  <div className={classes.cv}>
                    <p>Cover Letter</p>
                    <label htmlFor="letter">Attach</label>
                    <input type="file" id="letter" name="letter" hidden onChange={(event) => setLetter(event.target.value)}/>
                    <span>{letter}</span>
                  </div>

                  <button>
                    <label htmlFor="submit1">Submit Application</label>
                    <input type="submit" id="submit1" name="submit1" hidden/>
                  </button>

                </form>

                 {/* 1 FORM*/}


                <div className={classes.careers__form}>
                    <button onClick={() => setOpen(2)}><h3><span />Carbon Data Intern</h3></button>
                </div>
                {/* 2 FORM*/}
                <form className={`${classes.careers__form__content} ${open == 2 ? classes.isMenu : ''}`}>
                  <h2>Apply for a job</h2>
                  <div>
                    <label htmlFor="role2">Role<span>*</span></label>
                    <input type="text" id="role2" name="role2" placeholder='Sofrware Engineer' required/>
                  </div>

                  <div>
                    <label htmlFor="name2">First Name<span>*</span></label>
                    <input type="text" id="name2" name="name2" placeholder='Jonh' required/>
                  </div>

                  <div>
                    <label htmlFor="lastName2">Last Name<span>*</span></label>
                    <input type="text" id="lastName2" name="lastName2" placeholder='Smith' required/>
                  </div>

                  <div>
                    <label htmlFor="email2">Email<span>*</span></label>
                    <input type="text" id="email2" name="email2" placeholder='example@example.com' required/>
                  </div>

                  <div>
                    <label htmlFor="phone2">Phone<span>*</span></label>
                    <input type="text" id="phone2" name="phone2" placeholder='012345678910' required/>
                  </div>

                  <div className={classes.cv}>
                    <p>Resume CV<span>*</span></p>
                    <label htmlFor="cv2">Attach</label>
                    <input type="file" id="cv2" name="cv2" hidden onChange={(event) => setCV2(event.target.value)} required/>
                    <span>{cv2}</span>
                  </div>

                  <div className={classes.cv}>
                    <p>Cover Letter</p>
                    <label htmlFor="letter2">Attach</label>
                    <input type="file" id="letter2" name="letter2" hidden onChange={(event) => setLetter2(event.target.value)}/>
                    <span>{letter2}</span>
                  </div>

                  <button>
                    <label htmlFor="submit2">Submit Application</label>
                    <input type="submit" id="submit2" name="submit2" hidden/>
                  </button>

                </form>

                 {/* 2 FORM*/}
            </div>
        </div>
    </section>
  )
}
