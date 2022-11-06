-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(12) NOT NULL,
    "imgPath" VARCHAR(255) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gifticon" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "brandId" INTEGER NOT NULL,
    "category" VARCHAR(12) NOT NULL,
    "imgPath" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Gifticon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "brandId" INTEGER NOT NULL,
    "category" VARCHAR(12) NOT NULL,
    "imgPath" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Gifticon" ADD CONSTRAINT "Gifticon_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;
