'use client';
 
export default function Error({ error, reset }) {
  console.error(error);
  return (
    <div>
      <h2>에러 발생!</h2>
      <h3>이용에 불편을 드려서 죄송합니다.</h3>
      <button onClick={ () => reset() }>
        재시도
      </button>
    </div>
  )
}