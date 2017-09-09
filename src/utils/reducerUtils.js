import invariant from 'invariant';
import has from 'lodash/has';
import isNil from 'lodash/isNil';
import warn from './warn';

export const getPropFromParloadOrInitialState = (
    initialState,
    actionType,
    prop,
    returnNullProps,
) => {
  invariant(initialState, 'getPropFromPayloadOrInitialState "initialState" is a required parameter');
  invariant(actionType, 'getPropFromPayloadOrInitialState "actionType" is a required parameter');
  invariant(prop, 'getPropFromPayloadOrInitialState "prop" is a required parameter');
  invariant(
        has(initialState, prop), `getPropFromPayloadOrInitialState initialState must contain prop "${prop}"`,
    );
  return (state = initialState[prop], { type, payload }) => {
      if (type === actionType) {
          if (!has(payload, prop) || (!returnNullProps && isNil(payload[prop]))) {
              warn(`${prop} is not defined in payload for ${actionType} action`, payload);
              return state;
            }
          return payload[prop];
        }
      return state;
    };
};

export const mapActionPayloadToState = (initialState, actionType, props, returnNullProps) => {
  invariant(initialState, 'mapActionPayloadToState "initialState" is a required parameter');
  invariant(actionType, 'mapActionPayloadToState "actionType" is a required parameter');
  invariant(prop, 'mapActionPayloadToState "prop" is a required parameter');
  return props.reduce(
        (accumulator, prop) => ({
          ...accumulator,
          [prop]: getPropFromPayloadOrInitialState(initialState, actionType, prop, returnNullProps),
        }),
        {},
    );
};
