import { Button, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { useTransaction } from 'wagmi'
import { BigNumber } from '@ethersproject/bignumber'

const Home: NextPage = () => {
  const [{ data, error, loading }, sendTransaction] = useTransaction({
    request: {
      to: '0x0FfCfcC9EB64597c1522b5e4507020Ccc29054e5',
      value: BigNumber.from('10000000000000000'), // 1 ETH
    },
  })

  // const handleClick = () => {
  //   sendTransaction({ to: "0x0FfCfcC9EB64597c1522b5e4507020Ccc29054e5", value: utils.parseEther("0.01") })
  // }
  return (
    <div className={styles.container}>
      <Head>
        <title>Lyra Vaults</title>
        <meta name="description" content="Decentralized structure product built on Lyra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Welcome to Lyra Vaults
        </h2>

        <p className={styles.description}>
          Get exposure to fully decentralized, non-custodial option strategies
        </p>

        <div className={styles.grid}>
          <Link href='./vaults'>
            <Button
              fontSize={20}
            >
              <p>Explore Products</p>
            </Button>
          </Link>

          <Link href='https://www.lyra.finance/' isExternal>
            <Button
              fontSize={20}
              backgroundColor="#05c99b"
            >
              <p>Learn About Lyra</p>
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
