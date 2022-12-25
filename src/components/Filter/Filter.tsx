import React, { useState, useReducer } from "react";
import { Collapse, Radio, Input, Button, Form } from "antd";
import type { RadioChangeEvent } from "antd";
import { useAppSelector, useAppDispatch } from "../../hooks/index";
import { changeFilteredData } from "../../store/Product/productSlice";
import "./Filter.scss";

const Filter = () => {
  const { Panel } = Collapse;

  const dispatch = useAppDispatch();

  const categories = useAppSelector((state) => state.product.categories);

  const {filteredData} = useAppSelector(
    (state) => state.product
  );

  const onChange = (e: RadioChangeEvent) => {
    dispatch(changeFilteredData({...filteredData, category: e.target.value }));
  };

  const formReducer = (state: any, event: any) => {
    if(event.target.name === 'category'){
      dispatch(
        changeFilteredData({ [event.target.name]: event.target.value ,minPrice:null ,maxPrice:null })
      );
    }else{
    dispatch(
      changeFilteredData({ ...filteredData, [event.target.name]: event.target.value })
    )
  };
    return {
      ...state,
      [event.target.name]: event.target.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {});

  return (
    <div className="filter">
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Categories" key="1">
          <Radio.Group name="category" onChange={setFormData}  value={filteredData.category }>
            {categories.map((category, i) => (
              <Radio value={category}>{category}</Radio>
            ))}
          </Radio.Group>
        </Panel>
        <Panel header="Price" key="2">
      
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "enter value",
                },
                {
                  validator(_: any, value: string) {
                    const numberRegex = /^\d+$/;
                    if (!numberRegex.test(value)) {
                      return Promise.reject(" accept only  numbers");
                    }
                  },
                },
                {
                   pattern: new RegExp("^[0-9]*$"),
              message: "Wrong format!"
                }
              ]}
            >
              <Input
                prefix="$"
                name="min"
                onChange={setFormData}
                placeholder={"29"}
                pattern={"^[0-9]*$"}
              />
            </Form.Item>
        
          -
          <Input
            prefix="$"
            name="max"
            onChange={setFormData}
            placeholder={"50"}
          />
          <Button disabled={formData.min || formData.max ? false : true}>
            <i className="fa-solid fa-angles-right"></i>
          </Button>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Filter;
