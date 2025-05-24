import Image from 'next/image';
import DestinyChart from './_components/common/DestinyChart';

export default function Home() {
  return (
    <div className="bg-[#F5F3EC] min-w-[350px] w-full max-w-md mx-auto">
      <div className="relative w-full aspect-[375/2081]">
        <Image
          src="/images/background.png"
          alt="background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="w-full h-full relative z-1 tracking-[-0.025em] font-[400]">
          <div className="absolute top-[31.3%] left-[18%] w-[35%] h-[4%] flex justify-center items-center text-black whitespace-pre-wrap text-center text-base">
            {`이제 본격적으로 
OO님의 사주팔자를 
분석해볼 차례네요.`}
          </div>
          <div className="absolute top-[49%] left-[16.5%] w-[45%] h-[3%] flex justify-center items-center text-black whitespace-pre-wrap text-center text-base">
            {`제가 oo님의 사주를
보기 쉽게 표로 정리했어요`}
          </div>
          <div className="absolute top-[66.5%] w-full p-3">
            <DestinyChart />
          </div>
        </div>
      </div>
    </div>
  );
}
