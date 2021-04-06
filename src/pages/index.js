import React, { useState } from "react"
import '@fontsource/montserrat'

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const CategorySelector = ({ category }) => (
    <span
      onClick={() => setActiveCategory(category)}
      className={(category === activeCategory ? 'font-bold' : '') + ' cursor-pointer'}>
      {category}
    </span>
  )

  const ContactMe = () => (
    <button className="bg-brown-dark hover:opacity-75 text-white rounded-3xl py-2 px-4">
      Contact me
    </button>
  )

  return (
    <div className="font-base">
      <SEO title="Home" />
      <div className="bg-brown h-192 w-screen flex flex-col items-center justify-between p-14">
        <div className="">LOGO</div>
        <div className="max-w-3xl text-center space-y-6">
          <div>
            Paragraph of kuppy bio
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vestibulum laoreet diam vitae aliquet. Mauris nibh mi, cursus ac dolor ut,
            euismod dignissim erat. Nullam tincidunt erat eu sapien venenatis placerat.
            Vivamus sed arcu quis risus congue viverra sit amet nec quam.
            Sed aliquam pellentesque scelerisque
          </div>
          <ContactMe />
        </div>
      </div>

      <div className="w-screen flex flex-col items-center justify-between p-14">
        <div className="space-y-2 md:space-y-0 md:space-x-4 flex flex-col md:flex-row text-center">
          <CategorySelector category='all' />
          <CategorySelector category='paper' />
          <CategorySelector category='digital' />
          <CategorySelector category='other' />
        </div>

      </div>
    </div>
  )
}

export default IndexPage
