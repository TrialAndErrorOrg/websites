'use client'
import { Card } from '../server/mixed'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Card({ card, delay = 0 }: { card: Card; delay?: number }) {
  return (
    <motion.article
      // animate={{ y: 0, opacity: 1 }}
      whileInView={{
        y: 0,
        opacity: 1,
        boxShadow: '0px 0px 0 #002642',
        x: 0,
        transition: {
          duration: 0.5,
          delay,
        },
      }}
      viewport={{ once: true }}
      transition={{
        ease: 'easeInOut',
        duration: 0.2,
        delay: delay,
      }}
      whileHover={{
        x: '-8px',
        y: '-8px',
        boxShadow: '8px 8px 0 #002642',
        transition: {
          duration: 0.2,
        },
      }}
      initial={{ y: 100, opacity: 0 }}
      key={card.title}
      className="group relative col-span-1 flex flex-col border-2 border-blue-500"
      //className="hover:shadow-thick-3 group relative col-span-1 flex flex-col shadow-[0px_0px_0_#000] transition-all ease-in-out  hover:-translate-x-2 hover:-translate-y-2"
    >
      {card?.image?.url ? (
        <div className="h-80 min-w-[20rem]">
          <Image
            src={card.image.url}
            alt={card.image.alt ?? ''}
            width={320}
            height={320}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center bg-orange-500">
          <span className="text-2xl text-black">{card.title[0]}</span>
        </div>
      )}
      <span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center border border-black bg-white font-bold">
        {card.type === 'article' ? 'J' : 'B'}
      </span>
      <div className="flex h-full flex-col justify-between px-4 py-2">
        <div className="flex flex-col">
          <h2 className="my-2 text-xl font-bold leading-tight  tracking-tight text-blue-500">
            <Link
              className="link-overlay"
              href={card.type === 'post' ? `https://blog.trialanderror.org/${card.url}` : card.url}
            >
              {card.title}
            </Link>
          </h2>
          <h2>{card.category}</h2>
        </div>
      </div>
    </motion.article>
  )
}
