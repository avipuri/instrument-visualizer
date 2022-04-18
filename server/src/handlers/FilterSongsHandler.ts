import { DB } from '../Database';
import { MessageHandler } from '../MessageHandler';

/**
 * Return the result of performing the query in sql/get_songs.sql on the
 * database.
 * 
 * @returns the songs
 */
async function onMessage(msg : any): Promise<any> {
  console.debug("msg",msg)
  const songs = await DB.runQuery('filter_songs',msg.metadata,msg.args);

  console.log('filtered songs message');

  return { songs };
}

// Our schema can be empty, as we are not expecting any data with the message
const schema = {};

/**
 * A handler for the get_songs message; internally, queries the database for
 * the songs in it.
 */
export const FilterSongsHandler = new MessageHandler(
  'filter_songs',
  schema,
  onMessage,
);
