import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import { create } from "@/db/todo";

// const API_SERVER = 'http://localhost:33020/api';

export default function TodoAdd(){
  const handleAdd = async (formData) => {
    'use server';
    await create({ 
      title: formData.get('title'),
      content: formData.get('content'),
    });

    // const res = await fetch(`${ API_SERVER }/todolist`, {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ 
    //     title: formData.get('title'),
    //     content: formData.get('content'),
    //   })
    // });
    // const json = await res.json();
    // console.log(json);
    // revalidatePath(`/list`);
    redirect('/list');
  };

  return (
    <div id="main">
      <h2>할일 추가</h2>
      <div className="todo">
        <form action={ handleAdd }>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" name="title" autoFocus />
          <br/>
          <label htmlFor="content">내용 :</label>
          <input type="text" id="content" name="content" />
          <br/>
          <button type="submit">추가</button>
          <Link href="/list">취소</Link>
        </form>
      </div>
    </div>
  );
}