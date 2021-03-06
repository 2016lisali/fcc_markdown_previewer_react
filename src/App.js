
import { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const placeholder = `## Headers

  # This is a Heading h1
  ## This is a Heading h2 
  ###### This is a Heading h6
  
  ## Emphasis
  
  *This text will be italic*  
  _This will also be italic_
  
  **This text will be bold**  
  __This will also be bold__
  
  _You **can** combine them_
  
  ## Lists
  
  ### Unordered
  
  * Item 1
  * Item 2
  * Item 2a
  * Item 2b
  
  ### Ordered
  
  1. Item 1
  1. Item 2
  1. Item 3
    1. Item 3a
    1. Item 3b
  
  ## Images
  
  ![This is a alt text.](https://raw.githubusercontent.com/2016lisali/personal_portfolio/main/public/assets/fcc_markdown_preview.jpg "This is a alt text.")
  
  ## Links
  
  You may be using [Markdown Live Preview](https://markdownlivepreview.com/).
  
  ## Blockquotes
  
  > Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
  >
  >> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
  
  ## Tables
  
  | Left columns  | Right columns |
  | ------------- |:-------------:|
  | left foo      | right foo     |
  | left bar      | right bar     |
  | left baz      | right baz     |
  
  ## Blocks of code
  
  \`\`\`
  let message = 'Hello world';
  alert(message);
  \`\`\`
  
  ## Inline code
  
  This web site is using \`markedjs/marked\`.`;
  const [content, setContent] = useState(placeholder)

  const handleChange = (evt) => {
    setContent(evt.target.value)
  }
  return (
    <div className='app'>
      <Header />
      <Editor content={content} handleChange={handleChange} />
      <Previewer content={content} />
      <Footer />
    </div>
  );
}
export default App;
