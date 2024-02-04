import IntroCardManagement from '@/components/about-us-management/IntroCardManagement'
import MessageManagement from '@/components/about-us-management/MessageManagement'
import React from 'react'

export default function AboutUsManagementPage() {
  return (
    <section className="w-full flex flex-col px-5 lg:px-10 max-w-[1600px]  mx-auto mb-5 scroll-smooth relative ">
       <IntroCardManagement />
       <MessageManagement/>
        </section>
  )
}