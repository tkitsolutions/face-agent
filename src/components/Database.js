import React from 'react'
import ring from '../assets/ring.svg'
import { useQuery } from 'react-query'
import FetchPersons from './FetchPersons'
const Database = () => {


  // const response=useQuery(
  //   'persons',
  //   FetchPersons
  // )

  // if(response.isLoading)return console.log('loading....');
  // else if(response.error)return console.log('Error');
  // else if(response.isFetched)return console.log(response.data);
  // console.log(response.data);
  return (
    <div className='database'>
     <div className='dbHeading'>
     <h1>FACE AGENT DATABASE</h1>
      <div className="divider"></div>
     </div>
      <div  className='dbResults'>
          <div className='list'>
          <div className='person'>
              <div className='dbpicture'>
              <img src={ring} alt='no Imag' />
              <div><img src={require('../assets/touseef.jpeg')} alt='no Imag' /></div>
            </div>
            <div className='dbbrief'>
              <p>Touseef</p>
              <p>Islamabad, Pakistan</p>
            </div>
        </div>
        <div className='person'>
              <div className='dbpicture'>
              <img src={ring} alt='no Imag' />
              <div><img src={require('../assets/touseef.jpeg')} alt='no Imag' /></div>
            </div>
            <div className='dbbrief'>
              <p>Touseef</p>
              <p>Islamabad, Pakistan</p>
            </div>
        </div>
        <div className='person'>
              <div className='dbpicture'>
              <img src={ring} alt='no Imag' />
              <div><img src={require('../assets/touseef.jpeg')} alt='no Imag' /></div>
            </div>
            <div className='dbbrief'>
              <p>Touseef</p>
              <p>Islamabad, Pakistan</p>
            </div>
        </div>
        <div className='person'>
              <div className='dbpicture'>
              <img src={ring} alt='no Imag' />
              <div><img src={require('../assets/touseef.jpeg')} alt='no Imag' /></div>
            </div>
            <div className='dbbrief'>
              <p>Touseef</p>
              <p>Islamabad, Pakistan</p>
            </div>
        </div>
        <div className='person'>
              <div className='dbpicture'>
              <img src={ring} alt='no Imag' />
              <div><img src={require('../assets/touseef.jpeg')} alt='no Imag' /></div>
            </div>
            <div className='dbbrief'>
              <p>Touseef</p>
              <p>Islamabad, Pakistan</p>
            </div>
        </div>
        <div className='person'>
              <div className='dbpicture'>
              <img src={ring} alt='no Imag' />
              <div><img src={require('../assets/touseef.jpeg')} alt='no Imag' /></div>
            </div>
            <div className='dbbrief'>
              <p>Touseef</p>
              <p>Islamabad, Pakistan</p>
            </div>
        </div>
        <div className='person'>
              <div className='dbpicture'>
              <img src={ring} alt='no Imag' />
              <div><img src={require('../assets/touseef.jpeg')} alt='no Imag' /></div>
            </div>
            <div className='dbbrief'>
              <p>Touseef</p>
              <p>Islamabad, Pakistan</p>
            </div>
        </div>
        <div className='person'>
              <div className='dbpicture'>
              <img src={ring} alt='no Imag' />
              <div><img src={require('../assets/touseef.jpeg')} alt='no Imag' /></div>
            </div>
            <div className='dbbrief'>
              <p>Touseef</p>
              <p>Islamabad, Pakistan</p>
            </div>
        </div>
        <div className='person'>
              <div className='dbpicture'>
              <img src={ring} alt='no Imag' />
              <div><img src={require('../assets/touseef.jpeg')} alt='no Imag' /></div>
            </div>
            <div className='dbbrief'>
              <p>Touseef</p>
              <p>Islamabad, Pakistan</p>
            </div>
        </div>
        <div className='person'>
              <div className='dbpicture'>
              <img src={ring} alt='no Imag' />
              <div><img src={require('../assets/touseef.jpeg')} alt='no Imag' /></div>
            </div>
            <div className='dbbrief'>
              <p>Touseef</p>
              <p>Islamabad, Pakistan</p>
            </div>
        </div>  
          </div>
          <div className='data'>
            
            <div className='photo'>
            <img src={require('../assets/touseef.jpeg')} alt='no Imag' />
            </div>
            <div className='details'>
                <p>NAME :   TOUSEEF</p>
                <p>LOCATION :   ISLAMABAD</p>
                <p>PHONE :   34787698797</p>
                <p>JOB :   RESEARCHER</p>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Database