import { IEditor } from "../editor";
import { IPosition } from "../position";

/**
 * Model definition for position-or-editor
 */
export interface IPositionOrEditor {
  id: string;
  position?: IPosition;
  editor?: IEditor;
}
