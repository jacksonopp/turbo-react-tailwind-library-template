import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Button',
    },
    type: {
      control: 'type',
      defaultValue: 'primary',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  type: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  type: 'secondary',
}
