import React, { useReducer } from "react";
import { Collapse, Radio, Input, Button, Form } from "antd";
import { useAppSelector, useAppDispatch } from "../../../hooks/index";
import { changeFilteredData } from "../../../store/Filter/filterSlice";
import "./Filter.scss";

const Filter = () => {
  const { Panel } = Collapse;

  const dispatch = useAppDispatch();

  const { categories } = useAppSelector((state) => state.product);
  const { isDarK } = useAppSelector((state) => state.theme);

  const filteredData = useAppSelector((state) => state.filter.filteredData);

  const formReducer = (state: any, event: any) => {
    if (event.target.name === "category") {
      dispatch(
        changeFilteredData({
          [event.target.name]: event.target.value,
          minPrice: null,
          maxPrice: null,
        })
      );
    } else {
      dispatch(
        changeFilteredData({
          ...filteredData,
          [event.target.name]: event.target.value,
        })
      );
    }
    return {
      ...state,
      [event.target.name]: event.target.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {});
  const onFinish = (values: any) => {
    dispatch(
      changeFilteredData({
        ...filteredData,
        minPrice: parseInt(values?.min),
        maxPrice: parseInt(values?.max),
      })
    );
  };

  return (
    <div className={`filter ${isDarK ? "darkCollapse" : ""}`}>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Categories" key="1">
          <Radio.Group
            name="category"
            onChange={setFormData}
            value={filteredData.category}
          >
            {Object.keys(categories).map((category, i) => (
              <Radio value={category} key={i}>{category}</Radio>
            ))}
          </Radio.Group>
        </Panel>
        <Panel header="Price" key="2">
          <Form onFinish={onFinish}>
            <Form.Item
              name="min"
              rules={[
                {
                  validator(_: any, value: string) {
                    const numberRegex = /^\d+$/;
                    if (!numberRegex.test(value)) {
                      return Promise.reject(" accept only  numbers");
                    } else {
                      return Promise.resolve();
                    }
                  },
                },
              ]}
              className={"mb-0"}
            >
              <Input prefix="$" placeholder={"min price : 29"} />
            </Form.Item>
            <label className="break">-</label>
            <Form.Item
              name="max"
              rules={[
                {
                  validator(_: any, value: string) {
                    const numberRegex = /^\d+$/;
                    if (!numberRegex.test(value)) {
                      return Promise.reject(" accept only  numbers");
                    } else {
                      return Promise.resolve();
                    }
                  },
                },
              ]}
            >
              <Input prefix="$" placeholder={"max price : 50"} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">
                <i className="fa-solid fa-angles-right"></i>
              </Button>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Filter;
