import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import ClipboardCopyIcon from "../clipboard-copy-icon"

export default {
  title: "Fundamentals/Icons/ClipboardCopy",
  component: ClipboardCopyIcon,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["24", "20", "16"],
      },
    },
  },
} as ComponentMeta<typeof ClipboardCopyIcon>

const Template: ComponentStory<typeof ClipboardCopyIcon> = (args) => (
  <ClipboardCopyIcon {...args} />
)

export const Icon = Template.bind({})
Icon.args = {
  size: "24",
  color: "currentColor",
}
