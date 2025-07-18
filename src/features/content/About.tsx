"use client";

import { Button, Flex, Text } from "@/components";
import Badge from "@/components/Badge";
import HeadingDivider from "@/components/HeadingDivider";
import { useActiveBubbleStore } from "@/hooks/useActiveBubbleStore";
import {
  PERSONAL_EMAIL,
  PERSONAL_LINKS,
  PERSONAL_SKILLS,
} from "@/lib/constants";
import { BubbleType, COLOR } from "@/lib/types";
import { openUrl } from "@/lib/utils";
import { FileIcon, Github, GraduationCap, Linkedin, Mail } from "lucide-react";

const About = () => {
  const { setActiveBubble } = useActiveBubbleStore();
  const goToCareerBubble = () => setActiveBubble(BubbleType.CAREER);
  const goToProjectsBubble = () => setActiveBubble(BubbleType.PROJECTS);
  return (
    <Flex direction="col" className="flex-1">
      <Text size="p" className="w-full text-wrap">
        I&apos;m a{" "}
        <span className="text-primary">fullstack software engineer</span> with{" "}
        <span className="text-primary">5+ years of experience</span> and a
        strong frontend background. I&apos;ve led projects in all kinds of
        organizations from building 0 {"=>"} 1 products as a{" "}
        <Text link className="text-primary" onClick={goToCareerBubble}>
          Co-Founder & Lead Engineer at Vibely
        </Text>{" "}
        to getting acquired and leading both large scale and greenfield projects
        as Software Engineer at{" "}
        <Text link className="text-primary" onClick={goToCareerBubble}>
          Kajabi
        </Text>{" "}
        and{" "}
        <Text link className="text-primary" onClick={goToCareerBubble}>
          Scale AI
        </Text>
        . Currently at Scale AI, I’m driving the development of GenAI products
        that push the boundaries of RLHF & Data Labeling. I love bringing
        together product sense, technical depth, and cross-functional
        collaboration to{" "}
        <Text link className="text-primary" onClick={goToProjectsBubble}>
          ship products that matter!
        </Text>
      </Text>
      <Flex justify="between" items="center" className="gap-3 pt-6 pb-5 w-full">
        <Button
          variant="secondary"
          onClick={() => openUrl(PERSONAL_LINKS.LINKEDIN)}
        >
          <Linkedin size="20px" color={COLOR.PRIMARY} />
          <Text className="ml-2 text-primary font-bold">LinkedIn</Text>
        </Button>
        <Button
          variant="secondary"
          onClick={() => openUrl(PERSONAL_LINKS.GITHUB)}
        >
          <Github size="20px" color={COLOR.PRIMARY} />
          <Text className="ml-2 text-primary font-bold">Github</Text>
        </Button>
        <Button
          variant="secondary"
          onClick={() => openUrl(`mailto:${PERSONAL_EMAIL}`)}
        >
          <Mail size="20px" color={COLOR.PRIMARY} />
          <Text className="ml-2 text-primary font-bold">Email</Text>
        </Button>
        <Button variant="primary">
          <FileIcon size="20px" color="black" strokeWidth={2} />
          <Text className="ml-2 text-secondary font-bold">Resume</Text>
        </Button>
      </Flex>
      <HeadingDivider text="Skills" />
      <Flex className="py-4 flex-wrap gap-2">
        {PERSONAL_SKILLS.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </Flex>
      <HeadingDivider text="Education" />
      <Flex items="center" className="pt-1">
        <GraduationCap size={60} strokeWidth={1} color={COLOR.PRIMARY} />
        <Flex direction="col" className="ml-3">
          <Text size="base" className="font-bold">
            University of California, San Diego
          </Text>
          <Text size="base" className="text-primary">
            B.S. Computer Science
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
