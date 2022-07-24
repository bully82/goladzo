// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Players, Teams, Leagues } = initSchema(schema);

export {
  Players,
  Teams,
  Leagues
};