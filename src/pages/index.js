import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import '@fontsource/montserrat'

import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const CategorySelector = ({ category }) => (
    <span
      onClick={() => setActiveCategory(category)}
      className={(category === activeCategory ? 'font-bold' : '') + ' cursor-pointer'}>
      {category}
    </span>
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
          <button className="bg-brown-dark hover:opacity-75 text-white rounded-3xl py-2 px-4">
            Contact me
        </button>
        </div>
      </div>

      <div className="w-screen flex flex-col items-center justify-between p-14">
        <div className="space-x-4">
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
