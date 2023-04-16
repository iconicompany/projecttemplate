-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "ticker" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "isin" TEXT,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);
