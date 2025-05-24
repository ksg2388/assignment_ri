import React from 'react';
import DestinyChartLine from './DestinyChartLine';
import { TDestinyColumn } from '@/app/_types/destiny.types';

const charts: TDestinyColumn[] = [
  {
    title: '십성',
    chineseTitle: '十星',
    cells: [
      [{ title: '상관', chineseTitle: '傷官' }],
      [{ title: '비견', chineseTitle: '比肩' }],
      [{ title: '상관', chineseTitle: '傷官' }],
      [{ title: '상관', chineseTitle: '傷官' }],
    ],
  },
  {
    title: '천간',
    chineseTitle: '天干',
    cells: [
      [{ title: '임', chineseTitle: '壬', subTitle: '陽水' }],
      [{ title: '정', chineseTitle: '丁', subTitle: '陰火' }],
      [{ title: '계', chineseTitle: '癸', subTitle: '陽水' }],
      [{ title: '계', chineseTitle: '癸', subTitle: '陽水' }],
    ],
  },
  {
    title: '지지',
    chineseTitle: '地支',
    cells: [
      [{ title: '인', chineseTitle: '寅', subTitle: '陽木' }],
      [{ title: '사', chineseTitle: '巳', subTitle: '陰火' }],
      [{ title: '해', chineseTitle: '亥', subTitle: '陽水' }],
      [{ title: '유', chineseTitle: '酉', subTitle: '陰金' }],
    ],
  },
  {
    title: '십성',
    chineseTitle: '十星',
    cells: [
      [{ title: '비견', chineseTitle: '比肩' }],
      [{ title: '겁재', chineseTitle: '劫財' }],
      [{ title: '식신', chineseTitle: '食神' }],
      [{ title: '편재', chineseTitle: '偏財' }],
    ],
  },
  {
    title: '십이운성',
    chineseTitle: '十二運星',
    cells: [
      [{ title: '사', chineseTitle: '死' }],
      [{ title: '제왕', chineseTitle: '帝旺' }],
      [{ title: '태', chineseTitle: '胎' }],
      [{ title: '장생', chineseTitle: '長生' }],
    ],
  },
  {
    title: '십이신살',
    chineseTitle: '十二神殺',
    cells: [
      [{ title: '겁살', chineseTitle: '劫殺' }],
      [{ title: '지살', chineseTitle: '地殺' }],
      [{ title: '역마살', chineseTitle: '驛馬殺' }],
      [{ title: '장성살', chineseTitle: '將星殺' }],
    ],
  },
  {
    title: '귀인',
    chineseTitle: '貴人',
    cells: [
      [{ title: '없음' }],
      [{ title: '없음' }],
      [{ title: '천을귀인', chineseTitle: '天乙' }],
      [
        { title: '천을귀인', chineseTitle: '天乙' },
        { title: '태운귀인', chineseTitle: '太陽' },
        { title: '문창귀인', chineseTitle: '文昌' },
      ],
    ],
  },
];

const DestinyChart = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-fit border-2 border-[#1B2F49] bg-transparent px-5 pb-[33px]">
      <div className="absolute top-[8px] left-0 w-full h-[1px] bg-[#2B557E]"></div>
      <div className="absolute bottom-[8px] left-0 w-full h-[1px] bg-[#2B557E]"></div>
      <div className="absolute top-0 left-[8px] w-[1px] h-full bg-[#2B557E]"></div>
      <div className="absolute top-0 right-[8px] w-[1px] h-full bg-[#2B557E]"></div>
      <div className="mt-[40px] text-[20px] font-normal text-[#424242]">김로켓님의 사주</div>
      <div className="mt-[12px] text-[24px] font-bold text-[#424242]">1980년 8월27일 08:10</div>
      <div className="grid grid-cols-5 w-full mt-[36px]">
        <div className="border-b-2 border-r-2 border-black"></div>
        <div className="border-b-2 border-r border-black border-r-[#8A8A8A] flex justify-center items-center">
          <p className="text-[24px] font-bold text-black py-2">時</p>
        </div>
        <div className="border-b-2 border-r border-black border-r-[#8A8A8A] flex justify-center items-center">
          <p className="text-[24px] font-bold text-black">日</p>
        </div>
        <div className="border-b-2 border-r border-black border-r-[#8A8A8A] flex justify-center items-center">
          <p className="text-[24px] font-bold text-black">月</p>
        </div>
        <div className="border-b-2 border-r-2 border-black flex justify-center items-center">
          <p className="text-[24px] font-bold text-black">年</p>
        </div>
      </div>
      {charts.map((chart, idx) => (
        <DestinyChartLine key={idx} data={chart} separator={idx === 1 ? false : true} />
      ))}
    </div>
  );
};

export default DestinyChart;
