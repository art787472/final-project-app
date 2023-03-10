-- CreateTable
CREATE TABLE "articles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "zhTitle" TEXT NOT NULL,
    "enTitle" TEXT,
    "articleId" TEXT NOT NULL,
    "pubdate" TEXT NOT NULL,
    "isScrped" INTEGER,
    "sourceLink" TEXT
);

-- CreateTable
CREATE TABLE "text" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "zh" TEXT,
    "en" TEXT,
    "articleId" INTEGER
);

