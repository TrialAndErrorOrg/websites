import { IPosition } from "./position";

/**
 * Model definition for TeamMember
 */
export interface ITeamMember {
  id: string;
  firstName: string;
  lastName?: string;
  pronouns: "theythem" | "sheher" | "hehim";
  positions?: IPosition[];
  email?: string;
  bio?: string;
  image?: Blob;
}
