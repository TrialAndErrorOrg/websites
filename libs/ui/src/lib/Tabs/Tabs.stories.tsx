import { Story, Meta } from '@storybook/react'
import { Tabs, TabsProps } from './Tabs'

export default {
  component: Tabs,
  title: 'Tabs',
} as Meta

const Template: Story<TabsProps> = (args) => <Tabs {...args} />

export const Primary = Template.bind({})
const defaultCateory = {
  Recent: [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Popular: [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
    },
  ],
}

const tabs = [
  { title: 'Write', contents: 'aa' },
  { title: 'Preview', contents: 'ooo' },
]
Primary.args = { tabs }
