import React from 'react'

import CountButton from '.'

export default {
  title: 'CountButton',
  component: CountButton
}

export const Download = () => <CountButton type="download" total={10} />

export const Like = () => <CountButton type="like" total={20} />

export const Save = () => <CountButton type="save" total={5} />
