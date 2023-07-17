import React from 'react'
import { BasePropertyProps } from 'admin-bro'
import { Box } from '@admin-bro/design-system'

const Edit: React.FC<BasePropertyProps> = ({record}) => {
  // const { record } = props

  const srcImg =record?.params['photo']
  return (
    <Box>
      {srcImg ? (
        <img src={"/"+srcImg} width="80px"/>
      ) : 'no image'}
    </Box>
  )
}

export default Edit