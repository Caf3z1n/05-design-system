import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@caf3z1n-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Testando o elemento Box</Text>,
  },

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
