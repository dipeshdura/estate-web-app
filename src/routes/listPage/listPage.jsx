import "./listPage.scss";
import React from "react";
import {listData} from "../../lib/dummydata";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";

const ListPage = () => {
  return (
    <div className="listPage">
        <div className="listContainer">
            <div className="wrapper">
                <Filter />
                {listData.map(item=>(
                    <Card 
                    key={item.id }
                    item={item}
                    />
                ))

                }
            </div>
        </div>
        <div className="mapContainer">Map</div>
    </div>
  )
};

export default ListPage;
