export interface Section {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

export interface DirectoryState {
  sections: Array<Section>;
}

export interface DefaultAction {
  type: string;
}

export type DirectoryActionTypes = DefaultAction;
