import { people, People } from "@components/People";
import { Text, Icon } from "@goright/design-system";

export default function WhoAreWe() {
  return (
    <div className="max-w-4xl mx-auto mt-28">
      <div className="flex items-start">
        <Icon name="Group32" className="mr-6" />
        <Text variant="6Xl" as="h2">
          Who Are We
        </Text>
      </div>
      <People people={people.slice(0,2)} />
    </div>
  );
}
