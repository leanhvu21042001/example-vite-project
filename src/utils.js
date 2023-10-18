export const generateID = () => Date.now() + Math.random();

export const getData = (event) => {
  const target = event.target;
  const inputNames = [];
  const formData = new FormData(target);

  for (const item of target) {
    inputNames.push(item.name);
  }

  return inputNames.reduce((prevValue, currentValue) => {
    return {
      ...prevValue,
      [currentValue]: formData.get(currentValue),
    };
  }, {});
};
