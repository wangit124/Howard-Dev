"use client";

import { Button, Flex, Text, Badge, HeadingDivider } from "@/components";
import { useActiveBubbleStore } from "@/hooks/useActiveBubbleStore";
import { PERSONAL_EMAIL, PERSONAL_LINKS, PERSONAL_SKILLS } from "@/data";
import { BubbleType, COLOR } from "@/lib/types";
import { openUrl } from "@/lib/utils";
import { FileIcon, Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import { useTrackAnalytics } from "@/hooks/useTrackAnalytics";

const About = () => {
  const { track } = useTrackAnalytics();
  const { setActiveBubble } = useActiveBubbleStore();
  const goToCareerBubble = () => {
    setActiveBubble(BubbleType.CAREER);
    track({ type: "click", entity: "about", item: "career_bubble" });
  };
  const goToProjectsBubble = () => {
    setActiveBubble(BubbleType.PROJECTS);
    track({ type: "click", entity: "about", item: "projects_bubble" });
  };
  const onClickLinkedIn = () => {
    openUrl(PERSONAL_LINKS.LINKEDIN);
    track({ type: "click", entity: "about", item: "linkedin_button" });
  };
  const onClickGithub = () => {
    openUrl(PERSONAL_LINKS.GITHUB);
    track({ type: "click", entity: "about", item: "github_button" });
  };
  const onClickEmail = () => {
    openUrl(`mailto:${PERSONAL_EMAIL}`);
    track({ type: "click", entity: "about", item: "email_button" });
  };
  const onClickResume = () => {
    track({ type: "click", entity: "about", item: "resume_button" });
  };
  return (
    <Flex direction="col" className="flex-1 w-full">
      <Text size="p" className="w-full flex-1 text-wrap">
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
      <Flex
        justify="start"
        items="center"
        className="gap-3 pt-6 pb-5 w-full flex-1 flex-wrap"
      >
        <Button variant="secondary" onClick={onClickLinkedIn}>
          <Linkedin size="20px" color={COLOR.PRIMARY} />
          <Text className="ml-2 text-primary font-bold">LinkedIn</Text>
        </Button>
        <Button variant="secondary" onClick={onClickGithub}>
          <Github size="20px" color={COLOR.PRIMARY} />
          <Text className="ml-2 text-primary font-bold">Github</Text>
        </Button>
        <Button variant="secondary" onClick={onClickEmail}>
          <Mail size="20px" color={COLOR.PRIMARY} />
          <Text className="ml-2 text-primary font-bold">Email</Text>
        </Button>
        <Button variant="primary" onClick={onClickResume}>
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
