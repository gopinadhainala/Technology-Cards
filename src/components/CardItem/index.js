// Write your code here.
import './index.css'

const CardItem = props => {
  const {listItem} = props
  const {title, description, imgUrl, className} = listItem
  const listClassNames = `${className} containerStyling`
  return (
    <li className={listClassNames}>
      <h1 className="headingText">{title}</h1>
      <p className="text">{description}</p>
      <img src={imgUrl} alt={title} className="imageStyling" />
    </li>
  )
}

export default CardItem
