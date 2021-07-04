import { Text, Icon, Timetable } from "@goright/design-system";

export default function WorkshopContent() {
  const timetableDay1 = [
    {
      color: "bg-accent-red",
      description: "What are design systems",
      name: "Introduction",
      time: "10.00 – 10:30",
    },
    {
      color: "bg-accent-red",
      description: "Icebreaker exercise",
      name: "Introduction",
      time: "10.30 – 11:00",
    },
    {
      color: "bg-accent-purple",
      description: "Setting up Figma project and project repository",
      name: "Design and process",
      time: "11.00 – 11:40",
    },
    {
      color: "bg-accent-purple",
      description: "UI inventory and scoping",
      name: "Design and process",
      time: "11.40 – 12:15",
    },
    {
      color: "bg-accent-turqoise",
      description: "",
      name: "LUNCH BREAK",
      time: "12.15 – 12:45",
    },
    {
      color: "bg-accent-purple",
      description: "UI inventory discussion",
      name: "Design and process",
      time: "12.45 – 13:00",
    },

    {
      color: "bg-accent-blue",
      description:
        "Design tokens foundation. Intro to visual regression testing",
      name: "Designing and building the library",
      time: "13.00 – 13:30",
    },
    {
      color: "bg-accent-blue",
      description: "Hands-on practice",
      name: "Designing and building the library",
      time: "13.30 – 14:00",
    },
  ];
  const timetableDay2 = [
    {
      color: "bg-accent-blue",
      description:
        "Coding and documenting the components. New design challenge",
      name: "Designing and building the library",
      time: "10.00 – 11:45",
    },
    {
      color: "bg-accent-red",
      description:
        "Versioning and release. Documenting components in ZeroHeight",
      name: "Design system lifecycle",
      time: "11.45 – 12:00",
    },

    {
      color: "bg-accent-turqoise",
      description: "",
      name: "LUNCH BREAK",
      time: "12.00 – 12:30",
    },
    {
      color: "bg-accent-red",
      description: "Hands-on update and release",
      name: "Design system lifecycle",
      time: "12.30 – 13:30",
    },
    {
      color: "bg-accent-red",
      description: "Q&A session and discussion",
      name: "Recap",
      time: "13.30 – 14:00",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto mt-28">
      <div className="flex items-start">
        <Icon name="TableOfContents32" className="mr-6" />
        <Text variant="6Xl" as="h2">
          Workshop content
        </Text>
      </div>
      <Timetable className="w-full mt-16" data={timetableDay1} header="Day 1" />
      <Timetable className="w-full mt-16" data={timetableDay2} header="Day 2" />
    </div>
  );
}
