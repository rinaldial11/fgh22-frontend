import { atomWithStorage } from "jotai/utils";

export const OrderAtom = atomWithStorage({
  dateName: [],
  timeName: [],
  cinemaName: [],
  seatName: [],
  total: 0,
});
