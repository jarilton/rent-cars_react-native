import React from "react";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { Button } from "../../components/Button";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("SchedulingComplete");
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          ImagesUrl={[
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgSFRYZGBUaGBoZHBYcGCUcGhoYGRoZGhkaGRocIy4lHB4rHxgYJjgmKy80NjY1HCQ7QD4zPy40NTEBDAwMEA8QGhISGjEhISE0NDE0NDQ0NDQ0NDUxPzQ/MTE0NDQ0MTRANTQ/Pz80MTQ/MTE0MTExMTY0NDExNDQxMf/AABEIALwBDAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABHEAACAQIDBAcFBgMFBQkAAAABAgADEQQSIQUGMUETIlFhcYGRBzJCobEUUmJyksEzstEWI1OCohVD4fDxFyREg5OUwtLT/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGxEBAQEBAAMBAAAAAAAAAAAAAAEREgIhMQP/2gAMAwEAAhEDEQA/AOzREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARE8MwAuTYdpge4kJit6MEhytiKZb7qsHb0W5kbW37ww91Kz+FJwPXLAtsSiVvaB93D1PMf1ImjU39r8sO/ov7sYHSYnL235xf8AgVP9ExNv5i/8Cp6L+0DqsTk7e0LEjjRqfov9FmfZW/eJxFUUKdNi5BNmAQBVtmYll4C49YHUYldXHVUA6asisfhCg38L2LeQmT+0VNdGY+ORh+0uJqdiQ1LeGifiP6WH1E3aG0qT+66k9mYRit2J5DA8J6kCIiAiIgIiICIiAiIgIiICIiAiIgJiqVAoLMQABckmwAHEkngJC7xbz0cLlpkNUxD/AMPD0xmque23wrobsdNDxlNx4rYgh8ewYXBXA0zeipvdelI1rPw092/C8Cw4vfDPdcGgddQcU9xQBH3ALNWP5bL+KV7F5sQ2Vi+Ic8mF0436tJeooHbYntJk5g9hvUs1Y5EHBBobch2IO6TuHpU6a5UUAd3PxPOBWcDuxUI6xWmv3QLn0Gg9Z52xsmnRVQHZnOpJsFVRxJ8eA17eyWTHbRWmj1XOVEUsx52H78pwveDbFSu71HJzVCWyk3CKNEQDhoLeJuecCzVtqYdGs1VWb7qXe36QR6mSWx1+0u6UlayIGzupRCxNggNjc8TPXsu2WVpNi2HWqHIh7EU6keLX/SJTN99vVq+JqKKrrRpuaaIrlV6hysxAPWJYE3PK0Cx7bwmPoK1ToKZRQWLoxfKo1JIJU2t3Sm1tv4g/Hl/Kqj9rzJsjeKqlLEYSo7vTq0mRAzFsrkqOre5AKlr8uEm9xN3qGJTFdOCMvR5XBytT0cswJ0toL300gVdMXiarLTR6ju7BUQObsx4AWPz5TruydmLs+iKYPSYyoFzuOsbn3UTNyuCFB4kMx0BtHbj7Ap4RXxzXd2JShdcpKE2VgpPVZ9PASJ2rtJqtXOSWAYkMODMdC47tAF/CBzJvfiLBX2Bi6hLVHp0w3wZzr+cgdc+Jt2ADSaO1N03oUmqlqbBbXCqb2Jte58RILGYSs56SsHJPxOG+RblLHu3Wc0MRhnLFTSZkubgEA3Vb9vVNu4yKqGGpoXKtZcrglrcEY5XPfb3pd33Mrr7mIGnAHMF9NRKTvBSNMCoO4EX5NodPELLnsXfmn9mo58pcIFcvUVNU6t9bnWwPDnA1Ku0cfg3Cucw5a6MPwkdXyteT+xt/6b2SsCjcM1tP+fO/dPmH3gweMBw9R6ak6gdKjajmrA6MPCU7amGoUajK2IpaGx666qeB48xGjsuHxCuoZGDA8wbzPOQbM2muHvUoYqlYC5pmqpRgOQF9D2W9J1LA4zOozaNzEDdiIgIiICIiAiIgfInjpBPJqy5U1mia5qGeS0vJrPmHbIPeKvjMop4RFDNo2IcjLSXtFMm7v2A2HC9+ElM/fMbV1Gl7nsGscpqn4bdqtRztTTNVfWpialQNVqH8RF8q6CyjQWE2KGAxlHrU8PQdzxqVK7C3cqqht6y0CoT2Dx1PoJ9zjm3/AD5RyarD1Nqn/cYT/wBw/wD+cxE7W5UMH/6z/wD0lsNVe2eTil7Y5NUDeDZe1sTTFFkwqLmDNlrPdsuqg3Xhex8hKw+4O0vuUD/5v9VnZftXYpjpm7APExya5Jgd3Ns0DmpIoOUqLYhSADxsrCw4dk0H3R2lcscFmJJJK1qZJJNydWBNyZ2k1G7VmM1H+96f9I5NcTqbv45fewNUeBVv5SZsbvbv4mpiFSpSq0aIBLllZcyC10uQBroLDt7AZ15633iPMzx9qQfEv6h/WXk1Rd9tqVgFp4em7AXVStNnQBdH90aX9wcLDP3Sv7I2iaeZ8YRRItkRkyXGuZl0JJvYd1++dQxVemQbMhJ/ECe/5WnO95t1FxFda3S2WygpYagEnRr9W9/lJYr63tBw6aK7nyYj5rNDaIo7RCHCJUbEX6zZCtMDn0je74HjcDtlpwGAw6W/uqVx2U1PDwEsmGxyWsFa3YEIHloBGJrl9b2d4tyhvSW173duBt91DNin7L65tmr01t2IW08yvfOmVMeqqWKMFAuSSoAHm08UNpBwHRVI7S/1ABtyl5hqhUfZSD7+JJ/LTA+rNJDD+y7DAEPVrMDxF1H0SXP7U/Yg/Uf2E+Gu5+IDwT+rH6RkNQGA3AwNMqQjvlIYB3Yi4NwSt8p11sRLdh8OoN7m/jIjEVnUXAdzf3Q6p5k9UWmSllaxyi/AgkORpfWxPZCp2tciyuVPaLEeYPEeFj3zZpE2FyCbC5AsL8yBc2HmZXQ2U6In6AZv4fEMqlzYKLE2AGg97zteSxJUzERMtERPhMDDUxCqyoT1mvYeAJ/aY3ck9w+ZlK2btitVxeIqMn/dab6VWYIqmmpUhWYgMWzHnYWFyLz1U9oOEGl0IubN0yWOvEG+ssxKuBcTC9YyqDf/AAmW4KtrqBXp3HZe7Aa68+Uxf2/wp+H0r0P3qia2Ji1tVM8tVMrlHfTCtfRhYX1q4c37havqZlTebDt98eSN/I7RpiaLk8TAe3CaeH2hScZgXC/ipOCfyjL1vKRO8O8yYZQRRqPfgzDo6d+QZ31U92WNVYDWjpCZybaW/dZy6jEU6AA6q0kLsx+70jg2/NZfOQz4zpcuetiqwPv5na3D3UGcDzIHhHSY7TiMdTT36iJ+Z1X6mRtTe7ArxxdH/K4b+W85dRwmHpsWfDrk+FXqAEHtYhczHuFvOT+xdq0mZadChQQM2tQISyqLlypfNwAI1y8ZNXFxG+mA4nEEj8NGo30SbOG2/TrLnwwDre2djwI4goNQe4kHunFtubSVsQ1RFIRdbXPW4hM55/ePdOp7nYc0sMi1SekYdI5PItqFPgtge+8supiTq1qrcXI7k6nzHW+c1mpKfeGb85LfzXn3be1KdBGqOwVRxbjqeCqB7zHsnO9o76YpjehhwqcmqAs5HbYEAeGsW4roK0U5IvoJmFEEWsLHiOU5psz2gVFYJiqYCk2zqCCveVJIYeFvOdOwOPpOgcHNcAqV1DA8CD2SaIl91cIxGairC50I01ueHifnN/CbOp0l6OkgRL3ygaXPG3ZMtTG6aADUd/MTw2Obu9BL6GwlE982KWFPZI04x/vGeGxJPEk+cCZq4MlbZlQ8iQpA8m0mpgcG6XaviVc8lVVVBw5KCxOnbI7pZ8erpAsReiPjv4Kf6T4MbRHAMfID95X+lnwPDKT2gaNZcj0lZfxHUeBFiJ7wNZKShEpqiKCQFFteAmhTaVXfvaLBEwtMnPVvmI4imNCB2FibeGaK0kcX7QsIKuQ1dQbFlQsgPe44+I0lmp7TFRqZQgplBsDdST8QI4gi3znEcXsqmAFGU8Qz8EUBKbhg99RaoBe3HlLb7K8U4d8I5N6Zut+Sk6gdwa36jJKWO4obgHunuYqJ6o8BMsypNTaGJ6Om9S18qlrXtewva/KbcgdrYwCocO5AWpTumtiWByutuejJ56cxLErhO2t5auMbLW6uGUlVw1IDIgB4jrC79hYEd3KR2Mq0rg0i4AvoxZQCbaplBKtx5AWbxmrtqiadWrTPFXe17c9eYvztpO70dwtmmkhOGQEopJDOtyVF75WkVx/Z+KUAjpbMyBQrOQwqMxFRr6EsBlysTysOybe0cXluQ6L/AHgY3qH+CgA6ik65iGutj1uQl2xe6WyxUektCpmpqrMVquQuYgKo63vWN7W4TVbcfAOTlWqDa/8AFJ5sOd+YMksvxu/n5SbY5TXr53dyuUs7HKpXqgm+Wx1IGmvOeMq35acT1CL9vcJ0ba24uGp0qlRWqgojsAXBF1UkcVvbTtnMiere/PtH1A+UrCz7nb11MG5Ny2HZuvSzcPxJ2P8AXge0dvplK1MOAHpOgYXFwyMLi4PcZ+ft3dnNicRToAmx1ZgdVpjVyCLcr6HmRO7IwUBVsqgAAcAANAPSa8UqA2j7NqDtmps9EH4FylR+XNqvhe0xL7OKI0OIq94Uj5gAjnLMMQvxVUXzJPoBNattnAoSHxJvrdRZfrrLkEUu42FsM1Ss4GmrgcND8Ann+xmAU3FNyeZ6RluOw5LXE262+ezFFlqKbdrX+hnrDbzYWo6UwSGcZkBQrnW17oWAzC2ukek9tWlu1gEIKYZAQbgkltRwPWJknUracBM1bEIeCDxv/SVzezHdFhqjroxGRe5nOUHyBJ8oVVtr7RWvXVnfJRDinStqzMSFaoq8L6+8dALcSbSIx2IumICpZ6VenTU5mZmuaitfW2uQaACRdclkoVADYMEzclKu1hfgCQQfWSCm7VHObr4qo91UsSUzKtgOJzVb+UxWpN9MBoqx6F3BrH4Dqt/8M1L6P3cL6XBln9n20SpfBuTpd6d/u3669xB1t4yo4fC0KBz4g9I17rh1PE8jVcaKO0C58JPYOq5xGGxbU+jaq5uuUqpucjFQfhIZD4gmJUsdDqNp6fUTzmiodPMfWeCZtHvNF5j6QT0iO3uoT5QPV58Y/t9ZtUtlVW42XxP9JuJsAaFmJ1HAW7uJgRJcdsI95Otg6Ce9kB/E1z6X/aa1XaNEaDrdwQAfMCGWojWE5lvTjC+IqkHW/QKe5UJa3Z1mYTpZrqxzKuVey9/E+E5dhazulR06Ng9VmdHZQXUs5GTNrnB1BU3GnGStRrVlDJTWo5SmQpYAXdwFVFVF+InILE6C1+6W3dGiU2nTc0+iz4cnos12VVZQme+oYoqE3sdb2F5XqLNSUBaLmuVLK5bIz0kFilHqm2XUkK2bqmx0tLJ7PcKXrrXVSP7uqCtyxztUUNZiSWBKsbnvkn1XasG11E2Jq4KmVRQ3HUnzJP7zakCc19rDtTbB4lSB0b1AdeTNSsbc8pANu6dKlU32wNCqiDEvloqSSqi7ve3UUAEm9hoB+0DkXtEwyriFrWK08RTBva9mHEfm1OmkyUfanj1AQ9AyhQBdNbDQXIYCWjGb6YVP7r7LieiUAAPhw6WUZVIFQ5uA4nWRtTebYr/xMOgP4sKVI/Q+k1YiPT2pYni1CiSeJAZb/wCsn1n3/tMqnjhk8nYeuhtNk1933+Cmvga6f/EiP9k7Afg6r4Yph/OkmLqOx+/5qUnpnD5S6MmYOSAWBF/d148pSVTMOen4tdTyvqZ0gbrbHf3cQ2v3cVTP8wnunuHgCQRUrOB8PTUrHuJXX0jKmse4mAXDUKmMqkDOCAx1y0k4tfnmYeiiQuH25jsbXYUKhpUQdWsAtNO1mtcsRyvx7tZftq7AFektEq6UhlGRGCjKo6q8zYWHpKtvJsLFJSGGwtILhwLsEYF3PMPcg24dt/DSXBF7e3rKp9lw1R2sLPiWJZnPxZDwA7x5dspDVF42u17km5v46zbxeBqpfpKboRzZLfOYTU0yiwHO2hPict5Kr6tyjMbAaAAZRc3F7g6nQ8RLPtXEv0WHxQJL0+iYEnkFVbeGgHlKmwty4211vLdhaZqYEC3wOt+V0ZrftIOl06wdVdfdZQw8GAI+RlZ33xKqiB0zrcuUzFc2XKg6w1BvUv5SS3cDrhaC1FKuKajKdCALhbjl1QJCbz4tlxC5MuZcO5s6h161RSbqdD1UabvxFZw5wrE00qNRTNmalWF8jDg9N1uCw0FmAuJjRCxXDtXVaauzmr7oYsAWK9tusAOd+ye/tfSVMj0KA0zM6UyhCi5J6rZTovMcbSapYHB9JXpVVcKGc0XpgZqbnMSjITaocqubcepYakTCoZq9Gg3921NSNBVdGrVO4qpUIp8L+M+4Q1Gr03eoaueohWoSTmXOvC/u2OhXkZ5q4AM4wddlFTKpw+JB6lVG9xWPNGHutxU6Hukti7OZXp0ypVjiHqZSLZVo34jlewHpEXyu10EUGbhoM1rnhxmZcNSX33BPZf8AYXM9LsoFQXZ9RmIuFUX153PZzkPjds4CjcKoqsON3OW/i17+QtNspn/aGGTgLnw/dpkXbLNpToO3fYkfIW+cqD78Bf4aUaf5UzH10Hykfid9arcaz+C2Qf6bGTUx0F8RjWF8i0x2sVUepJMj8TWH++xtMdqqzVD6Lb6TnFbb6sbtdj2s2b/j858TeGmPgB8dfrGri7vtTAobZ8RVPYiBAf1WPznvAbbwzuKYwzoTwZ7OL3sAwDMV8bekq2G33ROFKn5oD9ZNYX2qFBYIijsVAB8pNMbm8e28PRR8temagVx0Ye7BwCALeM5bs90NNQ7EBXDaLmvxFrD83ymTe/GpiMQ+KQW6TrMtrAPwJHjx8byP2ZisjAkAjMpseBKm9j3HhFuqur1yzjDu7KSxem9/4dfpCgdezrhAwHEMx4gTre4GCC0WqlBTdyMyDgrWzVAvYvSNU05WtynHcOq1qiClmZ2XJlddAzVDUd2INiMzcuPynftkURTpJTANlUC7e8x4sx7ySSfGQSMREBNSvQpsczIrEaBioJA7AeM2WkBtJsSbhAFHcLn5wIreLZhLmqmOfDqQB0eRXS4FrqragnnKVtrF4mkuaniKeJtxVsOqtbtF9G8LyyY3Z9Vzd8zHvkTiNgBuKmBQ33yYkiphsK3c2HsfOzTx/aPDH3sBhT3gOv0Bllxe5iNykTiNzcvugwI//a+Ab3sAg/LXYfVZ8+0bLP8A4WovhXv9Z4xG7jr8Jmk+xnHwmBZdnbfw1H+DUxlP8IqI6foe4+UsmF39p2s6O47cqo/qrFT+kTl77Lf7pmE7PcfCZdMdg/tps1+q9R0bgUekWA/zJcWmDErsasLtXwt+3rK38onIzg3+6Z4OFfsMamOqjd7Y3HpqZ7g5P8zCbWFGAo6UWpCxuCziwb7wTMRm0GvdOOnDN2fKeTTtyjTHbft1L3zWpnvzjXzvKDvFtRWxrMjKwVEUc1OjFh3jrkHzlOZYRiDcRaYtey6hNW7Ii0UXpajKpBKUyGCEknUsFW3OaGOxDrh6VW9qlXEVK9+YKZFU/r6T0jZu0wFemwDI4UOt7E5TdSGHCx8R2g6WksVXw1TKCtQKlNKYSyGypr7973LEkm3ORWzTpjEBsLUUIqqtak5GlI1ArVqWbkrXZlB4Ed809qbffpS1NyLIKYY6sUFuJPMlQSeM+vUercIMqEk6DS5+p7/pNjB7useCXPadYENW2hXqe+7vftYkenCY1wznlaXzC7pOeKnyEmMHuax+Bj/lNoHLPsNQ8LzImw6rcjO54PcNAAWYDuAvJfD7pUF45m9B9IHAKW6lVuU36G5Dtzn6Bo7Fw68Ka+ev1m2lFF91VHgAIHCMN7Nqjcm/T/WS2H9k7n3tPEidmtPsDluG9kNH43PgJK4b2UbOXVkZ/FrD0EvsQIXZe7GDw/8ABoIh7QNfUyZAn2ICIiAnyfYgY2pKeIExNgkPwibMQNB9l0z8MxPsOkeUlIgQb7tUTymu+6VE/wDSWSIFUfcukez0mBtxqf4fSXKIFGbcJPwzC3s+TsWX+IHOX9ngPwr6zVq+zS/wp6zqEQORv7KifhX9UwH2RE/EF852OIHHqfsZX4qx8hf6yWwXshwi6u9R+7NYegnS4gV3Z25uDo2y0wbfeJb6mTVHComioq+CgTYiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB//Z",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Acessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/09/2022</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(24)}
            color={theme.colors.shape}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/10/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900,00</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}