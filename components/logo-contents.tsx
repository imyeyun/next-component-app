import Image from "next/image";

//부모컴포넌트에서 전달되는 props들의 타입정의
type LogoContentsProps = {
  logoPath: string;
};

const LogoContents = ({ logoPath }: LogoContentsProps) => {
  return (
    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src={logoPath}
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  );
};

export default LogoContents;
