import { Product, ProductVariant } from "@prisma/client";

export type TProduct = Product & { variants: ProductVariant[] };