"use client";

import { Card, Button, Badge, Flex, Text, HeadingDivider } from "@/components";
import { PROJECTS } from "@/data";
import { useBubbleContentModal } from "@/hooks/useBubbleContentModalStore";
import { useTrackAnalytics } from "@/hooks/useTrackAnalytics";
import { useVideoModalStore } from "@/hooks/useVideoModalStore";
import { cn, openUrl } from "@/lib/utils";
import { CodeXml, Play } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const { track } = useTrackAnalytics();
  const { setVideoPath, toggleOpen: toggleVideoModalOpen } =
    useVideoModalStore();
  const { toggleOpen: toggleBubbleModalOpen } = useBubbleContentModal();

  const onClickCard = (project: (typeof PROJECTS)[0]) => {
    track({ type: "click", entity: "projects", item: project.name });
    if (!project.video) {
      openUrl(project.code);
      return;
    }
    setVideoPath(project.video);
    toggleBubbleModalOpen(false);
    toggleVideoModalOpen(true);
  };

  return (
    <Flex direction="col" className="w-full flex-1 gap-6">
      {PROJECTS.map((project) => (
        <Card
          key={project.name}
          onClick={() => onClickCard(project)}
          className="w-full min-w-[200px] md:min-w-[300px]"
        >
          <Flex direction="col">
            <div
              className={cn(
                "relative w-full h-[auto]",
                project.aspectRatio ||
                  (project.mobile ? "aspect-[9/16]" : "aspect-[16/9]")
              )}
            >
              <Image fill src={project.thumbnail} alt={project.name} />
            </div>
            <Flex direction="col" className="p-3">
              <Text size="h3" className="font-bold mt-2">
                {project.name}
              </Text>
              <Text size="p" className="mt-2">
                {project.description}
              </Text>
              <Flex className="py-4 gap-3">
                <Button
                  variant="secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClickCard(project);
                  }}
                >
                  <CodeXml />
                  <Text className="ml-2 font-bold">Code</Text>
                </Button>
                {!!project.video && (
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      onClickCard(project);
                    }}
                  >
                    <Play />
                    <Text className="ml-2 font-bold">Demo</Text>
                  </Button>
                )}
              </Flex>
              <HeadingDivider text="Skills" />
              <Flex className="flex-wrap pt-2 gap-2">
                {project.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default Projects;
