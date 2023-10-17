import $style from '/src/styles/components/transit/UserTransitInput.module.scss'

const UserTransitInput = ({children}) => {
  return (
    <div className={$style.userTransit}>
      {children}
    </div>
  )
}

export default UserTransitInput;