'use client'
import { GetAttributesValues } from '@strapi/strapi'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import { FaTwitter, FaMastodon, FaGithub, FaLink, FaOrcid, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import { classNames } from '../Navigation'

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
  const {
    firstName,
    position,
    image,
    bio,
    lastName,
    summary,
    mastodon,
    twitter,
    orcid,
    github,
    personalWebsite,
    linkedin,
  } = member

  const socials = {
    linkedIn: {
      url: linkedin,
      icon: <FaLinkedin className="text-2xl text-blue-500" />,
    },
    mastodon: {
      url: mastodon,
      icon: <FaMastodon className="text-2xl text-blue-500" />,
    },
    twitter: {
      url: twitter,
      icon: <FaTwitter className="text-2xl text-blue-500" />,
    },
    github: {
      url: github,
      icon: <FaGithub className="text-2xl text-blue-500" />,
    },
    orcid: {
      url: orcid,

      icon: <FaOrcid className="text-2xl text-blue-500" />,
    },
    personalWebsite: {
      url: personalWebsite,
      icon: <FaLink className="text-2xl text-blue-500" />,
    },
  }

  const [turn, setTurn] = useState(false)

  return (
    <div
      // flip animation on hover that shows the other side of the card which contains the bio
      className="group relative flex h-96 w-60 cursor-pointer flex-col items-center gap-10 md:w-80"
      onClick={() => setTurn((turn) => !turn)}
      // initial="rest"
      // animate="rest"
      // whileHover="hover"
      key={member.id}
    >
      <div
        id="back"
        // variants={variants(false)}
        className={classNames(
          'absolute flex h-full w-full flex-col items-center justify-between bg-white/30 p-4 transition-transform duration-700 ease-out md:[transform:rotateY(-180deg)] md:group-hover:[transform:rotateY(0deg)]',
          turn ? '[transform:rotateY(0deg)]' : '[transform:rotateY(-180deg)]',
        )}
        style={{
          backfaceVisibility: 'hidden',
        }}
      >
        <h3 className="text-2xl font-bold text-blue-500">{`${firstName}`}</h3>
        <div
          className="text-center text-sm text-blue-500 md:text-lg"
          dangerouslySetInnerHTML={{ __html: summary || 'They didnt write nothin' }}
        />
        {/* Map out all the socials of the member */}
        <div className="mt-4 flex gap-4">
          {Object.entries(socials).map(([key, value]) => {
            if (value.url) {
              return (
                <a key={key} href={value.url}>
                  {value.icon}
                </a>
              )
            }
          })}
        </div>
      </div>
      <div
        // variants={variants(true)}
        id="front"
        className={classNames(
          'absolute flex h-full w-full flex-col items-start  transition-transform duration-700 ease-out md:group-hover:[transform:rotateY(-180deg)]',
          turn ? '[transform:rotateY(-180deg)]' : '[transform:rotateY(0deg)]',
        )}
        style={{
          backfaceVisibility: 'hidden',
        }}
      >
        <Image
          className="h-80 w-60 object-cover md:h-80 md:w-80"
          // src={image?.formats?.medium?.url ?? image?.formats?.url}
          src={image.url}
          alt={`Picture of ${firstName} ${lastName}`}
          height={image.height}
          width={image.width}
        />
        <div className="mt-4 flex flex-col gap-1">
          <h3 className="text-2xl font-bold text-blue-500">
            {firstName} {lastName}
          </h3>
          <p className="text-lg text-blue-500">{position}</p>
        </div>
      </div>
    </div>
  )
}
