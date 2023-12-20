import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href='/'>
        <Image className=' dark:hidden' src='/logo-black.svg' width={54} height={54} priority alt='logo'/>
        <Image className=' hidden dark:block' src='/logo-white.svg' width={54} height={54} priority alt='logo'/>
    </Link>
  )
}

export default Logo