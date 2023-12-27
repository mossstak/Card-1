/* eslint-disable no-unused-vars */
import './App.css'
import React, { useState } from 'react'
import CardCarousel from './Components/CardCarousel'

function App() {
  const cardData = [
    {
      title: 'Card 1',
      img: 'https://placehold.co/400x250/000000/FFFFFF/svg',
      description:
        'Nostrud qui elit sunt irure nostrud. Dolore eiusmod magna nostrud dolore cillum id aliquip amet amet occaecat ipsum. Aliquip Lorem consectetur laborum adipisicing magna voluptate ex deserunt cupidatat nisi labore eu anim. Incididunt et consectetur cupidatat cupidatat eu consequat dolor. Sint cillum aliquip est nostrud.',
    },
    {
      title: 'Card 2',
      img: 'https://placehold.co/400x250/000000/FFFFFF/svg',
      description:
        'Nostrud qui elit sunt irure nostrud. Dolore eiusmod magna nostrud dolore cillum id aliquip amet amet occaecat ipsum. Aliquip Lorem consectetur laborum adipisicing magna voluptate ex deserunt cupidatat nisi labore eu anim. Incididunt et consectetur cupidatat cupidatat eu consequat dolor. Sint cillum aliquip est nostrud.',
    },
    {
      title: 'Card 3',
      img: 'https://placehold.co/400x250/000000/FFFFFF/svg',
      description:
        'Nostrud qui elit sunt irure nostrud. Dolore eiusmod magna nostrud dolore cillum id aliquip amet amet occaecat ipsum. Aliquip Lorem consectetur laborum adipisicing magna voluptate ex deserunt cupidatat nisi labore eu anim. Incididunt et consectetur cupidatat cupidatat eu consequat dolor. Sint cillum aliquip est nostrud.',
    },
  ] // Populate this array with your card data
  const [activeCard, setActiveCard] = useState(0)

  const nextCard = () =>
    setActiveCard((current) => (current + 1) % cardData.length)
  const prevCard = () =>
    setActiveCard(
      (current) => (current - 1 + cardData.length) % cardData.length
    )

  const getCardClass = (index) => {
    let baseClass =
      'absolute inset-0 m-auto transition-all duration-500 ease-in-out '
    if (index === activeCard) {
      return `${baseClass} opacity-100 scale-100`
    } else {
      return `${baseClass} opacity-0 scale-75`
    }
  }

  return (
    <div className=''>
    <CardCarousel/>
    {/*
      <div className="w-screen h-screen bg-gray-900">
        <div className="h-[600px] w-screen">
          {cardData.map((card, index) => (
            <div key={index} className={getCardClass(index)}>
              <div className=" h-[600px] w-[400px] absolute inset-0 m-auto z-10 bg-slate-500 rounded-[25px]">
                <div className="absolute h-[100%] rounded-[20px]">
                  <h1 className="m-3 text-[32pt] text-center">{card.title}</h1>
                  <img
                    src={card.img}
                    className="p-3 block m-auto"
                    alt="placeholder-img"
                  />
                  <p className="p-4 text-justify">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={prevCard}
            className="bg-white h-[50px] w-[100px] rounded-xl absolute inset-0 m-auto right-[60vh] z-30 text-black hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={nextCard}
            className=" bg-white h-[50px] w-[100px] rounded-xl absolute inset-0 m-auto left-[60vh] z-30 text-black hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    */}
    </div>
  )
}

export default App
