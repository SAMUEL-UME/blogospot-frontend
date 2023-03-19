import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import {FaBold, FaItalic, FaStrikethrough, FaHeading, FaListOl, 
FaListUl, FaQuoteLeft, FaRedo, FaUndo, FaUnderline, FaCode,} from 'react-icons/fa'
import Underline from '@tiptap/extension-underline'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <React.Fragment>
      <div className='menu-bar'>
      <button
      onClick={() => editor.chain().focus().toggleBold().run()}
      disabled={
        !editor.can()
          .chain()
          .focus()
          .toggleBold()
          .run()
      }
      className={editor.isActive('bold') ? 'is-active' : ''}
    >
    <FaBold/ >
    </button>
    <button
      onClick={() => editor.chain().focus().toggleItalic().run()}
      disabled={
        !editor.can()
          .chain()
          .focus()
          .toggleItalic()
          .run()
      }
      className={editor.isActive('italic') ? 'is-active' : ''}
    >
   <FaItalic />
   </button>
    <button
      onClick={() => editor.chain().focus().toggleUnderline().run()}
      disabled={
        !editor.can()
          .chain()
          .focus()
          .toggleUnderline()
          .run()
      }
      className={editor.isActive('underline') ? 'is-active' : ''}
    >
   <FaUnderline />
    </button>
    <button
      onClick={() => editor.chain().focus().toggleStrike().run()}
      disabled={
        !editor.can()
          .chain()
          .focus()
          .toggleStrike()
          .run()
      }
      className={editor.isActive('strike') ? 'is-active' : ''}
    >
      <FaStrikethrough />
    </button>
    <button
      onClick={() => editor.chain().focus().toggleCode().run()}
      disabled={
        !editor.can()
          .chain()
          .focus()
          .toggleCode()
          .run()
      }
      className={editor.isActive('code') ? 'is-active' : ''}
    >
    <FaCode />
    </button>
    <button
      onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
    >
      <FaHeading />
    </button>
    <button
      onClick={() => editor.chain().focus().toggleBulletList().run()}
      className={editor.isActive('bulletList') ? 'is-active' : ''}
    >
      <FaListUl />
    </button>
    <button
      onClick={() => editor.chain().focus().toggleOrderedList().run()}
      className={editor.isActive('orderedList') ? 'is-active' : ''}
    >
    <FaListOl />
    </button>
    <button
      onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      className={editor.isActive('codeBlock') ? 'is-active' : ''}
    >
      <svg class="icon w-6 h-6 text-gray-500" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10h6v2h-6v-2zm-3.333-3L5.838 9.172l1.415-1.415L11.495 12l-4.242 4.243-1.415-1.415L8.667 12z"></path>
    </g>
</svg>
    </button>
    <button
      onClick={() => editor.chain().focus().toggleBlockquote().run()}
      className={editor.isActive('blockquote') ? 'is-active' : ''}
    >
      <FaQuoteLeft />
    </button>
    <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
      <svg class="icon w-6 h-6 text-gray-500" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z"></path>
    </g>
</svg>
    </button>
    <button onClick={() => editor.chain().focus().setHardBreak().run()}>
      <svg class="icon w-6 h-6 text-gray-500" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M15 18h1.5a2.5 2.5 0 1 0 0-5H3v-2h13.5a4.5 4.5 0 1 1 0 9H15v2l-4-3 4-3v2zM3 4h18v2H3V4zm6 14v2H3v-2h6z"></path>
    </g>
</svg>
    </button>
    <button
      onClick={() => editor.chain().focus().undo().run()}
      disabled={
        !editor.can()
          .chain()
          .focus()
          .undo()
          .run()
      }
    >
      <FaUndo />
    </button>
    <button
      onClick={() => editor.chain().focus().redo().run()}
      disabled={
        !editor.can()
          .chain()
          .focus()
          .redo()
          .run()
      }
    >
      <FaRedo />
    </button>
    <button
      onClick={() => editor.chain().focus().setColor('#958DF1').run()}
      className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
    >
      <svg class="icon w-6 h-6 text-gray-500" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M5 5v3h14V5H5zM4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2v1zm11.732 1.732l1.768-1.768 1.768 1.768a2.5 2.5 0 1 1-3.536 0z"></path>
    </g>
</svg>
    </button>
      </div>
    </React.Fragment>
  )
}

const Tiptap = ({setDesc}) => {
  const editor = useEditor({
    extensions: [
    StarterKit,
    Underline, 
    ],
    content: ``,
    onUpdate: ({editor}) => {
      const html = editor.getHTML();
      setDesc(html);
    }
  })

  return (
    <div className="text-editor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap