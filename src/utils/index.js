export const preProcessCountryData = data => {
  const keys = Object.keys(data || {});
  keys.sort().reverse();
  const today = data[keys[0]] || [];
  const yesterday = data[keys[1]] || [];
  const dayBeforeYesterday = data[keys[2]] || [];
  const todaysInitData = getDaysData(today);
  const yesterdaysInitData = getDaysData(yesterday);
  const dayBeforeYesterdayInitData = getDaysData(dayBeforeYesterday);
  const todaysData = addNewCases(todaysInitData, yesterdaysInitData);
  const yesterdaysData = addNewCases(yesterdaysInitData, dayBeforeYesterdayInitData)
  const indiaTotal = getTodaysGrandTotal(todaysData, yesterdaysData);
  return {
    indiaTotal,
    todaysData,
    yesterdaysData
  };
};

const addNewCases = (todaysInitData, yesterdaysData) => {
  return todaysInitData.map(state => {
    const yesterdaysStateData =
      yesterdaysData.find(yState => yState.name === state.name) || {};
    return {
      ...state,
      newActive: state.total - (yesterdaysStateData.total || 0),
      newRecovered: state.recovered - (yesterdaysStateData.recovered || 0),
      newDeaths: state.death - (yesterdaysStateData.death || 0)
    };
  });
};
const getDaysData = day =>
  (day || []).map(state => {
    const total =
      Number.parseInt(state.totalIndians || 0) +
      Number.parseInt(state.totalForeign || 0);
    return {
      ...state,
      total: total,
      active:
        total -
        Number.parseInt(state.recovered || 0) -
        Number.parseInt(state.death || 0)
    };
  });
const getTodaysGrandTotal = (today, yesterday) => {
  const totalYesterday = yesterday.reduce(
    (acc, state) => acc + Number.parseInt(state.total || 0),
    0
  );
  const grandTotal = today.reduce(
    (acc, state) => ({
      totalCases: (acc.totalCases || 0) + Number.parseInt(state.total || 0),
      totalRecovered:
        (acc.totalRecovered || 0) + Number.parseInt(state.recovered || 0),
      totalDeath: (acc.totalDeath || 0) + Number.parseInt(state.death || 0)
    }),
    {}
  );
  grandTotal.newCases = grandTotal.totalCases - totalYesterday;
  return grandTotal;
};
