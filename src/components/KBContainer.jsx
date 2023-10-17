import $style from '/src/styles/components/KBContainer.module.scss';

const KBContainer = ({ children }) => {
  return (
    <div className={$style.container}>
      {children}
    </div>
  )
}

export default KBContainer;