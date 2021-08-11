import { Story, Meta } from '@storybook/react/types-6-0'

import ButtonMenu, { ButtonMenuProps } from '.'

export default {
  title: 'Navigation/ButtonMenu',
  component: ButtonMenu,
  argTypes: {
    href: {
      type: null
    }
  },
  args: {
    children: 'Dashboard',
    href: '',
    isActive: false
  }
} as Meta

export const Default: Story<ButtonMenuProps> = (args) => (
  <div style={{ width: '300px', margin: 'auto' }}>
    <ButtonMenu {...args} />
  </div>
)
