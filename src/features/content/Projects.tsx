"use client";

import { Card, Button, Badge, Flex, Text, HeadingDivider } from "@/components";
import { PROJECTS } from "@/data";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { useBubbleContentModal } from "@/hooks/useBubbleContentModalStore";
import { useTrackAnalytics } from "@/hooks/useTrackAnalytics";
import { useVideoModalStore } from "@/hooks/useVideoModalStore";
import { cn, openUrl } from "@/lib/utils";
import { CodeXml, Play, Video } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const { md } = useBreakpoints();
  const { track } = useTrackAnalytics();
  const { setVideoPath, toggleOpen: toggleVideoModalOpen } =
    useVideoModalStore();
  const { toggleOpen: toggleBubbleModalOpen } = useBubbleContentModal();

  const trackClick = (project: (typeof PROJECTS)[0]) => {
    track({ type: "click", entity: "projects", item: project.name });
  };

  const openCode = (project: (typeof PROJECTS)[0]) => {
    if (!project.code) return;
    trackClick(project);
    openUrl(project.code);
  };

  const openVideo = (project: (typeof PROJECTS)[0]) => {
    if (!project.video) return;
    trackClick(project);
    setVideoPath(project.video);
    toggleBubbleModalOpen(false);
    toggleVideoModalOpen(true);
  };

  const openLive = (project: (typeof PROJECTS)[0]) => {
    if (!project.live) return;
    trackClick(project);
    openUrl(project.live);
  };

  const onClickCard = (project: (typeof PROJECTS)[0]) => {
    if (project.live) openLive(project);
    else if (project.video) openVideo(project);
    else openCode(project);
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
              <Image
                priority
                unoptimized={project.thumbnail?.endsWith(".gif")}
                sizes="100%"
                fill
                src={project.thumbnail}
                alt={project.name}
              />
            </div>
            <Flex direction="col" className={cn(md ? "p-3" : "p-2")}>
              <Text size="h3" className="font-bold mt-2">
                {project.name}
              </Text>
              <Text size="p" className="mt-2">
                {project.description}
              </Text>
              <Flex className="py-4 gap-3 flex-wrap">
                {!!project.live && (
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLive(project);
                    }}
                  >
                    <Play />
                    <Text className="ml-2 font-bold">Live</Text>
                  </Button>
                )}
                {!!project.video && (
                  <Button
                    variant={project.live ? "secondary" : "primary"}
                    onClick={(e) => {
                      e.stopPropagation();
                      openVideo(project);
                    }}
                  >
                    <Video />
                    <Text className="ml-2 font-bold">Video</Text>
                  </Button>
                )}
                <Button
                  variant="secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    openCode(project);
                  }}
                >
                  <CodeXml />
                  <Text className="ml-2 font-bold">Code</Text>
                </Button>
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
