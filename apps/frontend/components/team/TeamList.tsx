import Image from "next/future/image"
import { FaGithub, FaLinkedin, FaOrcid, FaTwitter } from "react-icons/fa"
import { trpc } from "../../utils/trpc"

export const TeamList = () => {
  const { data: people } = trpc.useQuery(["teamMember.getAll"])
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              About Us
            </h2>
            <p className="text-xl">
              Nulla quam felis, enim faucibus proin velit, ornare id pretium.
              Augue ultrices sed arcu condimentum vestibulum suspendisse.
              Volutpat eu faucibus vivamus eget bibendum cras.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0">
              {people &&
                people.map(
                  ({
                    firstName,
                    position,
                    pronouns,
                    show_pronouns,
                    lastName,
                    bio,
                    image,
                    github,
                    twitter,
                    orcid,
                    linkedin,
                  }) => (
                    <li key={lastName} className="sm:py-8">
                      <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                        <div className="aspect-w-2 aspect-h-3 sm:aspect-w-3 sm:aspect-h-4 ">
                          <Image
                            className={`rounded-lg bg-blue-500 fill-orange-500 ${
                              image ? "object-cover" : "object-contain"
                            } text-orange-500 shadow-lg`}
                            // objectFit={image ? "cover" : "contain"}
                            // layout="fill"
                            src={
                              image?.url ??
                              "https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_white_transp_back_71a53de683.svg"
                            }
                            alt={image?.alt ?? ""}
                            width={image?.width ?? "200"}
                            height={image?.height ?? "200"}
                            placeholder="blur"
                            blurDataURL="https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_white_transp_back_71a53de683.svg"
                            // width="208"
                            // height="200"
                          />
                        </div>
                        <div className="h-full sm:col-span-2">
                          <div className="flex h-full flex-col space-y-4">
                            <div className="space-y-1 text-lg font-medium leading-6">
                              <div className="flex items-end justify-between">
                                <h2 className="text-3xl">{`${firstName} ${
                                  lastName ?? ""
                                }`}</h2>
                                {show_pronouns && (
                                  <span className="text-md text-slate-500 dark:text-slate-400">
                                    {pronouns}
                                  </span>
                                )}
                              </div>
                              <p className="text-orange-600">{position}</p>
                            </div>
                            <div className="flex-grow text-lg">
                              <div
                                className="text-gray-500"
                                dangerouslySetInnerHTML={{ __html: bio ?? "" }}
                              />
                            </div>
                            <div className="flex">
                              <ul className="flex  space-x-5 self-end  text-xl">
                                {twitter && (
                                  <li>
                                    <a
                                      href={twitter}
                                      className="text-gray-400 hover:text-gray-500"
                                    >
                                      <span className="sr-only">Twitter</span>
                                      <FaTwitter />
                                    </a>
                                  </li>
                                )}
                                {linkedin && (
                                  <li>
                                    <a
                                      href={linkedin}
                                      className="text-gray-400 hover:text-gray-500"
                                    >
                                      <span className="sr-only">LinkedIn</span>
                                      <FaLinkedin />
                                    </a>
                                  </li>
                                )}
                                {orcid && (
                                  <li>
                                    <a
                                      href={orcid}
                                      className="text-gray-400 hover:text-gray-500"
                                    >
                                      <span className="sr-only">ORCID</span>
                                      <FaOrcid />
                                    </a>
                                  </li>
                                )}
                                {github && (
                                  <li>
                                    <a
                                      href={github}
                                      className="text-gray-400 hover:text-gray-500"
                                    >
                                      <span className="sr-only">GitHub</span>
                                      <FaGithub />
                                    </a>
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
