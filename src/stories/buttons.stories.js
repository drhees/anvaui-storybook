/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs';

import MyButton from '../components/MyButton.vue'

const paddedList = () => {
    return {
        template: '<div style="padding: 60px;"><story /></div>'
    }
}

const stories = storiesOf('Buttons', module)

stories.addDecorator(withKnobs)
stories.addDecorator(paddedList)


stories.add('Sizes', () => ({
    components: { MyButton },
    props: {
      text: {
        default: text('Text', 'Hello Storybook')
      },
    },
    template: `<my-button @click="action">{{ text }}</my-button>`,
    methods: { action: action('clicked') }
  }))
