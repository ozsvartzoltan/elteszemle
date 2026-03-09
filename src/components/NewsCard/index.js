import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@heroui/react";
import { useTheme } from "../../contexts/ThemeContext";

const NewsCard = ({ newsItem }) => {
  const { colors } = useTheme();
  return (
    <Card className="bg-gray-900 border border-gray-700 shadow-lg w-full overflow-hidden">
      <CardHeader className="p-0 w-full">
        <Image
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-auto object-cover"
        />
      </CardHeader>
      <CardBody className="p-6">
        <h2 className="text-white font-semibold">{newsItem.title}</h2>
        <p className="text-gray-400 text-sm mb-2">{newsItem.date}</p>
        <p className="text-gray-300 mb-4 text-sm sm:text-md">
          {newsItem.description}
        </p>
        <Button
          className="text-white transition-all mt-auto"
          style={{ backgroundColor: colors.mainColor }}
          onPress={() => window.open(`${newsItem?.link?.page}`, "_self")}
        >
          Megtekintés
        </Button>
      </CardBody>
    </Card>
  );
};

export default NewsCard;
