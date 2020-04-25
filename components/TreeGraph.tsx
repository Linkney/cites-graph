import React, { useState, useEffect } from 'react'
import Tree, { ReactD3TreeItem } from 'react-d3-tree'

interface TreeGraphProps {
  data: ReactD3TreeItem[]
}
export default function TreeGraph({ data }: TreeGraphProps) {
  const [box, setBox] = useState<HTMLDivElement>()
  const [translate, setTranslate] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (box) {
      const dimensions = box.getBoundingClientRect()
      setTranslate({
        x: dimensions.width / 2,
        y: dimensions.height / 2,
      })
    }
  }, [box])

  return (
    <div ref={setBox} className='graph'>
      <Tree data={data} translate={translate} />
      <style jsx>
        {`
          .graph {
            width: 100%;
            height: 100%;
            border: 1px solid #999;
          }
        `}
      </style>
    </div>
  )
}
