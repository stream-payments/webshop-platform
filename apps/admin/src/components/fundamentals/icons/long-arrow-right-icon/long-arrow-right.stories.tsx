import { ComponentMeta } from "@storybook/react"
import React from "react"
import LongArrowRight from "../long-arrow-right-icon"

export default {
  title: "Fundamentals/Icons/LongArrowRight",
  component: LongArrowRight,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["24", "20", "16"],
      },
    },
  },
} as ComponentMeta<typeof LongArrowRight>

const Template = (args) => <LongArrowRight {...args} />

export const Icon = Template.bind({})
Icon.args = {
  size: "24",
  color: "currentColor",
}
