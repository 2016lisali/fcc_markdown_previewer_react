import { marked } from "marked";
import Prism from 'prismjs'



export default function Previewer({content}) {
  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
  });
  
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };
  return <div id="preview" dangerouslySetInnerHTML={{
    __html: marked(content, {renderer: renderer})
  }} />;
}
