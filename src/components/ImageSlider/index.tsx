import React from "react";
import { FlatList } from "react-native";

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface Props {
  ImagesUrl: string[];
}

export function ImageSlider({ ImagesUrl }: Props) {
  return (
    <Container>
      <ImageIndexes>
        {ImagesUrl.map((_, index) => (
          <ImageIndex key={String(index)} active={true} />
        ))}
      </ImageIndexes>

      <FlatList
        data={ImagesUrl}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
