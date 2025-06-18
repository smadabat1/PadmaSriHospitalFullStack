import { View } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";

/*
{
    id: 1,
    title: "Why is Embryo Donation Needed?",
    subtitle: "Embryo donation serves as a valuable option for several reasons",
    values: [
        {
        id: 1,
        title: "Severe Infertility Challenges",
        subtitle: "Couples facing insurmountable infertility in both partners may find hope through embryo donation.",
        },
        {
        id: 2,
        title: "Risk of Genetic Disorders",
        subtitle: "Couples who are both carriers of serious heritable diseases can avoid passing them on by using donated embryos.",
        },
        {
        id: 3,
        title: "Prior IVF Failures",
        subtitle: "Individuals with previous unsuccessful IVF treatments or poor embryo quality might consider embryo donation.",
        },
        {
        id: 4,
        title: "Financial Considerations",
        subtitle: "Embryo donation can be a more affordable path to parenthood compared to a full IVF cycle.",
        },
    ],
},
*/

export default function SectionRenderer({ sections }) {
  return (
    <View>
      {sections.map((section) => (
        <View key={`service_section_${section.id}`} className="gap-y-4">
          <View>
            <Text className="font-bold text-lg text-primary">{section.title}</Text>
          </View>
          <View>
            <Text>{section.subtitle}</Text>
          </View>
          {section.values && section.values.length && (
            <View className="gap-y-2">
              {section.values.map((subsection) => (
                <View key={`service_subsection_${subsection.id}`}>
                  <View>
                    <Text className="font-bold">
                      {`\u2022`} {subsection.title}
                    </Text>
                  </View>
                  <View>
                    <Text>{subsection.subtitle}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
}
