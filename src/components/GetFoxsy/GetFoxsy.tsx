import React from 'react'
import GetFoxsyHeader from './GetFoxsyHeader'
import { Box } from '@mui/material'
import GetStartedSection from './GetStarted'

function GetFoxsy() {
  return (
   <Box>
    <Box sx={{bgcolor:"black"}}>
    <GetFoxsyHeader />
    </Box>
    <GetStartedSection />
     
   </Box>
  )
}

export default GetFoxsy
