import React, { useReducer, useMemo, useEffect } from "react";
import { NavBar, Tabs, WhiteSpace } from "antd-mobile";
import firebase from "firebase";
import "./App.css";
import Country from "./pages/Country";
import StateView from "./pages/StateView";
import Charts from "./pages/Charts";
import reducer from "./store/reducer";
import indiaInfo from "./sampledata/india-info";
import About from "./pages/About";
import { fireBaseApp } from "./config/config";

export const AppContext = React.createContext();

function App() {
  const db = fireBaseApp
    .database()
    .ref()
    .child("data");
  const [state, dispatch] = useReducer(reducer, {});
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    db.once("value", snap => {
      dispatch({ type: "SET_INDIA_VALUE", value: snap.val() });
    });
  },[]);

  const tabs = [
    { title: "India Overview", id: "india-overview" },
    { title: "State View", id: "state-view" },
    { title: "Charts", id: "india-charts" },
    { title: "About", id: "about" }
  ];
  return (
    <AppContext.Provider value={contextValue}>
      <NavBar mode="light">COVID-19 India Tracker</NavBar>
      <WhiteSpace />
      <div className="bottom-nav-wrapper">
        <Tabs
          tabBarPosition="bottom"
          tabs={tabs}
          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={2.5} />}
        >
          {renderContent}
        </Tabs>
      </div>
      <WhiteSpace />
    </AppContext.Provider>
  );
}

const renderContent = tab => {
  switch (tab.id) {
    case "india-overview":
      return (
        <div className="page-wrap vertical-center">
          <Country />
        </div>
      );
    case "state-view":
      return (
        <div className="page-wrap">
          <StateView />
        </div>
      );
    case "india-charts":
      return (
        <div className="page-wrap">
          <Charts />
        </div>
      );
    default:
      return (
        <div className="page-wrap">
          <About />
        </div>
      );
  }
};
export default App;
