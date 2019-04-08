import React from 'react'
import ReactMarkdown from 'react-markdown'

const input = '# This is a header\n\nAnd this is a paragraph'

const Example = () => (
  <ReactMarkdown source={input} />
)

export default Example
