import React from 'react'
import * as classes from './Team.module.scss'

const members = [
  {
    name: 'team member',
    photo: ''
  },
  {
    name: 'team member',
    photo: ''
  },
  {
    name: 'team member',
    photo: ''
  },
]

export default function Team() {
  return (
    <section id="team" className={classes.team}>
        <div className={classes.team__container}>
          <h2>OUR TEAM</h2>
          <div>
            {
              members.map(member => {
                return (
                  <div className={classes.team__container__member}>
                    <div className={classes.team__container__member__image}>
                      <img src={member.photo} alt={`team member ${member.name}`} />
                    </div>
                    <p>{member.name}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
    </section>
  )
}
