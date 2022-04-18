import Joi, { string } from 'joi';

/**
 * Schemas are used by MessageHandlers to validate that the server has received
 * data in the appropriate form. See documentation for the joi module.
 */

const reasonableString = Joi.string().max(128, 'utf8').required();
const positiveInt = Joi.number().positive().required();

const username = reasonableString;
const id = positiveInt;
const metadata = Joi.string().max(128, 'utf8');
const args = Joi.string().max(128, 'utf8');

export type Schema = {
  [key: string]: Joi.AnySchema;
};

export default {
  username,
  id,
  metadata,
  args
};

/**
 * Return an object that can perform validation against the given schema.
 * 
 * @param schema the schema
 * @returns the validator object
 */
export function intoValidator(schema: Schema): Joi.ObjectSchema {
  return Joi.object({ _id: id,  ...schema }).required();
}

export function intoFilterValidator(schema: Schema): Joi.ObjectSchema {
  return Joi.object({ _id: id, metadata: metadata, args: args, ...schema }).required();
}

