import React, { useMemo } from "react";
import { RadiusBottomleftOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";


const Context = React.createContext({ name: "Default" });

const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: any) => {
    api.info({
      message: `Notification ${placement}`,
      description: (
        <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>
      ),
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}

      <Button type="primary" onClick={() => openNotification("bottomLeft")}>
        <RadiusBottomleftOutlined />
        bottomLeft
      </Button>
    </Context.Provider>
  );
};

export default App;
