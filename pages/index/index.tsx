import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import styles from './index.module.scss'

const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      lll: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
]

const TreeGraph = dynamic(() => import('../../components/TreeGraph'), { ssr: false })

export default function Home() {
  return (
    <div>
      <Head>
        <title>节点树状图</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main className={styles.home}>
        <div className={styles.graph}>
          <TreeGraph data={myTreeData} />
        </div>
      </main>
    </div>
  )
}
