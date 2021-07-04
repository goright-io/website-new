import { Text, Icon, Testimonial } from "@goright/design-system";

const testimonials = [
  {
    name: "David Teissier",
    // avatar: "/rasheed_avatar.png",
    text:
      "Sherif was a true professional in his business. Great skills in web design and UX. CSS has no secrets for him also. We worked together on web projects to large sizes.",
    colors: "bg-primary-50 text-light-on-background-900",
  },
  {
    name: "Junaid Rasheed",
    // avatar: "/rasheed_avatar.png",
    text:
      "Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.",
    colors: "bg-primary-500 text-light-on-background-100",
  },
  {
    name: "Anthony Tahar",
    // avatar: "/rasheed_avatar.png",
    text:
      "Sherif is a proactive and tireless contributor who would make a great addition to any team. He completed his assignments on time and never failed to add a creative touch when appropriate.",
    colors: "bg-light-background-50 text-light-on-background-100",
  },
  {
    name: "Alexander Petrovskiy",
    // avatar: "/rasheed_avatar.png",
    text:
      "Varya is a highly skilled professional designer and developer. Along with these qualities, she is a great leader, a team player, and a business partner! She is a valuable asset to any team when it comes to solving complex business problems! I'm glad to recommend her!",
    colors: "bg-primary-50 text-light-on-background-900",
  },
];

export default function PeopleSay() {
  return (
    <div className="relative max-w-4xl mx-auto overflow-x-visible mt-28">
      <div className="flex items-start">
        <Icon name="Forum32" className="mr-6" />
        <Text variant="6Xl" as="h2">
          People Say
        </Text>
      </div>
      <div className="">
        <Testimonial      
 testimonials={testimonials} />
      </div>
    </div>
  );
}
