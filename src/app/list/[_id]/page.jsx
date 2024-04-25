import Link from "next/link";
import { findById } from '@/db/todo';

// const API_SERVER = 'http://localhost:33020/api';
// const API_SERVER = 'https://todo-api.frontendschool.shop/api';

// export async function getTodoItem(_id){
//   const res = await fetch(`${ API_SERVER }/todolist/${_id}`);
//   const json = await res.json();
//   // await new Promise(resolve => setTimeout(resolve, 2000));
//   return json;
// }

export default async function TodoDetail({ params: { _id } }){
  const item = await findById(Number(_id));
  // const { item } = await getTodoItem(_id);
  return (
    <div id="main">
      <h2>할일 상세 보기</h2>
      <div className="todo">
        <div>
          제목 : { item.title }
        </div>
        <div>
          내용 : { item.content }
        </div>
        <div>
          상태 : { item.done ? '완료' : '미완료' }
        </div>
        <div>
          작성일 : { item.createdAt }
        </div>
        <div>
          수정일 : { item.updatedAt }
        </div>
        <Link href={`/list/${ item._id }/edit`}>수정</Link>
        <Link href="/list">목록</Link>
      </div>
    </div>
  );
}