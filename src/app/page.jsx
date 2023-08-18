import Image from 'next/image'
import styles from './page.module.css'
import Parts from '@/components/grids/Parts'

export default function Home() {
  const width1="100%"
  const height1="75vh"
  return (
    <main className={styles.main}>
    <Parts width={width1} height={height1}/>
    </main>
  )
}
