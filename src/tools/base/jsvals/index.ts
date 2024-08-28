
// ---------- import Local Tools
import { argSel, getCtData } from './src/tools/base/project';

const css2 =
  'color: cyan; background-color: #444; font-size: 11px; padding: 2px 6px; border-radius: 3px';

// ---------------- varReader
// --------------------------
type Tprops_varReader = { pass: { path: string[] | string } };
export const varReader = (props: Tprops_varReader) => {
  const { path } = props.pass;

  let newPath = '';

  const isArray = Array.isArray(path);
  if (isArray) {
    newPath = path.reduce((prev, curr) => prev + curr, '');
  } else {
    newPath = path;
  }
  const returnVarValue = getCtData(newPath);
  console.log('%cvarReader', css2, { varPath: newPath, value: returnVarValue });

  return returnVarValue;
};

// ---------------- argReader
// --------------------------
type Tprops_argReader = { pass: { argPath: string; args: any } };
export const argReader = (props: Tprops_argReader) => {
  const { argPath, args } = props.pass;

  let newArgPath = '';

  const isArray = Array.isArray(argPath);
  if (isArray) {
    newArgPath = argPath.reduce((prev, curr) => prev + curr, '');
  } else {
    newArgPath = argPath;
  }
  const returnArgValue = argSel(args, newArgPath);
  console.log('%cargReader', css2, {
    varPath: newArgPath,
    value: returnArgValue,
  });

  return returnArgValue;
};

// ------------ j3 to joinStringValue
// ----------------------------------
type Tprops_joinStringValue = {
  pass: { arrayStrings: any; joinSeparator: any };
};
export const joinStringValue = (props: Tprops_joinStringValue) => {
  const { arrayStrings, joinSeparator } = props.pass;

  return arrayStrings.join(joinSeparator);
};

// --------- j7 to propJsonStrignify
// ---------------------------------
type Tprops_propJsonStrignify = {
  pass: { objectProperties: any };
};
export const propJsonStrignify = (props: Tprops_propJsonStrignify) => {
  const { objectProperties } = props.pass;

  return JSON.stringify(objectProperties);
};

// ------------------------ Direct Return
// ---------------------- j8 to freeValue
// -------- propObj, propString, propArray
// ---- stringValue, arrayValue, freeValue
type Tprops_freeValue = {
  pass: { propertieValues: any };
};
export const freeValue = (props: Tprops_freeValue) => {
  const { propertieValues } = props.pass;

  return propertieValues;
};

// ---------- prop j10 to urlEncoded
// ---------------------------------
type Tprops_urlEncoded = {
  pass: { objectProperties: {} };
};
export const urlEncoded = (props: Tprops_urlEncoded) => {
  const { objectProperties } = props.pass;

  return new URLSearchParams(objectProperties);
};

// ---------------- j12 to toggleVar
// ---------------------------------
type Tprops_toggleVar = { pass: { varToToggle: any; args: any } };
export const toggleVar = (props: Tprops_toggleVar) => {
  const { varToToggle, args } = props.pass;

  return varToToggle;
};
