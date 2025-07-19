"use client";

import { Collapsible, CustomImage, Text, Flex } from "@/components";
import { CAREER_ROLES } from "@/data";
import { useTrackAnalytics } from "@/hooks/useTrackAnalytics";
import { cn } from "@/lib/utils";

const Career = () => {
  const { track } = useTrackAnalytics();
  const onClickCollapsible = (company: string) =>
    track({
      type: "click",
      entity: "career",
      item: company,
    });

  return (
    <Flex direction="col" className="w-full h-full">
      {CAREER_ROLES.map((careerRole, index) => (
        <Flex key={careerRole.company} items="center" className="w-full gap-4">
          <div className="flex flex-col grow items-center min-h-[120px] h-full">
            <div
              className={cn(
                "grow w-[1px]",
                index === 0 ? "bg-secondary" : "bg-primary"
              )}
            />
            <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-b from-primary-gradient-start to-primary-gradient-end" />
            <div
              className={cn(
                "grow w-[1px]",
                index === CAREER_ROLES.length - 1
                  ? "bg-secondary"
                  : "bg-primary"
              )}
            />
          </div>
          <Collapsible
            onClick={() => onClickCollapsible(careerRole.company)}
            className="w-full my-2"
            headerContent={
              <Flex items="center" className="flex-1">
                <CustomImage
                  width={80}
                  height={80}
                  src={careerRole.logo}
                  alt={careerRole.logo}
                />
                <Flex direction="col" className="mx-4 flex-1">
                  <Text size="h3" className="font-bold">
                    {careerRole.company}
                  </Text>
                  <Text size="p">{careerRole.role}</Text>
                  <Text className="text-primary">
                    {careerRole.start} - {careerRole.end}
                  </Text>
                </Flex>
              </Flex>
            }
            hiddenContent={
              <Flex direction="col">
                {careerRole.achievements.map((achievement, index) => (
                  <Text key={index}>- {achievement}</Text>
                ))}
              </Flex>
            }
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default Career;
