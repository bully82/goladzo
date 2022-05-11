import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LeaguesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Leagues {
  readonly id: string;
  readonly Id: string;
  readonly Name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Leagues, LeaguesMetaData>);
  static copyOf(source: Leagues, mutator: (draft: MutableModel<Leagues, LeaguesMetaData>) => MutableModel<Leagues, LeaguesMetaData> | void): Leagues;
}