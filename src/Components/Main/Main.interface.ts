import { CardProps as ICard } from "../../@types/types";

export interface MainState {
  items: ICard[];
  loading: boolean;
}
