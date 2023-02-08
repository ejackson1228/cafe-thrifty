import React from "react";

function Pottery() {
    return (
        <div>
            <div className="shop-nav">
                <select name="shop-categories" className="shop-categories-dropdown">
                        <option value='vintage'>vintage</option>
                        <option value='pottery'>pottery</option>
                        <option value='dwelling'>dwelling</option>
                        <option value='zero waste'>zero waste</option>
                        <option value='misc'>misc</option>
                </select>
            </div>
        </div>
    )
};

export default Pottery;