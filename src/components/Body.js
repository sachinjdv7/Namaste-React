import RestrauntCard from './RestrauntCard'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [filterList, setFilterList] = useState([])
  const [searchText, setSearchText] = useState('')

  console.log('Body rendered')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.552874647063167&lng=73.79631726085209&page_type=DESKTOP_WEB_LISTING'
    )
    const res = await data.json()

    setRestaurantList(res?.data?.cards[2]?.data?.data?.cards)
    setFilterList(res?.data?.cards[2]?.data?.data?.cards)
  }

  const handleClick = () => {
    const TopRatedResto = restaurantList.filter((res) =>
      res.data.avgRating > 4 ? res : ''
    )

    setFilterList(TopRatedResto)
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-input'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filterName = restaurantList.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setFilterList(filterName)
            }}
          >
            Search
          </button>
        </div>
        <button className='filter-btn' onClick={handleClick}>
          Top Rated Restraurants
        </button>
      </div>
      <div className='restaurant-list'>
        {filterList.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
        })}
      </div>
    </div>
  )
}

export default Body
