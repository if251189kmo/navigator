const writeToStorage = (key: string, details: any) => {
  localStorage.setItem(key, JSON.stringify(details));
};

const readFromStorage = (key: string) => {
  const localStorageData = localStorage.getItem(key);

  return !localStorageData ? undefined : JSON.parse(localStorageData);
};

const removeFromStorage = (key: string) => {
  localStorage.removeItem(key);
};

export { writeToStorage, readFromStorage, removeFromStorage };
