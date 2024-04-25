import TodoItem from "@/app/list/TodoItem";
import { list } from "@/db/todo";
import { unstable_noStore as noStore } from 'next/cache';

const API_SERVER = 'http://localhost:33020/api';
// export const API_SERVER = 'https://todo-api.frontendschool.shop/api';

// export async function getTodoList(){
//   noStore();
//   // await new Promise(resolve => setTimeout(resolve, 5000));
//   const res = await fetch(`${ API_SERVER }/todolist?t=${new Date().getTime()}`, {
//     // false(무기한 캐시) | 0(캐시 안함) | number(초)
//     // next: { revalidate: 60 },
//     // cache: "no-store",
//   });
//   const json = await res.json();
//   console.log(new Date())
//   return json;
// }

export default async function TodoList(){
  // const data = await getTodoList();
  const data = await list();

  const itemList = data.items.map(item => <TodoItem key={ item._id } item={ item } />);

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <a href="/list/add">추가</a>
        <br/>
        <div className="search">
          <input type="text" autoFocus />
          <button type="button">검색</button>
        </div>
        <ul className="todolist">
          { itemList }
        </ul>
      </div>
    </div>
  );
}