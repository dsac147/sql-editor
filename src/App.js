/*
 * Entry point of the App
 *
 */
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import Navbar from './Components/Navbar'
import Leftbar from './Components/LeftBar'
import Dashboard from "./Components/Dashboard";
import "./App.less";

export default function App() {
  const [islayoutLeftAligned, setIslayoutLeftAligned] = useState(true);

  /*
   * Two Display Layouts
   *
   */
  const sideBarLeftLayout = (
    <Layout>
      <Leftbar />
      <Layout>
        <Navbar
          setIslayoutLeftAligned={setIslayoutLeftAligned}
          islayoutLeftAligned={islayoutLeftAligned}
        />
        <Dashboard />
      </Layout>
    </Layout>
  );

  const sideBarRightLayout = (
    <Layout>
      <Layout>
        <Navbar
          setIslayoutLeftAligned={setIslayoutLeftAligned}
          islayoutLeftAligned={islayoutLeftAligned}
        />
        <Dashboard />
      </Layout>
      <Leftbar />
    </Layout>
  );
  /*
   * 
   *
   */

  return (
    <>
      <BrowserRouter>
        {islayoutLeftAligned ? sideBarLeftLayout : sideBarRightLayout}
      </BrowserRouter>
    </>
  );
}
