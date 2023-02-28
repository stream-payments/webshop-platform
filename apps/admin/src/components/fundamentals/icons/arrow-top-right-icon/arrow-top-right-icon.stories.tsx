import { ComponentMeta } from "@storybook/react"
import React from "react"
import ArrowTopRightIcon from "../arrow-top-right-icon"

export default {
  title: "Fundamentals/Icons/ArrowRightIcon",
  component: ArrowTopRightIcon,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["24", "20", "16"],
      },
    },
  },
} as ComponentMeta<typeof ArrowTopRightIcon>

const Template = (args) => <ArrowTopRightIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
  size: "24",
  color: "currentColor",
}