import React, { FC } from "react";
import { Title, Text } from ".";

interface InfoBlockProps {
  className?: string;
}

export const InfoBlock: FC<InfoBlockProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Доставка и оплата" className="my-8" size="xl" />
      <div className="flex ">
        <div className="w-full px-[10px]">
          <Title text="Работаем ежедневно" className="mb-10" size="md" />
          <Text>
            Заказы принимаем ежедневно с 10:00 до 22:34 <br />
            Заказы доставляем ежедневно с 12:00 до 23:40
          </Text>
          <Text>
            Самовывоз из самого заведения возможен: Вс-чт с 12:00 до 23:00 Пт-сб
            с 12:00 до 00:00. Время работы кафе «Якитория» 12:00-23:00.
          </Text>
          <Text>
            Среднее время доставки 73 минуты, по возможности ранее. Время
            доставки может увеличиться в ситуации сильных пробок или другой
            неблагоприятной обстановки на дорогах.
          </Text>
        </div>
        <div className="w-full px-[10px]">
          <Title text="Доставка бесплатно" className="mb-10" size="md" />
          <Text>
            Размер минимальной суммы заказа зависит от адреса доставки и
            начинается от 800 рублей.
          </Text>
          <Text>Подробные условия читайте в разделе доставка и оплата.</Text>
          <Text>
            Изображения на сайте могут отличаться от фактического изображения
            приобретённых продуктов.
          </Text>
          <Text>Адрес самовывоза: ул. Октябрьская, 7а</Text>
        </div>
      </div>
    </div>
  );
};


