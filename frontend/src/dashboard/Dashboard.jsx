import React from 'react'
import Container from './Container';
import XyChart from './XyChart';
import  PieChart  from './PieChart';
import './Dashboard.css';

const Dashboard = () => {

  return (
    <div className='prose background-img'>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-5'>
        <Container>
          <div>Resolvers</div>
        <XyChart />
        </Container>
        <Container>
          <p>View here some API DATA from https://gopluslabs.io/</p>
          <PieChart />
        </Container>
        <Container>
          <p>View here some API DATA from https://gopluslabs.io/</p>
        </Container>
      </div>
    </div>
  )
}

export default Dashboard;
