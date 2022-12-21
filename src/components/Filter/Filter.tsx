import React, { useState } from "react";
import { Collapse, Radio ,Input } from "antd";
import type { RadioChangeEvent } from "antd";
import { useAppSelector } from "../../hooks/index";
import "./Filter.scss";

const Filter = () => {
  const { Panel } = Collapse;
  const [value, setValue] = useState(1);
  const categories = useAppSelector((state) => state.product.categories);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="filter">
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Categories" key="1">
          <Radio.Group onChange={onChange} value={value}>
            {categories.map((category, i) => (
              <Radio value={1}>{category}</Radio>
            ))}
          </Radio.Group>
        </Panel>
        <Panel showArrow={false} header="Price" key="2">
           <Input /> <Input />
        </Panel>
      </Collapse>
    </div>
  );
};

export default Filter;
