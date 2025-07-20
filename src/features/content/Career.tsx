"use client";

import { Collapsible, CustomImage, Text, Flex } from "@/components";
import { CAREER_ROLES } from "@/data";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { useTrackAnalytics } from "@/hooks/useTrackAnalytics";
import { COLOR } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CircleSmall } from "lucide-react";

const Career = () => {
  const { track } = useTrackAnalytics();
  const { md } = useBreakpoints();
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
          {md && (
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
          )}
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
              <Flex direction="col" className="pt-2">
                {careerRole.achievements.map((achievement, index) => (
                  <Flex key={index} items="start">
                    <CircleSmall
                      size={14}
                      className="mt-[4px] flex-shrink-0"
                      strokeWidth={2}
                      color={COLOR.PRIMARY}
                    />
                    <Flex
                      direction="col"
                      className="text-wrap flex-1 mb-2 ml-1"
                    >
                      {achievement.split(`\n`).map((text, textIndex) => (
                        <Text
                          key={textIndex}
                          className={cn(
                            achievement.split(`\n`).length > 1 &&
                              textIndex === 0
                              ? "font-bold"
                              : ""
                          )}
                        >
                          {text}
                        </Text>
                      ))}
                    </Flex>
                  </Flex>
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
