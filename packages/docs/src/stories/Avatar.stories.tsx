import { Avatar, AvatarProps } from "@ignite-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: 'https://github.com/osmaclean.png',
    alt: 'Lucas Maclean',
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};

