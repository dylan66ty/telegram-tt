type ExposeKey =
'tgCallApi' |
'getGlobal' |
'setGlobal' |
'getActions' |
'addActionHandler';

const MOUNT = typeof window === 'undefined' ? {} : window;

export const EXPOSE = (obj: Partial<Record<ExposeKey, any>>) => {
  Object.keys(obj).forEach((key) => {
    // @ts-ignore
    MOUNT[key] = obj[key];
  });
};
