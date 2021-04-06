import React, { useState } from "react"
import '@fontsource/montserrat'

// import Image from "../components/image"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby";

const Card = ({ src, title }) => (
  <div className="relative cursor-pointer transition transform">
    <img src={src} />
    <div className="overlay absolute bottom-0 w-full h-24 px-4 pt-6">
      {/* <div className="text-white text-lg">{title}</div> */}
      {/* <div className="text-gray-400 text-sm">Photographer</div> */}
    </div>
  </div>
);

const IndexPage = () => {

  const works = useStaticQuery(graphql`
    query WorksQuery {
      allContentfulWork {
        edges {
          node {
            id
            category
            title
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `).allContentfulWork
  .edges
  .map(e => e.node)

  console.log(works)

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

  const BackToTop = () => (
    <button className="bg-brown-medium hover:opacity-75 text-white rounded-3xl py-2 px-4"
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }}>
      Back to top
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

        <div className="masonry px-0 md:px-16 py-8 mb-10">
          {works
            .filter(work => ({
              'all': true,
              'other': work.category === null
            }[activeCategory] || activeCategory === work.category))
            .map(work => (
              <div className="overflow-hidden mb-4" key={work.id}>
                <Card src={work.image.file.url} title={work.title} />
              </div>
            ))}
        </div>

        <BackToTop />

      </div>


      <div className="text-center p-5 mb-10 flex flex-col items-center">

        <div className="bg-brown-dark w-24 h-0.5 m-14"></div>

        <h1 className="p-10">Contact me</h1>
        <span>contact me information</span>
        <span>contact me information</span>
        <span>contact me information</span>
      </div>
    </div>
  )
}

export default IndexPage
