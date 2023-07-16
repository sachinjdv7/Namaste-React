import { CDN_URL } from '../utils/constants'
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating
}) => {
  return (
    <div className='card'>
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      <h4> Rating :{avgRating}⭐</h4>
    </div>
  )
}

export default RestrauntCard
