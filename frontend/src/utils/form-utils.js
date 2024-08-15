import { useRef } from 'react';

export function findInputError(errors, name) {
  return Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((obj, key) => {
      return Object.assign(obj, { [key]: errors[key] });
    }, {});
}

export function isFormValid(errors) {
  return Object.keys(errors).length === 0;
}

export function makeRefs(fields) {
  return fields.reduce((acc, field) => {
    acc[field.name] = useRef();
    return acc;
  }, {});
}
