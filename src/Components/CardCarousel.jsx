import{ useState } from 'react'

const CardCarousel = () => {
  const [activeCard, setActiveCard] = useState(0)
  const totalCards = 3 // Update this based on the number of cards

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % totalCards)
  }

  const previousCard = () => {
    setActiveCard((prev) => (prev - 1 + totalCards) % totalCards)
  }

  return (
    <div className="h-screen w-screen grid place-self-center content-center bg-gray-900">
      <div className="relative h-[600px] w-screen m-auto">
        {[...Array(totalCards)].map((_, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-[600px] w-[400px] m-auto rounded-[25px] bg-slate-500 transition-transform duration-500
                        ${
                          index === activeCard
                            ? 'scale-100 z-30'
                            : 'scale-90 opacity-10'
                        }
                        ${
                          index === (activeCard - 1 + totalCards) % totalCards
                            ? '-translate-x-full'
                            : ''
                        }
                        ${
                          index === (activeCard + 1) % totalCards
                            ? 'translate-x-full'
                            : ''
                        }`}
          >
            <div className="h-[600px] w-[400px] absolute inset-0 m-auto z-10 bg-slate-500 rounded-[25px]">
              <div className="absolute h-[100%] rounded-[20px]">
                <h1 className="m-3 text-[32pt] text-center">Card-Heading 1</h1>
                <img
                  src="https://placehold.co/400x250/000000/FFFFFF/svg"
                  className="p-3 block m-auto"
                  alt="placeholder-img"
                />
                <p className="p-4 text-justify">
                  Nostrud qui elit sunt irure nostrud. Dolore eiusmod magna
                  nostrud dolore cillum id aliquip amet amet occaecat ipsum.
                  Aliquip Lorem consectetur laborum adipisicing magna voluptate
                  ex deserunt cupidatat nisi labore eu anim. Incididunt et
                  consectetur cupidatat cupidatat eu consequat dolor. Sint
                  cillum aliquip est nostrud.
                </p>
              </div>
            </div>
            <div className="">
              <div className="absolute h-[100%] rounded-[20px]">
                <h1 className="m-3 text-[32pt] text-center">Card-Heading 2</h1>
                <img
                  src="https://placehold.co/400x250/000000/FFFFFF/svg"
                  className="p-3 block m-auto"
                  alt="placeholder-img"
                />
                <p className="p-4 text-justify">
                  Nostrud qui elit sunt irure nostrud. Dolore eiusmod magna
                  nostrud dolore cillum id aliquip amet amet occaecat ipsum.
                  Aliquip Lorem consectetur laborum adipisicing magna voluptate
                  ex deserunt cupidatat nisi labore eu anim. Incididunt et
                  consectetur cupidatat cupidatat eu consequat dolor. Sint
                  cillum aliquip est nostrud.
                </p>
              </div>
            </div>
            <div className="">
              <div className="absolute h-[100%] rounded-[20px]">
                <h1 className="m-3 text-[32pt] text-center">Card-Heading 3</h1>
                <img
                  src="https://placehold.co/400x250/000000/FFFFFF/svg"
                  className="p-3 block m-auto"
                  alt="placeholder-img"
                />
                <p className="p-4 text-justify text-white">
                  Nostrud qui elit sunt irure nostrud. Dolore eiusmod magna
                  nostrud dolore cillum id aliquip amet amet occaecat ipsum.
                  Aliquip Lorem consectetur laborum adipisicing magna voluptate
                  ex deserunt cupidatat nisi labore eu anim. Incididunt et
                  consectetur cupidatat cupidatat eu consequat dolor. Sint
                  cillum aliquip est nostrud.
                </p>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={previousCard}
          className="absolute inset-0 m-auto z-30 h-[50px] w-[100px] rounded-xl bg-white text-black hover:bg-gray-200 left-[50vh]"
        >
          Previous
        </button>
        <button
          onClick={nextCard}
          className="absolute inset-0 m-auto z-30 h-[50px] w-[100px] rounded-xl bg-white text-black hover:bg-gray-200 right-[50vh]"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default CardCarousel
