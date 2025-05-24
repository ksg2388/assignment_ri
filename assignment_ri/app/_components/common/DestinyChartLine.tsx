import { TDestinyColumn } from '@/app/_types/destiny.types';
import React from 'react';

type Props = {
  data: TDestinyColumn;
  separator: boolean;
};

const getBgAndTextClass = (subTitle?: string) => {
  if (subTitle === '陽水') {
    return 'bg-[#2F2F2F] text-white';
  }
  if (subTitle === '陰火') {
    return 'bg-[#C23030] text-white';
  }
  if (subTitle === '陽木') {
    return 'bg-[#18868C] text-white';
  }
  if (subTitle === '陰金') {
    return 'bg-white text-black border border-black';
  }
  return 'bg-transparent text-white';
};

const DestinyChartLine = ({ data, separator }: Props) => {
  return (
    <div className="grid grid-cols-5 w-full">
      <div
        className={`${separator ? 'border-b-2' : 'border-b border-b-[#9B9B9B]'} border-r-2 border-black flex flex-col justify-center items-center py-2 leading-5 text-center`}
      >
        <p className="text-[18px] font-semibold text-black">{data.chineseTitle}</p>
        <p className="text-[12px] font-medium text-black">{`(${data.title})`}</p>
      </div>
      {data.cells.map((cell, idx) => (
        <div
          key={idx}
          className={`w-full ${separator ? 'border-b-2' : 'border-b border-b-[#9B9B9B]'} ${idx === 3 ? 'border-r-2' : 'border-r'} border-black ${idx !== 3 ? 'border-r-[#8A8A8A]' : ''} flex flex-col justify-center items-center bg-white leading-5 text-center space-y-2 p-1`}
        >
          {cell.map((item, idx) => (
            <div key={idx} className="w-full">
              {item.subTitle ? (
                <div
                  className={`w-full h-full aspect-square flex flex-col items-center justify-around rounded-2xl ${getBgAndTextClass(item.subTitle)} leading-4`}
                >
                  <p className="text-[10px] font-medium mt-1">{item.title}</p>
                  <p className="text-[20px] font-semibold">{item.chineseTitle}</p>
                  <p className="text-[10px] font-medium">{item.subTitle}</p>
                </div>
              ) : (
                <>
                  <p className="text-[20px] font-semibold text-black">{item.chineseTitle}</p>
                  <p className="text-[11px] font-medium text-black">{`(${item.title})`}</p>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DestinyChartLine;
