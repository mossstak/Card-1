import { useState } from 'react'

const CardCarousel = () => {
  const cardData = [
    {
      title: 'Card 1',
      img: 'https://placehold.co/200x175/000000/FFFFFF/svg',
      description:
        'Nostrud qui elit sunt irure nostrud. Dolore eiusmod magna nostrud dolore cillum id aliquip amet amet occaecat ipsum. Aliquip Lorem consectetur laborum adipisicing magna voluptate ex deserunt cupidatat nisi labore eu anim. Incididunt et consectetur cupidatat cupidatat eu consequat dolor. Sint cillum aliquip est nostrud.',
    },
    {
      title: 'Card 2',
      img: 'https://placehold.co/200x175/000000/FFFFFF/svg',
      description:
        'Nostrud qui elit sunt irure nostrud. Dolore eiusmod magna nostrud dolore cillum id aliquip amet amet occaecat ipsum. Aliquip Lorem consectetur laborum adipisicing magna voluptate ex deserunt cupidatat nisi labore eu anim. Incididunt et consectetur cupidatat cupidatat eu consequat dolor. Sint cillum aliquip est nostrud.',
    },
    {
      title: 'Card 3',
      img: 'https://placehold.co/200x175/000000/FFFFFF/svg',
      description:
        'Nostrud qui elit sunt irure nostrud. Dolore eiusmod magna nostrud dolore cillum id aliquip amet amet occaecat ipsum. Aliquip Lorem consectetur laborum adipisicing magna voluptate ex deserunt cupidatat nisi labore eu anim. Incididunt et consectetur cupidatat cupidatat eu consequat dolor. Sint cillum aliquip est nostrud.',
    },
  ] // Populate this array with your card data

  const [activeCard, setActiveCard] = useState(0)

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % cardData.length)
  }

  const previousCard = () => {
    setActiveCard((prev) => (prev - 1 + cardData.length) % cardData.length)
  }

  return (
    <div className="h-screen w-screen grid place-self-center content-center bg-gray-900">
      <div className="relative h-[600px] w-screen m-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-[300px] w-[200px] m-auto rounded-[25px] bg-slate-500 transition-transform duration-500
                        ${
                          index === activeCard
                            ? 'scale-100 z-30'
<<<<<<< HEAD
                            : 'scale-90 opacity-20'
=======
                            : 'scale-90 opacity-10'
>>>>>>> e46a4a5f4af53758d2dba009f7ecf617d9507453
                        }
                        ${
                          index ===
                          (activeCard - 1 + cardData.length) % cardData.length
                            ? '-translate-x-full'
                            : ''
                        }
                        ${
                          index === (activeCard + 1) % cardData.length
                            ? 'translate-x-full'
                            : ''
                        }`}
          >
            <div className="h-[375px] w-[250px] absolute inset-0 m-auto z-10 bg-slate-500 rounded-[25px]">
              <h1 className="m-1 text-[16pt] text-center">{card.title}</h1>
              <img
                src={card.img}
                className="p-1 block m-auto"
                alt="placeholder-img"
              />
              <p className="p-2 text-[8pt] text-justify">{card.description}</p>
            </div>
          </div>
        ))}

        <button
          onClick={previousCard}
          className="absolute inset-0 m-auto z-30 h-[50px] w-[100px] rounded-xl bg-white text-black hover:bg-gray-200 right-[50vh]"
        >
          Previous
        </button>
        <button
          onClick={nextCard}
          className="absolute inset-0 m-auto z-30 h-[50px] w-[100px] rounded-xl bg-white text-black hover:bg-gray-200 left-[50vh]"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default CardCarousel
