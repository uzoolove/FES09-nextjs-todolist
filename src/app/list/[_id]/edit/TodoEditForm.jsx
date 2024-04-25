'use client';

import Link from "next/link";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { update } from '@/app/actions';

export default function TodoEditForm({ item }){
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);
  const [done, setDone] = useState(item.done);
  const router = useRouter();

  const handleUpdate = async (formData) => {
    await update(item._id, { 
      title: formData.get('title'),
      content: formData.get('content'),
      done: formData.get('done') === 'on' ? true : false, // submit으로 서버에 전달된 체크박스는 체크되어 있을때 "on" 그렇지 않으면 null
    });

    router();
    // redirect('/list');
  };

  return (
    <form action={ handleUpdate }>
      <label htmlFor="title">제목 :</label>
      <input type="text" id="title" name="title" value={ title } onChange={ (e) => setTitle(e.target.value) } />
      <br/>
      <label htmlFor="content">내용 :</label>
      <input type="text" id="content" name="content" value={ content } onChange={ (e) => setContent(e.target.value) } />
      <br/>
      <label htmlFor="done">완료 :</label>
      <input type="checkbox" id="done" name="done" checked={ done ? 'checked' : '' } onChange={ (e) => setDone(e.target.checked) } />
      <br/>
      <button type="submit">수정</button>
      <Link href={`/list/${ item._id }`}>취소</Link>
    </form>
  );
}