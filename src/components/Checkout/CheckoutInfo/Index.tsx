import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import { Form } from "antd";
import ButtonSubmit from "../../shared-components/Button/Button";
import PersonalInfo from "./PersonalInfo";
import ScheduleDelivery from "./ScheduleDelivery";
import Payment from "./Payment";
import { checkoutInterface } from "./CheckoutInterface.interface";
import SubmittedOrder from "../../../components/Checkout/CheckoutInfo/SubmittedOrder";
import "./style.scss";

const CheckoutInfo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [valuesForm, setValuesForm] = useState<checkoutInterface>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    date: "",
    notes: "",
    payment: "",
  });
  const [order, setOrder] = useState(false);

  const [form] = Form.useForm();

  const steps = [
    { label: "User details", onClick: () => setActiveStep(0) },
    { label: "Schedule Delivery", onClick: () => setActiveStep(1) },
    { label: "Payment", onClick: () => setActiveStep(2) },
  ];

  const GetSectionComponent = () => {
    switch (activeStep) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <ScheduleDelivery />;
      case 2:
        return <Payment />;
      default:
        return <Payment />;
    }
  };

  const handlePrevious = () => {
    setActiveStep(activeStep - 1);
  };

  const onFinish = (values: checkoutInterface) => {
    setValuesForm((previous: any) => ({ ...previous, ...values }));
    setActiveStep(activeStep + 1);
    if (values.payment) {
      setOrder(true);
    }
  };

  return order ? (
    <SubmittedOrder
      date={valuesForm.date}
      paymentMethod={valuesForm?.payment}
    />
  ) : (
    <div className="checkoutInfo">
      <Stepper steps={steps} activeStep={activeStep}></Stepper>
      <br />
      <br />
      <div>
        <Form name="basic" form={form} layout="vertical" onFinish={onFinish}>
          <GetSectionComponent />
          <div className="actions">
            {activeStep < 2 ? (
              <>
                {activeStep !== 0 && activeStep !== steps.length - 1 && (
                  <ButtonSubmit onClick={handlePrevious}>Previous</ButtonSubmit>
                )}
                {activeStep !== steps.length - 1 && (
                  <ButtonSubmit>Next</ButtonSubmit>
                )}
              </>
            ) : (
              <ButtonSubmit>ConFirm</ButtonSubmit>
            )}
          </div>
        </Form>
      </div>
      <br />
      <br />
    </div>
  );
};
export default CheckoutInfo;
