import { DotPattern } from "@/components/ui/dot-pattern";
import Flex from "@/components/ui/flex";

export default function Home() {
  return (
    <div className="h-full">
      <DotPattern />
      <Flex justify="center" className="w-full h-full pt-30">
        <div className=" w-[80%] z-1 bg-white color-white rounded-lg">
          asdf
        </div>
      </Flex>
    </div>
  );
}
