import { Form, Input } from "antd";
import "./style.scss";
import { useAppSelector } from "../../../hooks";

const PersonalInfo = () => {
  const { isDarK, darkColor, lightColor } = useAppSelector(
    (state) => state.theme
  );

  const modeStyle = {
    color: isDarK ? lightColor : darkColor,
  };

  return (
    <div className="personalInfo">
      <div className="name">
        <Form.Item
          name="firstName"
          label={<span style={modeStyle}>First Name</span>}
          rules={[{ required: true, message: "Please input First Name" }]}
        >
          <Input placeholder="ahmed" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label={<span style={modeStyle}>Last Name</span>}
          rules={[{ required: true, message: "Please input Last Name" }]}
        >
          <Input placeholder="ahmed" />
        </Form.Item>
      </div>
      <Form.Item
        name="email"
        label={<span style={modeStyle}>Email</span>}
        rules={[{ required: true, message: "Please input Email" }]}
      >
        <Input type="email" placeholder="name@example.com" />
      </Form.Item>
      <Form.Item
        name="address"
        rules={[{ required: true, message: "Please input Address" }]}
        label={<span style={modeStyle}>Address</span>}
      >
        <Input placeholder="cairo , egypt" />
      </Form.Item>
    </div>
  );
};

export default PersonalInfo;
