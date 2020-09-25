export const useChangeFieldOnList = (customList, setCustomList) => {
  const handleChangeField = i => event => {
    const { value, name } = event.target;
    const custom = customList[i];
    custom[name] = value;
    setCustomList(customs_ =>
      customs_.map((other, idx) => {
        if (idx === i) return custom;
        return other;
      })
    );
  };

  const handleNew = () => {
    setCustomList(customs => [...customs, {}]);
  };

  const removeOnList = i => () => {
    if (customList.length <= 1) return;
    setCustomList(customs => customs.filter((_, inx) => inx !== i));
  };

  return [handleChangeField, handleNew, removeOnList];
};
