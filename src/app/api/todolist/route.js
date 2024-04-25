import { db } from '@/db';
import _ from 'lodash';
import { NextResponse } from 'next/server';

export async function GET(req) {

  const keyword = req.nextUrl.searchParams.get('keyword');
  let page = req.nextUrl.searchParams.get('page');
  let limit = req.nextUrl.searchParams.get('limit');

  console.log(keyword)

  let items = db.data.items;

  // 검색어
  if(keyword){
    items = _.filter(items, item => {
      return item.title.includes(keyword) || item.content.includes(keyword);
    });
  }

  // content 속성 제거
  items = items.map(item => _.omit(item, 'content'));

  // _id의 내림차순 정렬
  items = _.sortBy(items, item => -item._id);
  
  let pagination = {};
  if(page){
    page = Number(page);
    limit = limit ? Number(limit) : 10;
    const offset = (page - 1) * limit;
    console.log(offset);
    pagination = {
      page,
      limit,
      total: items.length,
      totalPages: Math.ceil(items.length / limit)
    };
    items = _.drop(items, offset).slice(0, limit);
  }
  db.write();

  return NextResponse.json({ items, pagination }, { status: 200 });
}
