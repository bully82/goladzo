import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PlayersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LeaguesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Players {
  readonly id: string;
  readonly Teams?: Teams | null;
  readonly Name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly playersTeamsId?: string | null;
  constructor(init: ModelInit<Players, PlayersMetaData>);
  static copyOf(source: Players, mutator: (draft: MutableModel<Players, PlayersMetaData>) => MutableModel<Players, PlayersMetaData> | void): Players;
}

export declare class Teams {
  readonly id: string;
  readonly Leagues?: Leagues | null;
  readonly Name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamsLeaguesId?: string | null;
  constructor(init: ModelInit<Teams, TeamsMetaData>);
  static copyOf(source: Teams, mutator: (draft: MutableModel<Teams, TeamsMetaData>) => MutableModel<Teams, TeamsMetaData> | void): Teams;
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