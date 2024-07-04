import Landing from '@/components/AboutPage/Landing'
import MyInformation from '@/components/AboutPage/MyInformation'
import NeedHelp from '@/components/global/NeedHelp'
import React from 'react'

const Index = () => {
  return (
    <div className='w-full min-h-screen'>
      <Landing />
      <MyInformation />
      <NeedHelp />
    </div>
  )
}

export default Index
