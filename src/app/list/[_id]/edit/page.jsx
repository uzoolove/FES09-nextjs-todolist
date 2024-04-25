import TodoEditForm from "@/app/list/[_id]/edit/TodoEditForm";
import Link from "next/link";
import { findById, update } from '@/db/todo';

// const API_SERVER = 'http://localhost:33020/api';
// const API_SERVER = 'https://todo-api.frontendschool.shop/api';

// async function getTodo(_id){
//   const res = await fetch(`${ API_SERVER }/todolist/${_id}`);
//   const json = await res.json();
//   return json;
// }

export default async function TodoEdit({ params: { _id } }){
  const item = await findById(Number(_id));
  // const { item } = await getTodo(_id);
  

  return (
    <div id="main">
      <h2>할일 수정</h2>
      <div className="todo">
        <TodoEditForm item={ item } update={ update } />
      </div>
    </div>
  );
}