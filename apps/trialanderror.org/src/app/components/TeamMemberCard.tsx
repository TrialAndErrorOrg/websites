'use client'
import { GetAttributesValues } from '@strapi/strapi'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const variants = (front: boolean): Variants => ({
  rest: {
    rotateY: front ? 0 : 180,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    rotateY: front ? 180 : 0,
    transition: {
      duration: 0.5,
    },
  },
})

export function TeamMemberCard({
  member,
}: {
  member: GetAttributesValues<'api::team-member.team-member'> & { id: number }
}) {
  const { firstName, position, image, bio, lastName, summary } = member

  return (
    <div
      // flip animation on hover that shows the other side of the card which contains the bio
      className="group relative flex h-96 w-80 cursor-pointer flex-col items-center gap-10 "
      // initial="rest"
      // animate="rest"
      // whileHover="hover"
      key={member.id}
    >
      <div
        id="back"
        // variants={variants(false)}
        className="absolute flex h-full w-full flex-col items-center shadow-2xl transition-transform duration-500 ease-in-out [transform:rotateY(-180deg)] group-hover:[transform:rotateY(0deg)]"
        style={{
          backfaceVisibility: 'hidden',
        }}
      >
        <div
          className="text-xl text-blue-500"
          dangerouslySetInnerHTML={{ __html: summary ?? 'They didnt write nothin' }}
        />
      </div>
      <div
        // variants={variants(true)}
        id="front"
        className="absolute flex h-full w-full flex-col items-start shadow-2xl transition-transform duration-500 ease-in-out group-hover:[transform:rotateY(-180deg)]"
        style={{
          backfaceVisibility: 'hidden',
        }}
      >
        <Image
          className="h-60 w-80 object-cover"
          // src={image?.formats?.medium?.url ?? image?.formats?.url}
          src={image.url}
          alt={`Picture of ${firstName} ${lastName}`}
          height={image.height}
          width={image.width}
        />
        <h3 className="text-2xl font-bold text-blue-500">
          {firstName} {lastName}
        </h3>
        <p className="text-blue-500 ">{position}</p>
      </div>
    </div>
  )
}
