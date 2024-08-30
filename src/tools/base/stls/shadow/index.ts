
// ---------- import Packs
import { ShadowStyleIOS } from 'react-native';

type Tprops_shadows = {
  pass: {
    shadowColor: any[];
    shadowOffset: any[];
    shadowOpacity: any[];
    shadowRadius: any[];
  };
};
export const shadows = (props: Tprops_shadows) => {
  let { shadowColor, shadowOffset, shadowOpacity, shadowRadius } = props.pass;

  var keyValuePairs = shadowOffset.join().slice(1, -1).split(', ');
  var iAmAObj: { width: number; height: number } = { width: 0, height: 0 };
  keyValuePairs.forEach(function (pair) {
    var parts = pair.split(':');
    var key = parts[0].trim();
    var value = parseFloat(parts[1].trim());
    iAmAObj[key] = value;
  });

  const toValue = (varValue, str?) => {
    if (str === 'str') return varValue.join().replace('px', '');
    if (str !== 'str') return Number(varValue.join().replace('px', ''));
  };

  console.log({ shadowColor });
  console.log({ shadowOffset });
  console.log({ shadowOffset2: toValue(shadowOffset, 'str') });
  console.log({ shadowOpacity });
  console.log({ shadowRadius });

  const objReturn: ShadowStyleIOS = {
    shadowOffset: iAmAObj,
    shadowColor: toValue(shadowColor, 'str'),
    shadowOpacity: toValue(shadowOpacity),
    shadowRadius: toValue(shadowRadius),
  };
  console.log({ objReturn });

  return objReturn;
};

// Fonte - textShadowColor
type Tprops_textShadowColor = {
  pass: { arrayValue: any; B: any; C: any; D: any; args: any };
};
export const textShadowColor = (props: Tprops_textShadowColor) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { textShadowColor: arrayValue };
};

// Sombreamento do Texto - textShadowOffset // DESCONTINUADO (REMOVER NO FLAX / DEPOIS APAGAR DAQUI)
type Tprops_textShadowOffset = {
  pass: { arrayValue: any[] };
};
export const textShadowOffset = (props: Tprops_textShadowOffset) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { textShadowOffset: arrayValue };
};

// Opacidade da Sombra - shadowOpacity // DESCONTINUADO (REMOVER NO FLAX / DEPOIS APAGAR DAQUI)
type Tprops_shadowOpacity = {
  pass: { arrayValue: any[] };
};
export const shadowOpacity = (props: Tprops_shadowOpacity) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { shadowOpacity: arrayValue };
};

// Raio da Sombra - shadowRadius // DESCONTINUADO (REMOVER NO FLAX / DEPOIS APAGAR DAQUI)
type Tprops_shadowRadius = {
  pass: { arrayValue: any[] };
};
export const shadowRadius = (props: Tprops_shadowRadius) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { shadowRadius: arrayValue };
};

// Posição da Sombra - shadowOffset // DESCONTINUADO (REMOVER NO FLAX / DEPOIS APAGAR DAQUI)
type Tprops_shadowOffset = {
  pass: { arrayValue1: any; arrayValue2: any };
};
export const shadowOffset = (props: Tprops_shadowOffset) => {
  let { arrayValue1, arrayValue2 } = props.pass;

  console.log({ arrayValue1 });
  console.log({ arrayValue2 });
  const isArray1 = Array.isArray(arrayValue1);
  if (isArray1) {
    arrayValue1 = arrayValue1.join();

    const isNumber = !isNaN(arrayValue1);
    if (isNumber) arrayValue1 = Number(arrayValue1);
  }
  const isArray2 = Array.isArray(arrayValue2);
  if (isArray2) {
    arrayValue2 = arrayValue2.join();

    const isNumber = !isNaN(arrayValue2);
    if (isNumber) arrayValue2 = Number(arrayValue2);
  }
  const returnObj = {
    shadowOffset: { width: 1, height: 1 },
  };

  return returnObj;
};

// Cor da Sombra - shadowColor // DESCONTINUADO (REMOVER NO FLAX / DEPOIS APAGAR DAQUI)
type Tprops_shadowColor = {
  pass: { arrayValue: any[] };
};
export const shadowColor = (props: Tprops_shadowColor) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { shadowColor: arrayValue };
};

// New boxShadow // DESCONTINUADO (REMOVER NO FLAX / DEPOIS APAGAR DAQUI)
type Tprops_shadows2 = {
  pass: {
    arrayValue1: any[];
    arrayValue2: any[];
    arrayValue3: any[];
    arrayValue4: any[];
  };
};
export const boxShadow = (props: Tprops_shadows2) => {
  let { arrayValue1, arrayValue2, arrayValue3, arrayValue4 } = props.pass;

  console.log({ arrayValue1 });
  console.log({ arrayValue2 });
  console.log({ arrayValue3 });
  console.log({ arrayValue4 });

  const objReturn: ShadowStyleIOS = {
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 14,
  };

  return objReturn;
};

