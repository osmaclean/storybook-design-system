import { Text, TextProps } from "@ignite-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt cumque dolorum optio obcaecati ab possimus tenetur amet vitae ratione, quia reiciendis. Praesentium vero fugiat corporis beatae voluptatum assumenda facilis sequi?",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
