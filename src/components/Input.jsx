import React from "react";
import { Input, ConfigProvider, Checkbox } from "antd";
import { useForm } from "react-hook-form";

function InputCustom(props) {
  const { register } = useForm();

  return (
    <>
      <ConfigProvider
        theme={{
          token: {},
        }}
      >
        {props.type === "password" && (
          <Input.Password
            className="h-16 placeholder:text-base px-6 hover:border-secondary focus:border-secondary focus-within:border-secondary"
            id={props.id}
            type={props.type}
            {...register(`${props.name}`)}
            placeholder={props.placeholder}
          />
        )}
        {props.type === "text" && (
          <Input
            className="h-16 placeholder:text-sm px-6 hover:border-secondary focus:border-secondary"
            id={props.id}
            type={props.type}
            {...register(`${props.name}`)}
            placeholder={props.placeholder}
          />
        )}
        {props.type === "checkbox" && (
          <Checkbox
            className="text-primary"
            id={props.id}
            type={props.type}
            {...register(`${props.name}`)}
            value={props.value}
          >
            I agree to terms & conditions
          </Checkbox>
        )}
      </ConfigProvider>
    </>
  );
}

export default InputCustom;
