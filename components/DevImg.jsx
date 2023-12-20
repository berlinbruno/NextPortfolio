import Image from 'next/image'

const DevImg = ({containerStyles,imgSrc,imgStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image className={`${imgStyles}`} src={imgSrc} width={450} height={450} priority alt=''/>
    </div>
  )
}

export default DevImg