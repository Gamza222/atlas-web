import React from 'react'
import * as classes from './Story.module.scss'
import Trees from '../../../../images/trees.svg'

export default function Story() {
  return (
    <section id="story" className={classes.story}>
        <div className={classes.story__container}>
            <div className={classes.story__container__item}>
                <h2>OUR STORY</h2>
                <p>
                  We started ATLAS, as we believe the current carbon emissions market is incapable of affecting change. 
                  <br />
                  <br />
                  We wanted to create a platform which instead of carbon offsetting, empower companies and consumers in their decision making to change industry. 
                  <br />
                  <br />
                  If you are a company interested in making your company and the products make more sustainable, check our our product page.
                </p>
            </div>
            <div className={classes.story__container__itemPercent}>
              <h3>85%</h3>
              <p>of carbon credits are unlikely to deliver “real, measurable and additional” emission reductions</p>
              <span>Source : EU Commission</span>
            </div>
            <div className={classes.story__container__itemPercent}>
              <h3>71%</h3>
              <p>increase globally in Google searches relating to sustainable goods since 2016.</p>
              <span>Source : WWF</span>
            </div>
        </div>
    </section>
  )
}
