'use client'
import { Card } from '../server/mixed'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { format } from 'date-fns'

function splitSentences(sentence: string) {
  const regex = /[^.!?]+[.!?]/g
  const matches = sentence.match(regex)
  return matches ? matches.map((s) => s.trim()) : [sentence]
}

export function Card({ card, delay = 0 }: { card: Card; delay?: number }) {
  const { title, image, url, excerpt, team, published, type, category, id } = card

  // split the title by colons, periods, and exclamation points
  // make the first part of the title the main title
  // make the rest of the title the subtitle

  const titleParts = /(.*?[?.:!])(.*)/g.exec(title) ?? [title, title, '']
  const mainTitle = titleParts[1]?.replace(/[:.]/g, '')
  const subTitle = titleParts.slice(2).join(' ')?.replace(/[:.]/g, '').trim()
  const capitalizedSubTitle = subTitle.charAt(0).toUpperCase() + subTitle.slice(1)
  const titleClass = subTitle ? 'text-2xl' : 'text-3xl'

  return (
    <motion.article
      // animate={{ y: 0, opacity: 1 }}
      whileInView={{
        y: 0,
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: delay,
        },
      }}
      viewport={{ once: true }}
      transition={{
        ease: 'easeInOut',
        duration: 0.2,
      }}
      whileHover={{
        translateX: '-8px',
        translateY: '-8px',
        boxShadow: '8px 8px 0px #002642',
        transition: {
          translateX: { delay: 0 },
          translateY: { delay: 0 },
          boxShadow: { delay: 0 },
          duration: 0.2,
          delay: 0,
        },
      }}
      initial={{ y: 100, opacity: 0 }}
      key={card.title}
      className="group relative col-span-1 flex w-80 flex-col border-b-[6px] border-blue-500 bg-white md:w-96"
      //className="hover:shadow-thick-3 group relative col-span-1 flex flex-col shadow-[0px_0px_0_#000] transition-all ease-in-out  hover:-translate-x-2 hover:-translate-y-2"
    >
      {card?.image?.url ? (
        <Image
          src={
            card.image?.formats?.large?.url || card.image?.formats?.medium?.url || card.image.url
          }
          alt={card.image.alt ?? ''}
          width={card.image.height}
          height={card.image.height}
          className="h-60 w-80 object-cover md:h-80 md:w-96"
        />
      ) : (
        <div className="flex h-40 items-center justify-center bg-orange-500">
          <span className="text-2xl text-black">{card.title[0]}</span>
        </div>
      )}
      <span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center border border-black bg-white font-bold">
        {type === 'article' ? 'J' : 'B'}
      </span>
      <div className="flex flex-grow flex-col justify-between p-4">
        <div className="flex h-full flex-col justify-between">
          <div>
            <h2 className="my-2 text-xl font-bold leading-tight tracking-tight  text-blue-500 md:text-2xl">
              <Link
                className="link-overlay"
                target="_blank"
                href={
                  card.type === 'post' ? `https://blog.trialanderror.org/${card.url}` : card.url
                }
              >
                {mainTitle}
              </Link>

              {subTitle && (
                <span className="capitalized  text-base font-normal text-blue-500">
                  <br />
                  {capitalizedSubTitle}
                </span>
              )}
            </h2>
            {/* authors  */}

            {card.team?.length > 0 ? (
              <div className="flex flex-row flex-wrap gap-x-2">
                {card.team.map((author) => (
                  <span
                    className="text-sm font-bold italic text-blue-500 md:text-lg"
                    key={typeof author === 'object' ? author.firstName : author}
                  >
                    {typeof author === 'object' ? `${author.firstName} ${author.lastName}` : author}
                  </span>
                ))}
              </div>
            ) : card.team.length > 3 ? (
              <div className="flex flex-row gap-2">
                <span className="text-sm font-bold italic text-blue-500 md:text-lg">
                  {typeof card.team[0] === 'object'
                    ? `${card.team[0].firstName} ${card.team[0].lastName} et al.`
                    : card.team[0]}
                </span>
              </div>
            ) : null}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm capitalize leading-3 text-blue-500 md:text-lg">
              {card.category ?? 'open call'}
            </span>
            <span>|</span>
            <span className="text-sm text-blue-500 md:text-lg">
              {format(new Date(card.published), 'MMMM dd, yyyy')}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
