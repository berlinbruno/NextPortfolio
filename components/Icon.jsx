import DynamicReactIcons from './DynamicReactIcons';


const Icon = ({iconName}) => {
  return (
    <div>
        {DynamicReactIcons(iconName)}
    </div>
  )
}

export default Icon