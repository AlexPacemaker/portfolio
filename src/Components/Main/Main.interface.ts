import { CardProps as ICard } from "../Card/Card.props";

export interface MainState {
  items: ICard[];
  loading: boolean;
}
