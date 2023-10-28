import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["l", "XS", "m", "s"],
      control: { type: "select" },
    },
    type: {
      options: ["primary", "secondary", "plain"],
      control: { type: "select" },
    },
    style: {
      options: ["icon", "icon-right", "icon-left", "text", "double-icon"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "l",
    type: "primary",
    style: "icon",
    className: {},
    signUpClassName: {},
    text: "Button",
  },
};
