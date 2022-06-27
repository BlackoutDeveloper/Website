import React from 'react'
import styled from 'styled-components'
const bgl = styled.div`
        background: #000;
        layout: fill;
`
const bg = () => {
  return (
        <bgl>
                <div>
                        <Image src="/indexbg.svg" layout="fill"></Image>
                </div>
        </bgl>
  )
}

export default bg