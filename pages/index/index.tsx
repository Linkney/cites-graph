import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Input, Button, CSSBaseline, ZEITUIProvider } from '@zeit-ui/react'
import { SearchOutlined } from '@ant-design/icons'

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
    <ZEITUIProvider>
      <CSSBaseline />
      <div className={styles.home}>
        <Head>
          <title>引用树状图</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <header className={styles.header}>
          <div className={styles.inner}>
            <span>引用树状图</span>
            <span>Big Huang</span>
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.form}>
            <div className={styles.title}>
              <span>论文题目:</span>
              <Input placeholder='输入论文题目搜索' width='100%' />
              <Button type='success' size='small' auto>
                搜索
                <SearchOutlined style={{ marginLeft: 4 }} />
              </Button>
            </div>
          </div>
          <div className={styles['graph-box']}>
            <div className={styles.graph}>
              <TreeGraph data={myTreeData} />
            </div>
          </div>
        </main>
      </div>
    </ZEITUIProvider>
  )
}
