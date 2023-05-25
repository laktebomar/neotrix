export const data: Idata[] = [
  {
    id: 1,
    name: "Image Generator",
    description:
      "Generate images, backgrounds, and wallpapers for your projects by only using text commands",
    image:
      "https://dreamtrain.s3.us-west-2.amazonaws.com/image-gen-8fa38263-9df5-4fd9-8a54-9f9bbab89f77/generated_images/0.png",
  },
  {
    id: 2,
    name: "Image Remixer",
    description: "Make your images look better by remixing them using AI",
    image:
      "https://dreamtrain.s3.us-west-2.amazonaws.com/image-gen-df9f19c2-c6e1-4b13-ba5c-4a92f7e357c0/generated_images/3.png",
  },
  {
    id: 3,
    name: "Icon Generator",
    description: "Create personalized icons for your projects using AI",
    image:
      "https://dreamtrain.s3.us-west-2.amazonaws.com/image-gen-6dcddeb5-f625-44d8-9025-82a2c31d82f0/generated_images/7.png",
  },
];

export interface Idata {
  id: number;
  name: string;
  description: string;
  image: string;
}
