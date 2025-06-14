-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL COLLATE NOCASE,
    "birth" DATETIME NOT NULL,
    "gender" TEXT NOT NULL COLLATE NOCASE,
    "height" REAL NOT NULL
);
