import React, { useState } from "react"
import '@fontsource/montserrat'

import Image from "../components/image"
import SEO from "../components/seo"

const Card = ({ src, title }) => (
  <div className="relative cursor-pointer transition transform">
    <img src={src} />
    <style jsx>{`
      .overlay {
        background: linear-gradient(0deg, black, transparent);
      }
    `}</style>
    <div className="overlay absolute bottom-0 w-full h-24 px-4 pt-6">
      {/* <div className="text-white text-lg">{title}</div> */}
      {/* <div className="text-gray-400 text-sm">Photographer</div> */}
    </div>
  </div>
);

const images = [
  {
    title: "Photo title",
    category: 'digital',
    img:
      "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Photo title",
    category: 'paper',
    img:
      "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Photo title",
    img:
      "https://images.unsplash.com/photo-1543297031-d102cd432d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Photo title",
    category: 'digital',
    img:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Photo title",
    img:
      "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Photo title",
    img:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Photo title",
    img:
      "https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Photo title",
    img:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Photo title",
    img:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  }
];

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
          {images
            .filter(img => ({
              'all': true,
              'other': img.category == null
            }[activeCategory] || activeCategory == img.category))
            .map(item => (
              <div className="overflow-hidden mb-4" key={item.img}>
                <Card src={item.img} title={item.title} />
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
