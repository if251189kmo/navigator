import fs, { readFileSync, promises } from 'fs';
import path from 'path';
import ModelNames from '../../constant/modelNames';
import { Models } from '../types';

const getJsonPath = (name: ModelNames) => path.resolve(__dirname, `../../models/jsons/${name}.json`);

const jsonWrite = (json: string, name: ModelNames) => fs.writeFileSync(getJsonPath(name), json); // TODO: поміня параметри місцями

const readJsonSync = (name: ModelNames) => {
  const json = readFileSync(getJsonPath(name));
  return JSON.parse(json.toString());
};

const readJson = async (name: ModelNames) => {
  const json = await promises.readFile(getJsonPath(name));
  return JSON.parse(json.toString());
};

const changeModelsHandler = (data: Models, name: ModelNames) => {
  const json = JSON.stringify(data);

  jsonWrite(json, name);
};

export { readJson, readJsonSync, jsonWrite, changeModelsHandler };
