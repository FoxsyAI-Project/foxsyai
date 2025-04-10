import React from 'react'
import GetFoxsyHeader from './GetFoxsyHeader'
import { Box } from '@mui/material'
import GetStartedSection from './GetStarted'
import CexMethod from './CexMethod'
import OrDivider from './OrDivider'
import NonCustodialMethod from './NonCustodialMethod'

function GetFoxsy() {
  return (
   <Box>
    <Box sx={{bgcolor:"black"}}>
    <GetFoxsyHeader />
    </Box>
    <GetStartedSection />
     <CexMethod />
     <OrDivider />
     <NonCustodialMethod />
   </Box>
  )
}

export default GetFoxsy
