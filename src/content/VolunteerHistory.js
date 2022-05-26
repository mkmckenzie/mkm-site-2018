import React from 'react'

const VolunteerHistoryContent = [
  {
    title: 'Organizer',
    company: (
      <span>
        <a href="https://rubybythebay.org/">Ruby by the Bay</a> / Ruby for Good
      </span>
    ),
    dates: 'January 2020 - April 2020',
    description: (
      <ul>
        <li>Assist with project selection</li>
        <li>
          Coordinate efforts to pivot event from on-site to remote due to
          COVID-19
        </li>
        <li>
          Act as team shepherd for the{' '}
          <a href="https://github.com/rubyforgood/freeforest">
            Free Forest School project
          </a>
        </li>
        <li>Meet weekly in the months leading up to event</li>
      </ul>
    ),
    order: 1,
  },
  {
    title: 'DC Community Developer',
    company: 'CodeNewbie DC',
    dates: 'March 2016 - July 2018',
    description: (
      <ul>
        <li>
          Plan and schedule meet ups including a 5-month speaker series, monthly
          community coding sessions, and various social events for up to 50
          attendees
        </li>
        <li>
          Hold monthly meetings with Saron Yitbarek, the founder of CodeNewbie
        </li>
        <li>
          Volunteered at <a href="http://codelandconf.com/">Codeland</a> 2017
          and 2018, the 2-day annual CodeNewbie conference, in NYC
        </li>
      </ul>
    ),
    order: 3,
  },
  {
    title: 'Rails Community Lead',
    company: 'Women Who Code DC',
    dates: 'December 2015 - July 2018',
    description: (
      <ul>
        <li>
          Create tutorials, give tech talks, and organize weekly meetups for
          attendees
        </li>
      </ul>
    ),
    order: 2,
  },
  {
    title: 'Member',
    company: 'Global Shapers, D.C. Hub I',
    dates: 'December 2016 - July 2018',
    description: (
      <ul>
        <li>
          Work with the DC Global Shapers (an initiative of the World Economic
          Forum) on community outreach projects.
        </li>
      </ul>
    ),
    order: 4,
  },
]

export default VolunteerHistoryContent
