import { Form, Input } from "antd";
import { useAppSelector } from "../../../hooks";

const ScheduleDelivery = () => {
  const { isDarK, darkColor, lightColor } = useAppSelector(
    (state) => state.theme
  );

  const modeStyle = {
    color: isDarK ? lightColor : darkColor,
  };

  return (
    <>
      <Form.Item
        label={<span style={modeStyle}>Delivery Date </span>}
        name="date"
        rules={[{ required: true, message: "Please input Date" }]}
      >
        <Input type="datetime-local" />
      </Form.Item>
      <Form.Item label={<span style={modeStyle}>Notes </span>}>
        <Input placeholder="Notes" />
      </Form.Item>
    </>
  );
};

export default ScheduleDelivery;
