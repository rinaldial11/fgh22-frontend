import React from "react";
// import { FaCheck } from "react-icons/fa6";
import { ConfigProvider, Popover, Steps } from "antd";

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index + 1} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

function Step(props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#405D72", // Warna primary
          colorText: "#1E3E62",
          // colorTextDisabled: "#fff",
        },
      }}
    >
      <Steps
        current={props.step}
        progressDot={customDot}
        items={[
          {
            title: (
              <span
                className={`${
                  props.step === 0 ? "text-primary" : "text-gray-500"
                }`}
              >
                {props.content1}
              </span>
            ),
          },
          {
            title: (
              <span
                className={`${
                  props.step === 1 ? "text-primary" : "text-gray-500"
                }`}
              >
                {props.content2}
              </span>
            ),
          },
          {
            title: (
              <span
                className={`${
                  props.step === 2 ? "text-primary" : "text-gray-500"
                }`}
              >
                {props.content3}
              </span>
            ),
          },
        ]}
      />
    </ConfigProvider>
  );
}

export default Step;
