import { Avatar, AvatarProps } from "@ignite-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: 'https://github.com/osmaclean.png',
    alt: 'Lucas Maclean',
  },
  argTypes: {
    src: {
      description: 'The URL of the image to display.',
      control: {
        type: 'text',
      },
    },
    alt: {
      description: 'The alternative text for the image, used by screen readers.',
      control: {
        type: 'text',
      },
    }
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};


