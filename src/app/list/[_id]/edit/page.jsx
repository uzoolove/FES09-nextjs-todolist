import TodoEditForm from "@/app/list/[_id]/edit/TodoEditForm";
import { getTodoItem } from "@/app/list/[_id]/page";

export const metadata = {
  title: '할일 수정'
}

export default async function TodoEdit({ params: { _id } }){
  const { item } = await getTodoItem(_id);
  
  return (
    <div id="main">
      <h2>할일 수정</h2>
      <div className="todo">
        <TodoEditForm item={ item } />
      </div>
    </div>
  );
}