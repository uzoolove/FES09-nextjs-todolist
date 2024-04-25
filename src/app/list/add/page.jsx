import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import { create } from "@/app/actions";

// const API_SERVER = 'http://localhost:33020/api';

export default function TodoAdd(){
  const handleAdd = async (formData) => {
    'use server';
    await create({ 
      title: formData.get('title'),
      content: formData.get('content'),
    });

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