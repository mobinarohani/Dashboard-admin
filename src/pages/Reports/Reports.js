import React, { useState, useEffect } from "react";
import "./Reports.css";
import Incom from "../../components/Incom/Incom";
import AnalyticsProduct from "../../components/AnalyticsProduct/AnalyticsProduct";
export default function Reports() {

  return (
    <div className="report">
      <Incom/>
      <div className="SellContainer">
        <AnalyticsProduct title="بیشترین فروش" info='mostSell' />
        <AnalyticsProduct title="کمترین فروش" info='lowSell' />
      </div>
    </div>
  );
}
