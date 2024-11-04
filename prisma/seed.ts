import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categoriesPrisma, products, recProducts, foodAppliances } from "./prismaSeedingConstants"
import { Prisma } from "@prisma/client";

type TGenProduct = {
    name: string;
    imageUrl: string;
    imageUrlBig: string
    description: string
    categoryId: number;
}

const randomDecimalNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10
}
const generateRandomWeight = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10
}

const generateProductVariant = ({ productId, variantId, variantName, }: { productId: number, variantId?: number, variantName?: string }) => {
    return {
        productId,
        price: randomDecimalNumber(190, 600),
        weight: generateRandomWeight(37, 2000),
        variantName,
        variantId
    } as Prisma.ProductVariantUncheckedCreateInput
}
const generateProductsVariant = ({ products }: { products: TGenProduct[] }) => {
    return products.map((item, i) => {

        return {
            productId: 9 + i,
            price: randomDecimalNumber(190, 600),
            weight: generateRandomWeight(37, 2000),
            variantId: 1,
            variantName: "Нет"
        } as Prisma.ProductVariantUncheckedCreateInput
    })
}




async function up() {

    await prisma.user.createMany({
        data: [
            {
                fullName: "User",
                email: "bomj@mail.ru",
                password: hashSync('11111', 10),
                verified: new Date(),
                role: 'USER'
            },
            {
                fullName: "Admin",
                email: "chelovek@mail.ru",
                password: hashSync('11111', 10),
                verified: new Date(),
                role: 'ADMIN'
            }
        ]
    })
    await prisma.category.createMany({
        data: categoriesPrisma
    })

    const product1 = await prisma.product.create({
        data: {
            name: "Крем-суп с беконом",
            imageUrl: "http://cdn.bellinigroup.ru/upload/202410/66fb8c4e6f208_296x296_fit_85_000.png.jpg",
            imageUrlBig: "http://cdn.bellinigroup.ru/upload/202410/66fb8c4e6f208_600x600_fit_85_000.png.jpg",
            description: "Укусный супчек",
            categoryId: 1,

        }
    })

    const product2 = await prisma.product.create({
        data: {
            name: "Спайси гункан",
            imageUrl: "http://cdn.bellinigroup.ru/upload/202410/66fbed5936558_296x296_fit_85_000.jpeg.jpg",
            imageUrlBig: "http://cdn.bellinigroup.ru/upload/202410/66fbed5936558_600x600_fit_85_000.jpeg.jpg",
            description: "Укусная штучка",
            categoryId: 6
        }
    })
    const product3 = await prisma.product.create({
        data: {
            name: "Инари гункан",
            imageUrl: "https://cdn.bellinigroup.ru/upload/201904/5cb6ca427f71b_296x296_fit_85_000.jpeg.jpg",
            imageUrlBig: "https://cdn.bellinigroup.ru/upload/201904/5cb6ca427f71b_600x600_fit_85_000.jpeg.jpg",
            description: "Укусная штучка",
            categoryId: 6

        }
    })
    const product4 = await prisma.product.create({
        data: {
            name: "Бургер «Нью-йорк»",
            imageUrl: "http://cdn.bellinigroup.ru/upload/202410/66fb741d137f5_296x296_fit_85_000.png.jpg",
            imageUrlBig: "http://cdn.bellinigroup.ru/upload/202410/66fb741d137f5_600x600_fit_85_000.png.jpg",
            description: "Бургер",
            categoryId: 9

        }
    })
    const product5 = await prisma.product.create({
        data: {
            name: "Тыквенный крем-суп",
            imageUrl: "http://cdn.bellinigroup.ru/upload/202410/66fb8cf362183_296x296_fit_85_000.png.jpg",
            description: "Укусный супчек",
            imageUrlBig: "http://cdn.bellinigroup.ru/upload/202410/66fb8cf362183_600x600_fit_85_000.png.jpg",
            categoryId: 10

        }
    })
    const product6 = await prisma.product.create({
        data: {
            name: "Крем-суп с беконом",
            imageUrl: "http://cdn.bellinigroup.ru/upload/202410/66fb8c4e6f208_296x296_fit_85_000.png.jpg",
            imageUrlBig: "http://cdn.bellinigroup.ru/upload/202410/66fb8c4e6f208_600x600_fit_85_000.png.jpg",
            description: "Укусный супчек",
            categoryId: 10

        }
    })
    const product7 = await prisma.product.create({
        data: {
            name: "Крем-суп из шпината",
            imageUrl: "http://cdn.bellinigroup.ru/upload/202410/66fb8b3aa4956_296x296_fit_85_000.png.jpg",
            imageUrlBig: "http://cdn.bellinigroup.ru/upload/202410/66fb8b3aa4956_600x600_fit_85_000.png.jpg",
            description: "Крем суп из шпината",
            categoryId: 10

        }
    })
    const product8 = await prisma.product.create({
        data: {
            name: "Сок Rich",
            imageUrl: "https://cdn.bellinigroup.ru/upload/202212/63a5ecad36ac1_296x296_fit_85_000.png.jpg",
            imageUrlBig: "https://cdn.bellinigroup.ru/upload/202212/63a5ecad36ac1_600x600_fit_85_000.png.jpg",
            description: "Сок",
            categoryId: 15

        }
    })


    await prisma.product.createMany({
        data: products
    })

    await prisma.productVariant.createMany({
        data: [
            //Крем суп
            generateProductVariant({ productId: product1.id, variantId: 1, variantName: "Нет" }),
            generateProductVariant({ productId: product1.id, variantId: 2, variantName: "+ Угорь 30г" }),
            generateProductVariant({ productId: product1.id, variantId: 3, variantName: "+ Краб 30г" }),
            //Спайси гункана
            generateProductVariant({ productId: product2.id, variantId: 1, variantName: "Тунец" }),
            generateProductVariant({ productId: product2.id, variantId: 2, variantName: "Лосось" }),
            generateProductVariant({ productId: product2.id, variantId: 3, variantName: "Угорь" }),
            generateProductVariant({ productId: product2.id, variantId: 4, variantName: "Гребешок" }),
            //Инари гункана
            generateProductVariant({ productId: product3.id, variantId: 1, variantName: "Лосось" }),
            generateProductVariant({ productId: product3.id, variantId: 2, variantName: "Гребешок" }),
            generateProductVariant({ productId: product3.id, variantId: 3, variantName: "Угорь" }),
            //Бургер Нью-йорк
            generateProductVariant({ productId: product4.id, variantId: 1, variantName: "Без всего" }),
            generateProductVariant({ productId: product4.id, variantId: 2, variantName: "+ Бекон" }),
            generateProductVariant({ productId: product4.id, variantId: 3, variantName: "+ Картофель" }),
            generateProductVariant({ productId: product4.id, variantId: 4, variantName: "+ Бекон&Картофель" }),
            //Супы
            generateProductVariant({ productId: product5.id, variantId: 1, variantName: "Нет" }),
            generateProductVariant({ productId: product5.id, variantId: 2, variantName: "+ Угорь 30г" }),
            generateProductVariant({ productId: product5.id, variantId: 3, variantName: "+ Краб 30г" }),
            generateProductVariant({ productId: product6.id, variantId: 1, variantName: "Нет" }),
            generateProductVariant({ productId: product6.id, variantId: 2, variantName: "+ Угорь 30г" }),
            generateProductVariant({ productId: product6.id, variantId: 3, variantName: "+ Краб 30г" }),
            generateProductVariant({ productId: product7.id, variantId: 1, variantName: "Нет" }),
            generateProductVariant({ productId: product7.id, variantId: 2, variantName: "+ Угорь 30г" }),
            generateProductVariant({ productId: product7.id, variantId: 3, variantName: "+ Краб 30г" }),
            //Сок
            generateProductVariant({ productId: product8.id, variantId: 1, variantName: "Апельсин" }),
            generateProductVariant({ productId: product8.id, variantId: 2, variantName: "Яблоко" }),
            generateProductVariant({ productId: product8.id, variantId: 3, variantName: "Персик" }),
            generateProductVariant({ productId: product8.id, variantId: 4, variantName: "Вишня" }),
            generateProductVariant({ productId: product8.id, variantId: 5, variantName: "Томат" }),
            //Без категорий
            ...generateProductsVariant({ products: products }),
        ]
    })
    await prisma.recProduct.createMany({
        data: recProducts
    })
    await prisma.foodAppliances.createMany({
        data: foodAppliances
    })
    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '123332'
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '124332'
            },
        ]
    })
    await prisma.cartItem.create({
        data:
        {
            productItemId: 1,
            cartId: 1,
            quantity: 2,

        }

    })
}
async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "RecProduct" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "FoodAppliances" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`;

}
async function main() {
    try {
        await down()
        await up()

    } catch (e) {
        console.log(e);

    }
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
})