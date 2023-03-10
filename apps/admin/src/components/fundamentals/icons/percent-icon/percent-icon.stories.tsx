import { ComponentMeta } from "@storybook/react"
import React from "react"
import PercentIcon from "../percent-icon"

export default {
  title: "Fundamentals/Icons/PercentIcon",
  component: PercentIcon,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["24", "20", "16"],
      },
    },
  },
} as ComponentMeta<typeof PercentIcon>

const Template = args => <PercentIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
  size: "24",
  color: "currentColor",
}
