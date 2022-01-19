
export default function Editor({ content, handleChange }) {
  return (
    <textarea name="" id="editor" cols="30" rows="10" value={content} onChange={handleChange}>

    </textarea>
  )
}
