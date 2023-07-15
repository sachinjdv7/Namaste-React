import RestrauntCard from './RestrauntCard'
import restrautList from '../utils/mockData'
import { useState } from 'react'

const Body = () => {
  const [data, setData] = useState(restrautList)

  const handleClick = () => {
    const TopRatedResto = restrautList.filter((res) =>
      res.data.avgRating > 3 ? res : ''
    )
    console.log(TopRatedResto)
    setData(TopRatedResto)
  }
  return (
    <>
      <div className='filter'>
        <button className='filter-btn' onClick={handleClick}>
          Top Rated Restraurants
        </button>
      </div>
      <div className='restaurant-list'>
        {data.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
        })}
      </div>
    </>
  )
}

export default Body
