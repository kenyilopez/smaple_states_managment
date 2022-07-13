import { Models } from "@rematch/core";
import { count } from "./model";

export interface RootModel extends Models<RootModel> {
    count: typeof count;
}

export const models: RootModel = { count };