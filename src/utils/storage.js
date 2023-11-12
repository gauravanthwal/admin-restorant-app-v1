export const setStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key) => {
  if (sessionStorage.getItem(key) != undefined) {
    
    const value = JSON.parse(sessionStorage.getItem(key));
    return value;
  }
};

export const removeFromStorage = (key) => {
  sessionStorage.removeItem(key);
};

export const removeAllStorage = () => {
  sessionStorage.clear();
};
